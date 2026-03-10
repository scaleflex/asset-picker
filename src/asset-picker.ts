import { LitElement, html, css, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import { createStore, Store } from './store';
import type { AppState } from './store/store.types';
import { StoreController } from './controllers/store.controller';
import { SelectionController } from './controllers/selection.controller';
import { InfiniteScrollController } from './controllers/infinite-scroll.controller';
import { MarqueeController } from './controllers/marquee.controller';
import { ApiClient } from './services/api-client';
import { getFiles } from './services/files.service';
import { getFolders, getFoldersPreviews } from './services/folders.service';
import { getLabels } from './services/labels.service';
// Settings are now fetched via getMetadataSettings (single API call)
import { exchangeSassKey } from './services/auth.service';
import type { AssetPickerConfig, ViewMode, SortBy, TabKey } from './types/config.types';
import type { Asset } from './types/asset.types';
import type { Folder } from './types/folder.types';
import {
  FILTER_KEYS,
  APPROVAL_FILTER_KEYS,
  type AnyFilterKey,
  type AnyFilter,
  type StringFilter,
  type DateFilter,
  type FiltersState,
} from './types/filter.types';
import type { GetFilesParams } from './types/api.types';
import { getMetadataSettings } from './services/filters.service';
import { serializeFilters } from './utils/filter-serialize';
import { loadPinnedFilters, savePinnedFilters, savePinnedMetadata } from './utils/filter-pin-storage';

// Import all components
import './components/modal/ap-modal';
import './components/header/ap-header';
import './components/navigation/ap-breadcrumb';
import './components/toolbar/ap-content-toolbar';
import './components/filters/ap-filters-bar';
import './components/filters/ap-filter-popover';
import './components/filters/ap-filter-type';
import './components/filters/ap-filter-date';
import './components/filters/ap-filter-tags';
import './components/filters/ap-filter-labels';
import './components/filters/ap-filter-color';
import './components/filters/ap-filter-size';
import './components/filters/ap-filter-image';
import './components/filters/ap-filter-metadata';
import './components/filters/ap-filter-approval';
import './components/views/ap-grid-view';
import './components/views/ap-list-view';
import './components/views/ap-asset-card';
import './components/views/ap-asset-row';
import './components/views/ap-folder-card';
import './components/views/ap-folder-row';
import './components/views/ap-skeleton';
import './components/preview/ap-preview-panel';
import './components/selection/ap-selection-bar';
import './components/selection/ap-marquee-overlay';
import './components/shared/ap-icon';
import './components/shared/ap-spinner';
import './components/shared/ap-checkbox';
import './components/shared/ap-popover';
import './components/shared/ap-dropdown';
import './components/shared/ap-badge';
import './components/shared/ap-tooltip';

export class AssetPicker extends LitElement {
  static styles = [
    css`
      :host {
        display: contents;
        font-family: var(--ap-font-family, system-ui, -apple-system, sans-serif);
      }
      .content-area {
        position: relative;
        flex: 1;
        display: flex;
        overflow: hidden;
        min-height: 0;
      }
      .main-content {
        position: relative;
        flex: 1;
        min-width: 0;
        overflow-y: auto;
      }
      .empty-state {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 64px 20px;
        color: var(--ap-muted-foreground, #71717a);
        text-align: center;
      }
      .empty-state ap-icon {
        margin-bottom: 16px;
        opacity: 0.5;
      }
      .empty-title {
        font-size: var(--ap-font-size-base, 1rem);
        font-weight: 500;
        color: var(--ap-foreground, #09090b);
        margin-bottom: 4px;
      }
      .empty-desc {
        font-size: var(--ap-font-size-sm, 0.875rem);
      }
      .loading-center {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 64px 20px;
      }
    `,
  ];

  private store: Store<AppState>;
  private storeCtrl: StoreController;
  private selectionCtrl: SelectionController;
  private infiniteScrollCtrl: InfiniteScrollController;
  private marqueeCtrl: MarqueeController;
  private apiClient?: ApiClient;
  private _lastSentinel?: Element;
  private _lastMarqueeContainer?: HTMLElement;
  private _initPromise?: Promise<void>;
  private _initFailed = false;
  private _loadId = 0;
  private _loadMoreId = 0;
  private _loadDataTimer: ReturnType<typeof setTimeout> | null = null;

  @property({ type: Object }) config?: AssetPickerConfig;

  constructor() {
    super();
    this.store = createStore();
    this.storeCtrl = new StoreController(this, this.store);
    this.selectionCtrl = new SelectionController(this, this.store);
    this.infiniteScrollCtrl = new InfiniteScrollController(this, () => this._loadMore());
    this.marqueeCtrl = new MarqueeController(this, this.store);
  }

  connectedCallback() {
    super.connectedCallback();
  }

  updated(changed: Map<string, unknown>) {
    super.updated(changed);
    if (changed.has('config') && this.config) {
      this._initConfig(this.config);
    }

    // Observe sentinel for infinite scroll
    const sentinel = this.renderRoot.querySelector('#sentinel');
    if (sentinel && sentinel !== this._lastSentinel) {
      this._lastSentinel = sentinel;
      const scrollContainer = this.renderRoot.querySelector('.main-content');
      this.infiniteScrollCtrl.observe(sentinel, scrollContainer);
    }

    // Attach marquee controller to main content area
    const mainContent = this.renderRoot.querySelector('.main-content') as HTMLElement;
    if (mainContent && mainContent !== this._lastMarqueeContainer) {
      this._lastMarqueeContainer = mainContent;
      this.marqueeCtrl.attach(mainContent);
    }
  }

  private _initConfig(config: AssetPickerConfig) {
    this._initFailed = false;
    this._initPromise = this._doInit(config).catch(() => {
      this._initFailed = true;
    });
  }

  private async _doInit(config: AssetPickerConfig) {
    this.store.setState({
      config,
      projectToken: config.auth.projectToken,
      viewMode: config.defaultViewMode ?? 'grid',
      sortBy: config.defaultSortBy ?? 'created_at',
      sortDirection: config.defaultSortDirection ?? 'desc',
      currentFolder: config.rootFolderUuid ?? null,
    });

    this.apiClient = new ApiClient(config.auth, config.apiBase);

    try {
      // Exchange SASS key if using security template auth
      if (config.auth.mode === 'securityTemplate') {
        const sassKey = await exchangeSassKey(this.apiClient);
        this.apiClient.setSassKey(sassKey);
        this.store.setState({ sassKey });
      }

      // Fetch settings (includes brand color + metadata model + regional variants) and labels
      const [metadataResult, labelsResult] = await Promise.allSettled([
        getMetadataSettings(this.apiClient),
        getLabels(this.apiClient),
      ]);

      if (metadataResult.status === 'fulfilled') {
        const { fields, regionalVariantGroups, regionalFilters, brandColor } = metadataResult.value;
        this.store.setState({
          metadataFields: fields,
          regionalVariantGroups,
          regionalFilters,
          ...(brandColor ? { brandColor } : {}),
        });
      }

      if (labelsResult.status === 'fulfilled') {
        this.store.setState({ labels: labelsResult.value.labels || [] });
      }

      // Load pinned filters from localStorage
      const { pinnedFilters, pinnedMetadata } = loadPinnedFilters(config.auth.projectToken ?? null);
      const currentFilters = this.store.getState().filters;
      this.store.setState({
        filters: {
          ...currentFilters,
          pinned: pinnedFilters,
          visible: [...pinnedFilters],
          metadata: {
            ...currentFilters.metadata,
            pinned: pinnedMetadata,
            visible: [...pinnedMetadata],
          },
        },
      });
    } catch (err) {
      this.dispatchEvent(new CustomEvent('ap-error', {
        detail: { error: err as Error, context: 'init' },
        bubbles: true,
        composed: true,
      }));
      throw err; // re-throw so open() knows init failed
    }
  }

  async open() {
    const state = this.store.getState();
    this.store.setState({
      isOpen: true,
      activeTab: 'assets',
      searchQuery: '',
      filters: {
        metadata: {
          pinned: state.filters.metadata.pinned,
          visible: [...state.filters.metadata.pinned],
          applied: {},
        },
        pinned: state.filters.pinned,
        visible: [...state.filters.pinned],
        applied: {},
      },
      offset: 0,
      assets: [],
      folders: [],
      currentFolder: this.config?.rootFolderUuid ?? null,
      currentFolderPath: '/',
      breadcrumb: [],
      selectedAssets: new Map(),
      folderPreviews: {},
      isPreviewOpen: false,
      previewAsset: null,
      isLoading: true,
    });
    this.dispatchEvent(new CustomEvent('ap-open', {
      detail: { timestamp: Date.now() },
      bubbles: true,
      composed: true,
    }));
    // Wait for Lit update cycle so updated() can process config changes
    // (e.g. re-init apiClient with new SASS key if config was reassigned)
    await this.updateComplete;
    // If config is set but init hasn't started yet, start it now
    if (!this._initPromise && this.config) {
      this._initConfig(this.config);
    }
    if (this._initPromise) {
      await this._initPromise;
      if (this._initFailed) return;
    }
    this._loadData();
  }

  close() {
    this.store.setState({ isOpen: false });
  }

  private _scrollToTop() {
    this.renderRoot.querySelector('.main-content')?.scrollTo({ top: 0 });
  }

  private async _loadData() {
    if (!this.apiClient) return;
    const loadId = ++this._loadId;
    const state = this.store.getState();

    this._scrollToTop();
    this.store.setState({ isLoading: true });

    try {
      const tab = state.activeTab;

      if (tab === 'assets') {
        const searchNotation = this._buildSearchNotation();
        const result = await getFiles(this.apiClient, {
          folder: state.currentFolderPath || '/',
          offset: 0,
          limit: state.limit,
          sort_by: state.sortBy,
          sort_direction: state.sortDirection,
          search: state.searchQuery || undefined,
          q: searchNotation || undefined,
          recursive: 1,
        });

        if (loadId !== this._loadId) return;

        const filesCount = result.files?.length ?? 0;
        const hasMore = filesCount >= state.limit;
        const baseCount = result.base?.count?.files_recursive ?? result.base?.count?.files_direct ?? 0;
        const totalCount = hasMore ? baseCount : filesCount;

        this.store.setState({
          assets: result.files || [],
          folders: [],
          totalCount,
          totalFolderCount: 0,
          offset: 0,
          hasMore,
          isLoading: false,
        });
      } else if (tab === 'folders') {
        const searchNotation = this._buildSearchNotation();
        // Fetch folders and files in current folder in parallel
        const [foldersResult, filesResult] = await Promise.all([
          getFolders(this.apiClient, {
            folderPath: state.currentFolderPath,
            q: state.searchQuery || undefined,
            recursive: state.searchQuery ? 1 : 0,
            sort_by: state.sortBy,
            sort_direction: state.sortDirection,
          }),
          getFiles(this.apiClient, {
            folder: state.currentFolderPath || '/',
            offset: 0,
            limit: state.limit,
            sort_by: state.sortBy,
            sort_direction: state.sortDirection,
            search: state.searchQuery || undefined,
            q: searchNotation || undefined,
            recursive: 0,
          }),
        ]);

        if (loadId !== this._loadId) return;

        const folders = foldersResult.folders || [];

        // Fetch folder previews
        let previews: Record<string, { file_uri_cdn: string; file_type: string }[]> = {};
        if (folders.length > 0) {
          try {
            previews = await getFoldersPreviews(this.apiClient, folders.map(f => f.uuid));
          } catch {
            // Previews are non-critical
          }
        }

        if (loadId !== this._loadId) return;

        this.store.setState({
          assets: filesResult.files || [],
          folders,
          folderPreviews: previews,
          totalCount: (filesResult.files?.length ?? 0) >= state.limit
            ? (filesResult.base?.count?.files_direct ?? 0)
            : (filesResult.files?.length ?? 0),
          totalFolderCount: foldersResult.total ?? folders.length,
          offset: 0,
          hasMore: (filesResult.files?.length ?? 0) >= state.limit,
          isLoading: false,
        });
      }
    } catch (err) {
      if (loadId !== this._loadId) return;
      this.store.setState({ isLoading: false });
      this.dispatchEvent(new CustomEvent('ap-error', {
        detail: { error: err as Error, context: 'loadData' },
        bubbles: true,
        composed: true,
      }));
    }
  }

  private async _loadMore() {
    const state = this.store.getState();
    if (state.isLoading || !state.hasMore || !this.apiClient) return;

    const loadMoreId = ++this._loadMoreId;
    const newOffset = state.offset + state.limit;
    this.store.setState({ isLoading: true });

    try {
      const searchNotation = this._buildSearchNotation();
      const result = await getFiles(this.apiClient, {
        folder: state.currentFolderPath || '/',
        offset: newOffset,
        limit: state.limit,
        sort_by: state.sortBy,
        sort_direction: state.sortDirection,
        search: state.searchQuery || undefined,
        q: searchNotation || undefined,
        recursive: 1,
      });

      if (loadMoreId !== this._loadMoreId) return;

      const currentAssets = this.store.getState().assets;
      const newFiles = result.files || [];
      const hasMore = newFiles.length >= state.limit;
      const allAssets = [...currentAssets, ...newFiles];
      this.store.setState({
        assets: allAssets,
        offset: newOffset,
        hasMore,
        isLoading: false,
        ...(!hasMore ? { totalCount: allAssets.length } : {}),
      });
    } catch (err) {
      if (loadMoreId !== this._loadMoreId) return;
      this.store.setState({ isLoading: false });
    }
  }

  private _debouncedLoadData(delay = 120) {
    if (this._loadDataTimer) clearTimeout(this._loadDataTimer);
    this._loadDataTimer = setTimeout(() => {
      this._loadDataTimer = null;
      this._loadData();
    }, delay);
  }

  private _handleCancel(reason: string) {
    const state = this.store.getState();
    if (state.isPreviewOpen) {
      this.store.setState({ isPreviewOpen: false, previewAsset: null });
      return; // Don't close the modal, just close preview
    }
    this.close();
    this.config?.onCancel?.();
    this.dispatchEvent(new CustomEvent('ap-cancel', {
      detail: { reason },
      bubbles: true,
      composed: true,
    }));
  }

  private _handleSearchChange(e: CustomEvent) {
    this.store.setState({ searchQuery: e.detail.value, offset: 0, assets: [], folders: [] });
    this.selectionCtrl.resetRange();
    this._loadData();
  }

  private _handleViewChange(e: CustomEvent) {
    this.store.setState({ viewMode: e.detail.mode as ViewMode });
    this._scrollToTop();
  }

  private _handleRegionalChange(e: CustomEvent) {
    const { groupUuid, value } = e.detail;
    const current = this.store.getState().regionalFilters;
    this.store.setState({
      regionalFilters: { ...current, [groupUuid]: value },
    });
  }

  private _handleSortChange(e: CustomEvent) {
    this.store.setState({
      sortBy: e.detail.value as SortBy,
      offset: 0,
      assets: [],
      folders: [],
    });
    this.selectionCtrl.resetRange();
    this._loadData();
  }

  private _handleSortDirectionChange(e: CustomEvent) {
    this.store.setState({
      sortDirection: e.detail.value as 'asc' | 'desc',
      offset: 0,
      assets: [],
      folders: [],
    });
    this.selectionCtrl.resetRange();
    this._loadData();
  }

  private _handleTabChange(e: CustomEvent) {
    this.store.setState({
      activeTab: e.detail.tab as TabKey,
      offset: 0,
      assets: [],
      folders: [],
    });
    this.selectionCtrl.resetRange();
    this._loadData();
  }

  private _handleAssetSelect(e: CustomEvent) {
    this.selectionCtrl.handleSelect(e.detail.asset, e.detail.index, e.detail.event);
  }

  private _handleAssetPreview(e: CustomEvent) {
    this.store.setState({
      previewAsset: e.detail.asset,
      isPreviewOpen: true,
    });
  }

  private _handleQuickSelect(e: CustomEvent) {
    const asset: Asset = e.detail.asset;
    this.config?.onSelect?.([asset]);
    this.dispatchEvent(new CustomEvent('ap-select', {
      detail: { assets: [asset] },
      bubbles: true,
      composed: true,
    }));
    this.close();
  }

  private _handleFolderOpen(e: CustomEvent) {
    const folder: Folder = e.detail.folder;
    const state = this.store.getState();
    const folderPath = folder.path || `${state.currentFolderPath}${folder.name}/`;
    this.store.setState({
      currentFolder: folder.uuid,
      currentFolderPath: folderPath,
      breadcrumb: [...state.breadcrumb, { uuid: folder.uuid, name: folder.name, path: folderPath }],
      offset: 0,
      assets: [],
      folders: [],
    });
    this.selectionCtrl.resetRange();
    this._loadData();
  }

  private _handleBreadcrumbNavigate(e: CustomEvent) {
    const uuid = e.detail.uuid;
    const state = this.store.getState();
    const idx = uuid ? state.breadcrumb.findIndex((b) => b.uuid === uuid) : -1;
    const crumbs = uuid ? state.breadcrumb.slice(0, idx + 1) : [];
    const folderPath = crumbs.length > 0 ? crumbs[crumbs.length - 1].path : '/';
    this.store.setState({
      currentFolder: uuid || null,
      currentFolderPath: folderPath,
      breadcrumb: crumbs,
      offset: 0,
      assets: [],
      folders: [],
    });
    this.selectionCtrl.resetRange();
    this._loadData();
  }

  private _handlePreviewClose() {
    this.store.setState({ isPreviewOpen: false, previewAsset: null });
  }

  private _handlePreviewNavigate(e: CustomEvent) {
    this.store.setState({ previewAsset: e.detail.asset });
  }

  private _handleSelectionConfirm(e: CustomEvent) {
    const assets: Asset[] = e.detail.assets;
    this.config?.onSelect?.(assets);
    this.dispatchEvent(new CustomEvent('ap-select', {
      detail: { assets },
      bubbles: true,
      composed: true,
    }));
    this.close();
  }

  private _handleSelectionClear() {
    this.selectionCtrl.clearSelection();
  }

  private _handleSelectionDeselect(e: CustomEvent) {
    const selected = new Map(this.store.getState().selectedAssets);
    selected.delete(e.detail.uuid);
    this.store.setState({ selectedAssets: selected });
  }

  // ── Filter Handlers ──────────────────────────────────────────────────

  private _isDateFilterKey(key: string): boolean {
    return key === FILTER_KEYS.DATE
      || key === FILTER_KEYS.LICENSE_EXPIRY
      || key === APPROVAL_FILTER_KEYS.DUE_DATE;
  }

  private _handleFilterUpdate(e: CustomEvent) {
    const { key, values, operator } = e.detail;
    const state = this.store.getState();
    const filters = { ...state.filters };

    // Determine if filter has meaningful values
    const isEmpty = values === '' || values === null || values === undefined
      || (Array.isArray(values) && values.length === 0)
      || (typeof values === 'object' && !Array.isArray(values) && Object.values(values as Record<string, unknown>).every(
        (v) => v === null || v === undefined || v === '' || (Array.isArray(v) && v.length === 0),
      ));

    if (isEmpty) {
      // Remove filter
      const applied = { ...filters.applied };
      delete applied[key as AnyFilterKey];
      filters.applied = applied;
      // If not pinned, remove from visible
      if (!filters.pinned.includes(key)) {
        filters.visible = filters.visible.filter((k: AnyFilterKey) => k !== key);
      }
    } else {
      // Add/update filter
      const applied = { ...filters.applied };

      if (this._isDateFilterKey(key) && typeof values === 'object' && !Array.isArray(values)) {
        // Date-type filters: store as DateFilter
        applied[key as AnyFilterKey] = {
          type: 'date',
          field: values.field || 'created',
          kind: values.kind || null,
          preset: values.preset || null,
          from: values.from || null,
          to: values.to || null,
        } as DateFilter;
      } else if (key === FILTER_KEYS.IMAGE && typeof values === 'object' && !Array.isArray(values)) {
        // Image filter: store the sub-selections object directly as a special entry
        // We store it as-is; the serializer handles the conversion
        (applied as Record<string, unknown>)[key] = values;
      } else {
        // String-type filters
        applied[key as AnyFilterKey] = {
          type: 'string',
          values: Array.isArray(values) ? values : [values],
          operator: operator || ':',
        } as AnyFilter;
      }

      filters.applied = applied;
      // Ensure filter is visible
      if (!filters.visible.includes(key)) {
        filters.visible = [...filters.visible, key];
      }
    }

    this.store.setState({ filters, offset: 0, assets: [], folders: [] });
    this.selectionCtrl.resetRange();
    this._debouncedLoadData();
  }

  private _handleFilterRemove(e: CustomEvent) {
    const key = e.detail.key as AnyFilterKey;
    const state = this.store.getState();
    const filters = { ...state.filters };
    const applied = { ...filters.applied };
    delete applied[key];
    filters.applied = applied;
    if (!filters.pinned.includes(key)) {
      filters.visible = filters.visible.filter((k: AnyFilterKey) => k !== key);
    }
    this.store.setState({ filters, offset: 0, assets: [], folders: [] });
    this.selectionCtrl.resetRange();
    this._debouncedLoadData();
  }

  private _handleMetadataFilterChange(e: CustomEvent) {
    const { fieldKey, operator, values, metadataType } = e.detail;
    const state = this.store.getState();
    const filters = { ...state.filters };
    const metadata = { ...filters.metadata };
    const applied = { ...metadata.applied };

    const isEmpty = !values || (Array.isArray(values) && values.length === 0);

    if (isEmpty) {
      delete applied[fieldKey];
      metadata.applied = applied;
      if (!metadata.pinned.includes(fieldKey)) {
        metadata.visible = metadata.visible.filter((k: string) => k !== fieldKey);
      }
    } else {
      applied[fieldKey] = {
        type: 'string',
        values: Array.isArray(values) ? values : [values],
        operator: operator || ':',
        metadataType,
      } as AnyFilter;
      metadata.applied = applied;
      if (!metadata.visible.includes(fieldKey)) {
        metadata.visible = [...metadata.visible, fieldKey];
      }
    }

    filters.metadata = metadata;
    this.store.setState({ filters, offset: 0, assets: [], folders: [] });
    this.selectionCtrl.resetRange();
    this._debouncedLoadData();
  }

  private _handleMetadataFieldToggle(e: CustomEvent) {
    const { fieldKey, visible } = e.detail;
    const state = this.store.getState();
    const filters = { ...state.filters };
    const metadata = { ...filters.metadata };

    if (visible) {
      if (!metadata.visible.includes(fieldKey)) {
        metadata.visible = [...metadata.visible, fieldKey];
      }
    } else {
      metadata.visible = metadata.visible.filter((k: string) => k !== fieldKey);
    }

    filters.metadata = metadata;
    this.store.setState({ filters });
  }

  private _handleMetadataFilterRemove(e: CustomEvent) {
    const { fieldKey } = e.detail;
    const state = this.store.getState();
    const filters = { ...state.filters };
    const metadata = { ...filters.metadata };
    const applied = { ...metadata.applied };
    delete applied[fieldKey];
    metadata.applied = applied;
    if (!metadata.pinned.includes(fieldKey)) {
      metadata.visible = metadata.visible.filter((k: string) => k !== fieldKey);
    }
    filters.metadata = metadata;
    this.store.setState({ filters, offset: 0, assets: [], folders: [] });
    this.selectionCtrl.resetRange();
    this._debouncedLoadData();
  }

  private _handleFilterPin(e: CustomEvent) {
    const { key, pinned } = e.detail;
    const state = this.store.getState();
    const filters = { ...state.filters };

    if (pinned) {
      if (!filters.pinned.includes(key)) {
        filters.pinned = [...filters.pinned, key];
      }
    } else {
      filters.pinned = filters.pinned.filter((k: AnyFilterKey) => k !== key);
      // If filter is not applied, remove from visible
      if (!(key in filters.applied)) {
        filters.visible = filters.visible.filter((k: AnyFilterKey) => k !== key);
      }
    }

    this.store.setState({ filters });
    const projectId = this.store.getState().config?.auth?.projectToken ?? null;
    savePinnedFilters(projectId, filters.pinned);
  }

  private _handleMetadataPin(e: CustomEvent) {
    const { fieldKey, pinned } = e.detail;
    const state = this.store.getState();
    const filters = { ...state.filters };
    const metadata = { ...filters.metadata };

    if (pinned) {
      if (!metadata.pinned.includes(fieldKey)) {
        metadata.pinned = [...metadata.pinned, fieldKey];
      }
    } else {
      metadata.pinned = metadata.pinned.filter((k: string) => k !== fieldKey);
      if (!(fieldKey in metadata.applied)) {
        metadata.visible = metadata.visible.filter((k: string) => k !== fieldKey);
      }
    }

    filters.metadata = metadata;
    this.store.setState({ filters });
    const projectId = this.store.getState().config?.auth?.projectToken ?? null;
    savePinnedMetadata(projectId, metadata.pinned);
  }

  private _handleFiltersClearAll() {
    const state = this.store.getState();
    this.store.setState({
      filters: {
        ...state.filters,
        applied: {},
        visible: [...state.filters.pinned],
        metadata: {
          ...state.filters.metadata,
          applied: {},
          visible: [...state.filters.metadata.pinned],
        },
      },
      offset: 0,
      assets: [],
      folders: [],
    });
    this.selectionCtrl.resetRange();
    this._debouncedLoadData();
  }

  private _handleFilterDeactivate(e: CustomEvent) {
    const key = e.detail.key as AnyFilterKey;
    const state = this.store.getState();
    const filters = { ...state.filters };
    filters.visible = filters.visible.filter((k: AnyFilterKey) => k !== key);
    this.store.setState({ filters });
  }

  private _handleMetadataFieldDeactivate(e: CustomEvent) {
    const { fieldKey } = e.detail;
    const state = this.store.getState();
    const filters = { ...state.filters };
    const metadata = { ...filters.metadata };
    metadata.visible = metadata.visible.filter((k: string) => k !== fieldKey);
    filters.metadata = metadata;
    this.store.setState({ filters });
  }

  private _handleFiltersSet(e: CustomEvent) {
    const { applied, metadata } = e.detail as {
      applied: Record<AnyFilterKey, AnyFilter>;
      metadata?: { applied: Record<string, AnyFilter> };
    };
    const state = this.store.getState();
    const filters = { ...state.filters };

    // Replace applied filters
    filters.applied = applied;
    // Recompute visible as union of pinned + keys of applied
    const appliedKeys = Object.keys(applied) as AnyFilterKey[];
    filters.visible = [...new Set([...filters.pinned, ...appliedKeys])];

    // Same for metadata if provided
    if (metadata) {
      const meta = { ...filters.metadata };
      meta.applied = metadata.applied;
      const metaAppliedKeys = Object.keys(metadata.applied);
      meta.visible = [...new Set([...meta.pinned, ...metaAppliedKeys])];
      filters.metadata = meta;
    }

    this.store.setState({ filters, offset: 0, assets: [], folders: [] });
    this.selectionCtrl.resetRange();
    this._debouncedLoadData();
  }

  // ── Search Notation Builder ──────────────────────────────────────────

  private _buildSearchNotation(): string {
    const state = this.store.getState();
    const parts = serializeFilters(state.filters.applied, state.filters.metadata.applied);
    return parts.join(' ');
  }

  render() {
    const s = this.storeCtrl.state;
    const selectedIds = Array.from(s.selectedAssets.keys());
    const selectedAssets = this.selectionCtrl.getSelectedAssets();

    return html`
      <ap-modal
        ?open=${s.isOpen}
        @ap-cancel=${(e: CustomEvent) => this._handleCancel(e.detail.reason)}
      >
        <div slot="header">
          <ap-header
            .activeTab=${s.activeTab}
            .hiddenTabs=${this.config?.hiddenTabs ?? []}
            .viewMode=${s.viewMode}
            .searchQuery=${s.searchQuery}
            .regionalGroups=${s.regionalVariantGroups}
            .regionalFilters=${s.regionalFilters}
            @tab-change=${this._handleTabChange}
            @search-change=${this._handleSearchChange}
            @view-change=${this._handleViewChange}
            @regional-change=${this._handleRegionalChange}
            @ap-close=${() => this._handleCancel('close-button')}
          ></ap-header>
        </div>

        <div class="content-area">
          <div class="main-content">
            ${s.breadcrumb.length > 0
              ? html`<ap-breadcrumb
                  .items=${s.breadcrumb}
                  @breadcrumb-navigate=${this._handleBreadcrumbNavigate}
                ></ap-breadcrumb>`
              : nothing}

            <ap-content-toolbar
              .isLoading=${s.isLoading}
              .totalCount=${s.totalCount}
              .totalFolderCount=${s.totalFolderCount}
              .sortBy=${s.sortBy}
              .sortDirection=${s.sortDirection}
              .filters=${s.filters}
              .labels=${s.labels}
              .metadataFields=${s.metadataFields}
              @sort-change=${this._handleSortChange}
              @sort-direction-change=${this._handleSortDirectionChange}
              @filter-update=${this._handleFilterUpdate}
              @metadata-filter-change=${this._handleMetadataFilterChange}
              @metadata-field-toggle=${this._handleMetadataFieldToggle}
            ></ap-content-toolbar>

            <ap-filters-bar
              .appliedFilters=${s.filters.applied}
              .appliedMetadata=${s.filters.metadata.applied}
              .pinnedFilters=${s.filters.pinned}
              .pinnedMetadata=${s.filters.metadata.pinned}
              .metadataFields=${s.metadataFields}
              @filter-remove=${this._handleFilterRemove}
              @filter-deactivate=${this._handleFilterDeactivate}
              @metadata-filter-remove=${this._handleMetadataFilterRemove}
              @metadata-field-deactivate=${this._handleMetadataFieldDeactivate}
              @filter-pin=${this._handleFilterPin}
              @metadata-pin=${this._handleMetadataPin}
              @filters-clear-all=${this._handleFiltersClearAll}
              @filters-set=${this._handleFiltersSet}
            ></ap-filters-bar>

            ${s.isLoading && s.assets.length === 0 && s.folders.length === 0
              ? html`<ap-skeleton .variant=${s.viewMode}></ap-skeleton>`
              : this._renderContent(s, selectedIds)}

            <ap-marquee-overlay .active=${this.marqueeCtrl.isActive} .rect=${this.marqueeCtrl.rect}></ap-marquee-overlay>
          </div>

          ${s.isPreviewOpen && s.previewAsset
            ? html`<ap-preview-panel
                .asset=${s.previewAsset}
                .assets=${s.assets}
                .selectedIds=${selectedIds}
                .containerToken=${s.projectToken}
                .showMetadata=${this.config?.showMetadata !== false}
                .metadataFields=${s.metadataFields}
                .regionalFilters=${s.regionalFilters}
                @preview-close=${this._handlePreviewClose}
                @preview-navigate=${this._handlePreviewNavigate}
                @asset-select=${this._handleAssetSelect}
              ></ap-preview-panel>`
            : nothing}
        </div>

        <div slot="footer">
          <ap-selection-bar
            .selectedAssets=${selectedAssets}
            @selection-confirm=${this._handleSelectionConfirm}
            @selection-clear=${this._handleSelectionClear}
            @selection-deselect=${this._handleSelectionDeselect}
          ></ap-selection-bar>
        </div>
      </ap-modal>
    `;
  }

  private _renderContent(s: AppState, selectedIds: string[]) {
    if (s.activeTab === 'assets') {
      if (!s.isLoading && s.assets.length === 0) {
        return html`
          <div class="empty-state">
            <ap-icon name="search" .size=${48}></ap-icon>
            <div class="empty-title">No assets found</div>
            <div class="empty-desc">Try adjusting your search or filters</div>
          </div>
        `;
      }

      if (s.viewMode === 'grid') {
        return html`
          <ap-grid-view
            .assets=${s.assets}
            .folders=${[]}
            .selectedIds=${selectedIds}
            .isLoading=${s.isLoading}
            @asset-select=${this._handleAssetSelect}
            @asset-preview=${this._handleAssetPreview}
            @asset-quick-select=${this._handleQuickSelect}
          ></ap-grid-view>
          <div id="sentinel"></div>
        `;
      }

      return html`
        <ap-list-view
          .assets=${s.assets}
          .folders=${[]}
          .selectedIds=${selectedIds}
          .isLoading=${s.isLoading}
          @asset-select=${this._handleAssetSelect}
          @asset-preview=${this._handleAssetPreview}
          @asset-quick-select=${this._handleQuickSelect}
        ></ap-list-view>
        <div id="sentinel"></div>
      `;
    }

    if (s.activeTab === 'folders') {
      if (!s.isLoading && s.folders.length === 0 && s.assets.length === 0) {
        return html`
          <div class="empty-state">
            <ap-icon name="folder" .size=${48}></ap-icon>
            <div class="empty-title">This folder is empty</div>
            <div class="empty-desc">No folders or files found here</div>
          </div>
        `;
      }

      if (s.viewMode === 'grid') {
        return html`
          <ap-grid-view
            .assets=${s.assets}
            .folders=${s.folders}
            .folderPreviews=${s.folderPreviews}
            .selectedIds=${selectedIds}
            .isLoading=${s.isLoading}
            @asset-select=${this._handleAssetSelect}
            @asset-preview=${this._handleAssetPreview}
            @asset-quick-select=${this._handleQuickSelect}
            @folder-open=${this._handleFolderOpen}
          ></ap-grid-view>
          <div id="sentinel"></div>
        `;
      }

      return html`
        <ap-list-view
          .assets=${s.assets}
          .folders=${s.folders}
          .selectedIds=${selectedIds}
          .isLoading=${s.isLoading}
          @asset-select=${this._handleAssetSelect}
          @asset-preview=${this._handleAssetPreview}
          @asset-quick-select=${this._handleQuickSelect}
          @folder-open=${this._handleFolderOpen}
        ></ap-list-view>
        <div id="sentinel"></div>
      `;
    }

    return nothing;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'asset-picker': AssetPicker;
  }
}
