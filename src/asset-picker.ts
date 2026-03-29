import { LitElement, html, css, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import { createStore, Store } from './store';
import type { AppState, BreadcrumbItem } from './store/store.types';
import { StoreController } from './controllers/store.controller';
import { SelectionController } from './controllers/selection.controller';
import { InfiniteScrollController } from './controllers/infinite-scroll.controller';
import { MarqueeController } from './controllers/marquee.controller';
import { ApiClient } from './services/api-client';
import { getFiles, getFilesStats } from './services/files.service';
import { getFolders, getFoldersPreviews } from './services/folders.service';
import { getLabels } from './services/labels.service';
import { getTags } from './services/tags.service';
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
  type FilterKey,
  type StringFilter,
  type DateFilter,
  type FiltersState,
} from './types/filter.types';
import type { GetFilesParams } from './types/api.types';
import { getMetadataSettings } from './services/filters.service';
import { FILTER_LABELS } from './components/filters/filters.constants';
import { serializeFilters } from './utils/filter-serialize';
import { normalizeFilters } from './utils/filter-normalize';
import { loadPinnedFilters, savePinnedFilters, savePinnedMetadata } from './utils/filter-pin-storage';
import { loadSortPreference, saveSortPreference } from './utils/sort-storage';
import { loadLastFolder, saveLastFolder, loadLastView, saveLastView, loadLastTab, saveLastTab } from './utils/preference-storage';
import { applyBrandColor } from './utils/brand-color';
import {
  MAIN_SORT_OPTIONS,
  SEARCH_SORT_OPTIONS,
  FOLDERS_SORT_OPTIONS,
  type SortOption,
} from './components/toolbar/sort.constants';

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
import './components/filters/ap-filter-product-ref';
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
import './components/selection/ap-folder-resolve-dialog';
import './components/shared/ap-icon';
import './components/shared/ap-spinner';
import './components/shared/ap-checkbox';
import './components/shared/ap-popover';
import './components/shared/ap-dropdown';
import './components/shared/ap-badge';
import './components/shared/ap-tooltip';
import './components/shared/ap-radio-group';

export class AssetPicker extends LitElement {
  static styles = [
    css`
      :host {
        display: contents;
        font-family: var(--ap-font-family, system-ui, -apple-system, sans-serif);
      }
      :host([inline]) {
        display: block;
        overflow: hidden;
        width: 100%;
        min-width: 0;
        box-sizing: border-box;
        height: var(--ap-inline-height, 600px);
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
      .toolbar-filters-wrapper {
        position: relative;
        z-index: 10;
      }
      .toolbar-filters-wrapper.sticky {
        position: sticky;
        top: 0;
        z-index: 20;
        background: var(--ap-background, oklch(1 0 0));
      }
      .empty-state {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 64px 20px;
        color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
        text-align: center;
      }
      .empty-state ap-icon {
        margin-bottom: 16px;
        opacity: 0.5;
      }
      .empty-title {
        font-size: var(--ap-font-size-base, 1rem);
        font-weight: 500;
        color: var(--ap-foreground, oklch(0.37 0.022 248.413));
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
      .ap-inline {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        background: var(--ap-background, oklch(1 0 0));
        font-family: var(--ap-font-family, system-ui, -apple-system, sans-serif);
        color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      }
      .ap-inline .inline-header {
        flex-shrink: 0;
      }
      .ap-inline .inline-content {
        flex: 1;
        overflow: hidden;
        position: relative;
        display: flex;
        flex-direction: column;
      }
      .ap-inline .inline-footer {
        flex-shrink: 0;
      }

      /* Upload drop zone overlay */
      .drop-zone-overlay {
        position: absolute;
        inset: 0;
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--ap-primary-10, oklch(0.65 0.19 258 / 0.08));
        border: 2px dashed var(--ap-primary, oklch(0.65 0.19 258));
        border-radius: var(--ap-radius, 8px);
        pointer-events: none;
        animation: drop-zone-in 150ms ease-out;
      }
      .drop-zone-overlay .drop-zone-label {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        color: var(--ap-primary, oklch(0.65 0.19 258));
        font-size: 1rem;
        font-weight: 500;
      }
      @keyframes drop-zone-in {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @media (prefers-reduced-motion: reduce) {
        .drop-zone-overlay { animation: none; }
      }

      /* Uploader overlay panel — fills the entire modal/inline container */
      .uploader-overlay {
        position: relative;
        display: flex;
        flex-direction: column;
        flex: 1;
        min-height: 0;
        background: var(--ap-background, #fff);
        animation: uploader-slide-in 250ms ease-out;
      }
      .uploader-close-btn {
        position: absolute;
        top: 14px;
        right: 20px;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        border: none;
        border-radius: var(--ap-radius-sm, 6px);
        background: none;
        color: var(--ap-muted-foreground, #71717a);
        cursor: pointer;
        transition: all 150ms;
      }
      .uploader-close-btn:hover {
        background: var(--ap-muted, #f4f4f5);
        color: var(--ap-foreground, #09090b);
      }
      .uploader-close-btn:focus-visible {
        outline: 2px solid var(--ap-ring, oklch(0.65 0.19 258));
        outline-offset: -2px;
      }
      @keyframes uploader-slide-in {
        from { transform: translateX(100%); }
        to   { transform: translateX(0); }
      }
      @media (prefers-reduced-motion: reduce) {
        .uploader-overlay { animation: none; }
      }
      .uploader-body {
        flex: 1;
        overflow: hidden;
        min-height: 0;
      }
      .uploader-body sfx-uploader {
        display: block;
        width: 100%;
        height: 100%;
        --sfx-up-border: transparent;
        --sfx-up-radius: 0;
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
  private _pendingFilter: string | null = null;
  private _pendingMetadataField: string | null = null;

  // ── Uploader integration ──────────────────────────────────────────
  private _uploaderEl: HTMLElement | null = null;
  private _uploaderImportPromise: Promise<void> | null = null;
  private _dragCounter = 0;
  @state() private _isDragOver = false;
  @state() private _isUploaderOpen = false;
  @state() private _folderResolveOpen = false;

  @property({ type: Object }) config?: AssetPickerConfig;

  constructor() {
    super();
    this.store = createStore();
    this.storeCtrl = new StoreController(this, this.store);
    this.selectionCtrl = new SelectionController(this, this.store);
    this.infiniteScrollCtrl = new InfiniteScrollController(this, () => this._loadMore());
    this.marqueeCtrl = new MarqueeController(this, this.store);
  }

  private get _isInline(): boolean {
    return this.config?.displayMode === 'inline';
  }

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    // Clean up uploader element reference
    if (this._uploaderEl) {
      this._uploaderEl.remove();
      this._uploaderEl = null;
    }
    this._uploaderImportPromise = null;
    this._dragCounter = 0;
    this._isDragOver = false;
    this._isUploaderOpen = false;
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
    // Apply defaults (local copy to avoid re-triggering Lit's updated() cycle)
    const resolved: AssetPickerConfig = { folderSelection: true, ...config };
    this._initFailed = false;
    this._initPromise = this._doInit(resolved).catch(() => {
      this._initFailed = true;
    });
    // Reflect inline mode as host attribute for styling
    this.toggleAttribute('inline', resolved.displayMode === 'inline');
    // In inline mode, auto-open so the picker is visible immediately
    if (resolved.displayMode === 'inline' && !this.store.getState().isOpen) {
      this.open();
    }
  }

  private async _doInit(config: AssetPickerConfig) {
    // Load persisted sort preference (takes priority over config defaults)
    const savedSort = loadSortPreference();
    const sortBy = savedSort.sortBy ?? config.defaultSortBy ?? 'created_at';
    const sortDirection = savedSort.sortDirection ?? config.defaultSortDirection ?? 'desc';

    this.store.setState({
      config,
      projectToken: config.auth.projectToken,
      viewMode: (config.rememberLastView && loadLastView()) || config.defaultViewMode || 'grid',
      sortBy,
      sortDirection,
    });

    this.apiClient = new ApiClient(config.auth, config.apiBase);

    try {
      // Exchange SASS key if using security template auth
      if (config.auth.mode === 'securityTemplate') {
        const sassKey = await exchangeSassKey(this.apiClient);
        this.apiClient.setSassKey(sassKey);
        this.store.setState({ sassKey });
      }

      // Fetch settings (includes brand color + metadata model + regional variants), labels, and tags
      const [metadataResult, labelsResult, tagsResult] = await Promise.allSettled([
        getMetadataSettings(this.apiClient),
        getLabels(this.apiClient),
        getTags(this.apiClient),
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

      if (tagsResult.status === 'fulfilled') {
        this.store.setState({ tags: tagsResult.value });
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

      // Apply brand color: config takes priority over API-fetched value
      const resolvedBrandColor = config.brandColor || this.store.getState().brandColor;
      if (resolvedBrandColor) {
        this.store.setState({ brandColor: resolvedBrandColor });
        applyBrandColor(this, resolvedBrandColor);
      }
    } catch (err) {
      this.dispatchEvent(new CustomEvent('ap-error', {
        detail: { error: err as Error, context: 'init' },
        bubbles: true,
        composed: true,
      }));
      throw err; // re-throw so open() knows init failed
    }
  }

  // ── Uploader integration ────────────────────────────────────────────

  /**
   * Ensure the uploader module is loaded (dynamic import).
   * Only called when config.uploader is set — zero cost otherwise.
   * Guards against concurrent calls via a shared promise.
   */
  private _ensureUploaderImport(): Promise<void> {
    if (this._uploaderImportPromise) return this._uploaderImportPromise;

    this._uploaderImportPromise = import('@scaleflex/uploader/define').then(() => {}, (err) => {
      // Clear so next call retries instead of returning a rejected promise
      this._uploaderImportPromise = null;
      throw err;
    });
    return this._uploaderImportPromise;
  }

  /** Build the uploader config from asset-picker state + user config. */
  private _buildUploaderConfig() {
    const config = this.config!;
    const uploaderCfg = config.uploader!;
    const state = this.store.getState();

    // Map asset-picker auth → uploader auth
    let uploaderAuth: any;
    if (config.auth.mode === 'securityTemplate') {
      uploaderAuth = {
        mode: 'security-template',
        container: config.auth.projectToken,
        securityTemplateId: config.auth.securityTemplateKey,
      };
    } else {
      uploaderAuth = {
        mode: 'sass-key',
        container: config.auth.projectToken,
        sassKey: config.auth.sassKey,
      };
    }

    return {
      auth: uploaderAuth,
      targetFolder: state.currentFolderPath || '/',
      mode: 'inline' as const,
      restrictions: uploaderCfg.restrictions,
      concurrency: uploaderCfg.concurrency,
      autoProceed: uploaderCfg.autoProceed,
      showFillMetadata: uploaderCfg.showFillMetadata,
      connectors: uploaderCfg.connectors,
      sourcesLayout: uploaderCfg.sourcesLayout,
      headerButton: uploaderCfg.headerButton ?? 'back',
      clearOnClose: uploaderCfg.clearOnClose,
      clearOnComplete: uploaderCfg.clearOnComplete,
      rejectedFileAutoRemoveDelay: uploaderCfg.rejectedFileAutoRemoveDelay,
    };
  }

  /** Open the uploader panel, optionally pre-loading files (from drop). */
  private async _openUploader(files?: File[]) {
    if (!this.config?.uploader || this._isUploaderOpen) return;

    try {
      await this._ensureUploaderImport();
    } catch (err) {
      // @scaleflex/uploader is not installed or failed to load
      this.dispatchEvent(new CustomEvent('ap-error', {
        detail: {
          error: err instanceof Error ? err : new Error(String(err)),
          context: 'uploader-load',
        },
        bubbles: true,
        composed: true,
      }));
      return;
    }

    // Create a fresh uploader element each time to reset file state
    this._uploaderEl = document.createElement('sfx-uploader');
    const el = this._uploaderEl;

    el.addEventListener('sfx-all-complete', () => {
      if (this.store.getState().isOpen) {
        this._loadData();
      }
    });
    el.addEventListener('sfx-complete-action', () => {
      this._closeUploader();
    });
    el.addEventListener('sfx-cancel', () => {
      this._closeUploader();
    });

    // Show the overlay first so the element is connected to the DOM
    this._isUploaderOpen = true;
    await this.updateComplete;

    // Now set config — the element is in the DOM and can resolve auth, etc.
    (el as any).config = this._buildUploaderConfig();
    await (el as any).updateComplete;

    if (files?.length) {
      (el as any).addFiles(files);
    }
  }

  /** Close the uploader panel and return to the asset picker. */
  private _closeUploader() {
    this._isUploaderOpen = false;
    this._uploaderEl = null;
  }

  private _handleUploadClick() {
    this._openUploader();
  }

  // ── Drop zone handlers ──────────────────────────────────────────────

  /** Check if the drag event contains files (not text selections, links, etc.). */
  private _hasFileTransfer(e: DragEvent): boolean {
    return !!e.dataTransfer?.types?.includes('Files');
  }

  private _onDragEnter = (e: DragEvent) => {
    if (!this.config?.uploader || !this._hasFileTransfer(e)) return;
    e.preventDefault();
    this._dragCounter++;
    if (this._dragCounter === 1) {
      this._isDragOver = true;
    }
  };

  private _onDragOver = (e: DragEvent) => {
    if (!this.config?.uploader || !this._hasFileTransfer(e)) return;
    e.preventDefault();
    if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
  };

  private _onDragLeave = (e: DragEvent) => {
    if (!this.config?.uploader || !this._hasFileTransfer(e)) return;
    e.preventDefault();
    this._dragCounter--;
    if (this._dragCounter <= 0) {
      this._dragCounter = 0;
      this._isDragOver = false;
    }
  };

  private _onDrop = (e: DragEvent) => {
    if (!this.config?.uploader || !this._hasFileTransfer(e)) return;
    e.preventDefault();
    this._dragCounter = 0;
    this._isDragOver = false;

    const files = Array.from(e.dataTransfer?.files ?? []);
    if (files.length > 0) {
      this._openUploader(files);
    }
  };

  async open() {
    const state = this.store.getState();
    const normalizedForced = normalizeFilters(this.config?.forcedFilters);
    const forcedKeys = new Set(Object.keys(normalizedForced));
    // Seed from defaultFilters, but skip any key that is also in forcedFilters
    const defaultApplied: Record<string, any> = {};
    const normalizedDefaults = normalizeFilters(this.config?.defaultFilters);
    for (const [k, v] of Object.entries(normalizedDefaults)) {
      if (!forcedKeys.has(k)) defaultApplied[k] = v;
    }
    const defaultAppliedKeys = Object.keys(defaultApplied) as AnyFilterKey[];
    const tabs = this.config?.tabs ?? ['assets', 'folders'];
    const savedTab = (this.config?.rememberLastTab) ? loadLastTab() : null;
    const resolvedTab =
      (savedTab && tabs.includes(savedTab) ? savedTab : null) ??
      (this.config?.defaultTab && tabs.includes(this.config.defaultTab) ? this.config.defaultTab : null) ??
      tabs[0] ?? 'assets';

    this.store.setState({
      isOpen: true,
      activeTab: resolvedTab,
      searchQuery: '',
      filters: {
        metadata: {
          pinned: state.filters.metadata.pinned,
          visible: [...state.filters.metadata.pinned],
          applied: {},
        },
        pinned: state.filters.pinned,
        visible: [...new Set([...state.filters.pinned, ...defaultAppliedKeys])],
        applied: defaultApplied,
      },
      offset: 0,
      assets: [],
      folders: [],
      currentFolder: null,
      currentFolderPath: (resolvedTab === 'folders' && this.config?.rememberLastFolder && loadLastFolder()) || this.config?.rootFolderPath || '/',
      breadcrumb: this._buildBreadcrumbFromPath(
        (resolvedTab === 'folders' && this.config?.rememberLastFolder && loadLastFolder()) || this.config?.rootFolderPath || '/',
        this.config?.rootFolderPath || '/',
      ),
      selectedAssets: new Map(),
      selectedFolders: new Map(),
      isResolvingFolders: false,
      folderPreviews: {},
      isPreviewOpen: false,
      previewAsset: null,
      isLoading: true,
      isSelectingAll: false,
    });
    // Reset drag state
    this._dragCounter = 0;
    this._isDragOver = false;
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
    this._dragCounter = 0;
    this._isDragOver = false;
    this._isUploaderOpen = false;
    this._folderResolveOpen = false;
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
        const folder = state.currentFolderPath || '/';

        // Fetch files and stats in parallel
        const filesPromise = getFiles(this.apiClient, {
          folder,
          offset: 0,
          limit: state.limit,
          sort_by: state.sortBy,
          sort_direction: state.sortDirection,
          search: state.searchQuery || undefined,
          q: searchNotation || undefined,
          recursive: 1,
        });
        const statsPromise = getFilesStats(this.apiClient, {
          folder,
          q: searchNotation || undefined,
          search: state.searchQuery || undefined,
          recursive: 1,
        }).catch(() => null);

        const [result, statsResult] = await Promise.all([filesPromise, statsPromise]);

        if (loadId !== this._loadId) return;

        const filesCount = result.files?.length ?? 0;
        const hasMore = filesCount >= state.limit;
        // Always prefer stats endpoint count
        const totalCount = statsResult?.stats?.approx_files_count
          ?? statsResult?.info?.total_files_count
          ?? result.info?.total_files_count
          ?? result.base?.count?.files_recursive
          ?? result.base?.count?.files_direct
          ?? filesCount;

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
        const folder = state.currentFolderPath || '/';

        // Fetch folders, files, and stats in parallel
        const [foldersResult, filesResult, folderStatsResult] = await Promise.all([
          getFolders(this.apiClient, {
            folderPath: state.currentFolderPath,
            q: state.searchQuery || undefined,
            recursive: state.searchQuery ? 1 : 0,
            sort_by: state.sortBy,
            sort_direction: state.sortDirection,
          }),
          getFiles(this.apiClient, {
            folder,
            offset: 0,
            limit: state.limit,
            sort_by: state.sortBy,
            sort_direction: state.sortDirection,
            search: state.searchQuery || undefined,
            q: searchNotation || undefined,
            recursive: 0,
          }),
          getFilesStats(this.apiClient, {
            folder,
            q: searchNotation || undefined,
            search: state.searchQuery || undefined,
            recursive: 0,
          }).catch(() => null),
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

        const folderFilesCount = filesResult.files?.length ?? 0;
        const folderHasMore = folderFilesCount >= state.limit;
        const folderTotalCount = folderStatsResult?.stats?.approx_files_count
          ?? folderStatsResult?.info?.total_files_count
          ?? filesResult.info?.total_files_count
          ?? filesResult.base?.count?.files_direct
          ?? folderFilesCount;

        this.store.setState({
          assets: filesResult.files || [],
          folders,
          folderPreviews: previews,
          totalCount: folderTotalCount,
          totalFolderCount: foldersResult.total ?? folders.length,
          offset: 0,
          hasMore: folderHasMore,
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
        recursive: state.activeTab === 'folders' ? 0 : 1,
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
    const mode = e.detail.mode as ViewMode;
    this.store.setState({ viewMode: mode });
    if (this.config?.rememberLastView) saveLastView(mode);
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
    const newSortBy = e.detail.value as SortBy;
    const state = this.store.getState();
    this.store.setState({
      sortBy: newSortBy,
      offset: 0,
      assets: [],
      folders: [],
    });
    saveSortPreference(newSortBy, state.sortDirection);
    this.selectionCtrl.resetRange();
    this._loadData();
  }

  private _handleSortDirectionChange(e: CustomEvent) {
    const newDirection = e.detail.value as 'asc' | 'desc';
    const state = this.store.getState();
    this.store.setState({
      sortDirection: newDirection,
      offset: 0,
      assets: [],
      folders: [],
    });
    saveSortPreference(state.sortBy, newDirection);
    this.selectionCtrl.resetRange();
    this._loadData();
  }

  private _handleTabChange(e: CustomEvent) {
    const tab = e.detail.tab as TabKey;
    if (this.config?.rememberLastTab) saveLastTab(tab);
    this.store.setState({
      activeTab: tab,
      currentFolder: null,
      currentFolderPath: this.config?.rootFolderPath ?? '/',
      breadcrumb: [],
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

  private _handleFolderSelect(e: CustomEvent) {
    this.selectionCtrl.handleFolderSelect(e.detail.folder, e.detail.index, e.detail.event);
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
    if (!this._isInline) {
      this.close();
    }
  }

  private _handleFolderOpen(e: CustomEvent) {
    const folder: Folder = e.detail.folder;
    const state = this.store.getState();
    const folderPath = folder.path || `${state.currentFolderPath}${folder.name}/`;
    if (this.config?.rememberLastFolder) saveLastFolder(folderPath);
    this.store.setState({
      currentFolder: folder.uuid,
      currentFolderPath: folderPath,
      breadcrumb: [...state.breadcrumb, { uuid: folder.uuid, name: folder.name, path: folderPath }],
      searchQuery: '',
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
    const folderPath = crumbs.length > 0 ? crumbs[crumbs.length - 1].path : (this.config?.rootFolderPath || '/');
    if (this.config?.rememberLastFolder) saveLastFolder(folderPath);
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

  /**
   * Build breadcrumb items from a folder path relative to the root folder path.
   * Used to restore breadcrumbs when opening the picker into a remembered/configured folder.
   */
  private _buildBreadcrumbFromPath(folderPath: string, rootPath: string): BreadcrumbItem[] {
    if (!folderPath || folderPath === rootPath || folderPath === '/') return [];
    // Strip the root prefix so we only get segments below the root
    const relative = folderPath.startsWith(rootPath) ? folderPath.slice(rootPath.length) : folderPath.replace(/^\//, '');
    const segments = relative.split('/').filter(Boolean);
    const crumbs: BreadcrumbItem[] = [];
    let accumulated = rootPath.endsWith('/') ? rootPath : rootPath + '/';
    for (const seg of segments) {
      accumulated += seg + '/';
      crumbs.push({ uuid: accumulated, name: seg, path: accumulated });
    }
    return crumbs;
  }

  private _handlePreviewClose() {
    this.store.setState({ isPreviewOpen: false, previewAsset: null });
  }

  private _handlePreviewNavigate(e: CustomEvent) {
    this.store.setState({ previewAsset: e.detail.asset });
  }

  private _handleSelectionConfirm(e: CustomEvent) {
    const assets: Asset[] = e.detail.assets;
    const folders: Folder[] = e.detail.folders || [];

    if (folders.length > 0 && this.config?.folderSelection !== false) {
      if (this.config?.folderSelectionMode === 'assets') {
        // Mode B: show resolution dialog
        this._folderResolveOpen = true;
        return;
      }
      // Mode A: return folders alongside assets
      this.config?.onSelect?.(assets, folders);
      this.dispatchEvent(new CustomEvent('ap-select', {
        detail: { assets, folders },
        bubbles: true,
        composed: true,
      }));
      if (!this._isInline) this.close();
      return;
    }

    // Default: assets only
    this.config?.onSelect?.(assets);
    this.dispatchEvent(new CustomEvent('ap-select', {
      detail: { assets },
      bubbles: true,
      composed: true,
    }));
    if (!this._isInline) {
      this.close();
    }
  }

  private async _handleFolderResolveConfirm(e: CustomEvent) {
    const mode: 'direct' | 'recursive' = e.detail.mode;
    const selectedFolders = this.selectionCtrl.getSelectedFolders();
    const selectedAssets = this.selectionCtrl.getSelectedAssets();

    this.store.setState({ isResolvingFolders: true });

    try {
      const responses = await Promise.all(
        selectedFolders.map((folder) =>
          getFiles(this.apiClient!, {
            folder: folder.path,
            recursive: mode === 'recursive' ? 1 : 0,
            limit: 10000,
          }),
        ),
      );
      const folderAssets: Asset[] = [];
      for (const response of responses) {
        folderAssets.push(...response.files);
      }

      // Deduplicate: assets already selected individually should not be duplicated
      const allAssets = [...selectedAssets];
      const existingUuids = new Set(allAssets.map((a) => a.uuid));
      for (const fa of folderAssets) {
        if (!existingUuids.has(fa.uuid)) {
          allAssets.push(fa);
          existingUuids.add(fa.uuid);
        }
      }

      // Enforce maxSelections
      const max = this.config?.maxSelections;
      const result = max ? allAssets.slice(0, max) : allAssets;

      this.config?.onSelect?.(result);
      this.dispatchEvent(new CustomEvent('ap-select', {
        detail: { assets: result },
        bubbles: true,
        composed: true,
      }));

      this._folderResolveOpen = false;
      this.store.setState({ isResolvingFolders: false });
      if (!this._isInline) this.close();
    } catch (err) {
      this.store.setState({ isResolvingFolders: false });
      this.dispatchEvent(new CustomEvent('ap-error', {
        detail: { error: err as Error, context: 'folderResolve' },
        bubbles: true,
        composed: true,
      }));
    }
  }

  private _handleFolderResolveCancel() {
    this._folderResolveOpen = false;
  }

  private async _handleSelectAll(e?: CustomEvent) {
    const state = this.store.getState();
    if (state.isSelectingAll || !this.apiClient) return;

    const multiSelect = state.config?.multiSelect ?? true;
    if (!multiSelect) return;

    const scope: 'assets' | 'folders' | 'all' = e?.detail?.scope ?? 'all';
    const includeFolders = scope !== 'assets' && this.config?.folderSelection !== false && state.folders.length > 0;
    const includeAssets = scope !== 'folders';

    // Folders-only scope: no fetching needed, folders are always fully loaded
    if (!includeAssets) {
      if (includeFolders) this.selectionCtrl.selectAllFolders(state.folders);
      return;
    }

    // If all assets already loaded, select them directly
    if (state.assets.length >= state.totalCount) {
      // Select folders first so maxSelections budget accounts for them
      if (includeFolders) this.selectionCtrl.selectAllFolders(state.folders);
      this.selectionCtrl.selectAll(state.assets);
      return;
    }

    // Need to fetch remaining pages
    this.store.setState({ isSelectingAll: true });

    try {
      const searchNotation = this._buildSearchNotation();
      const folder = state.currentFolderPath || '/';
      const limit = state.limit;
      const alreadyLoaded = state.assets;
      const totalCount = state.totalCount;
      const recursive = state.activeTab === 'folders' ? 0 : 1;

      // Calculate remaining pages to fetch
      const remainingPages: number[] = [];
      for (let offset = alreadyLoaded.length; offset < totalCount; offset += limit) {
        remainingPages.push(offset);
      }

      // Fetch in parallel batches of 4
      const batchSize = 4;
      const allNewAssets: Asset[] = [];
      for (let i = 0; i < remainingPages.length; i += batchSize) {
        const batch = remainingPages.slice(i, i + batchSize);
        const results = await Promise.all(
          batch.map((offset) =>
            getFiles(this.apiClient!, {
              folder,
              offset,
              limit,
              sort_by: state.sortBy,
              sort_direction: state.sortDirection,
              search: state.searchQuery || undefined,
              q: searchNotation || undefined,
              recursive,
            }),
          ),
        );
        for (const result of results) {
          if (result.files) allNewAssets.push(...result.files);
        }
      }

      // Deduplicate by uuid in case pagination shifted during fetch
      const seen = new Set(alreadyLoaded.map((a) => a.uuid));
      const dedupedNew = allNewAssets.filter((a) => {
        if (seen.has(a.uuid)) return false;
        seen.add(a.uuid);
        return true;
      });
      const allAssets = [...alreadyLoaded, ...dedupedNew];

      // Update store with all assets and select them
      this.store.setState({
        assets: allAssets,
        offset: Math.max(0, allAssets.length - limit),
        hasMore: false,
        isSelectingAll: false,
      });
      // Select folders first so maxSelections budget accounts for them
      if (includeFolders) this.selectionCtrl.selectAllFolders(state.folders);
      this.selectionCtrl.selectAll(allAssets);
    } catch (err) {
      this.store.setState({ isSelectingAll: false });
      this.dispatchEvent(new CustomEvent('ap-error', {
        detail: { error: err as Error, context: 'selectAll' },
        bubbles: true,
        composed: true,
      }));
    }
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
    let isEmpty = values === '' || values === null || values === undefined
      || (Array.isArray(values) && values.length === 0)
      || (typeof values === 'object' && !Array.isArray(values) && Object.values(values as Record<string, unknown>).every(
        (v) => v === null || v === undefined || v === '' || (Array.isArray(v) && v.length === 0),
      ));

    // Date filters always include `field` (e.g. 'created') as a default — check meaningful fields instead
    if (!isEmpty && this._isDateFilterKey(key) && typeof values === 'object' && !Array.isArray(values)) {
      const { kind, preset, from, to } = values as Record<string, unknown>;
      isEmpty = !kind && !preset && !from && !to;
    }

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

    this.store.setState({ filters, offset: 0, assets: [], folders: [], isLoading: true });
    this.selectionCtrl.resetRange();
    this._debouncedLoadData();
    // Clear pending state when filter value is set
    if (this._pendingFilter === key) {
      this._pendingFilter = null;
      const bar = this.renderRoot.querySelector('ap-filters-bar') as
        import('./components/filters/ap-filters-bar').ApFiltersBar | null;
      if (bar) bar.pendingFilter = null;
    }
  }

  private _handleFilterOpen(e: CustomEvent) {
    const key = e.detail.key as FilterKey;
    const chipRect = e.detail.chipRect as { left: number; right: number; bottom: number; width: number } | undefined;
    const toolbar = this.renderRoot.querySelector('ap-content-toolbar') as
      import('./components/toolbar/ap-content-toolbar').ApContentToolbar | null;
    let chipLeft: number | undefined;
    let chipTop: number | undefined;
    if (chipRect) {
      const wrapper = this.renderRoot.querySelector('.toolbar-filters-wrapper');
      if (wrapper) {
        const wrapperRect = wrapper.getBoundingClientRect();
        chipLeft = chipRect.left - wrapperRect.left;
        chipTop = chipRect.bottom - wrapperRect.top;
      }
    }
    toolbar?.openFilterPanel(key, true, chipLeft, chipTop);
  }

  private _handleMetadataFilterOpen(e: CustomEvent) {
    const { fieldKey, chipRect } = e.detail;
    const toolbar = this.renderRoot.querySelector('ap-content-toolbar') as
      import('./components/toolbar/ap-content-toolbar').ApContentToolbar | null;
    let chipLeft: number | undefined;
    let chipTop: number | undefined;
    if (chipRect) {
      const wrapper = this.renderRoot.querySelector('.toolbar-filters-wrapper');
      if (wrapper) {
        const wrapperRect = wrapper.getBoundingClientRect();
        chipLeft = chipRect.left - wrapperRect.left;
        chipTop = chipRect.bottom - wrapperRect.top;
      }
    }
    toolbar?.openMetadataFieldPanel(fieldKey, true, chipLeft, chipTop);
  }

  private _handleFilterPanelChange(e: CustomEvent) {
    const bar = this.renderRoot.querySelector('ap-filters-bar') as
      import('./components/filters/ap-filters-bar').ApFiltersBar | null;
    if (bar) {
      bar.activeFilter = e.detail.key;
      bar.activeMetadataField = e.detail.metadataFieldKey || null;
    }
    // Clear pending filter when panel closes without a value being set
    const panelClosed = !e.detail.key && !e.detail.metadataFieldKey;
    if (panelClosed) {
      if (this._pendingFilter || this._pendingMetadataField) {
        this._pendingFilter = null;
        this._pendingMetadataField = null;
        if (bar) {
          bar.pendingFilter = null;
          bar.pendingMetadataField = null;
        }
      }
    }
  }

  private async _handleFilterPending(e: CustomEvent) {
    const { key, metadataFieldKey } = e.detail;
    const bar = this.renderRoot.querySelector('ap-filters-bar') as
      import('./components/filters/ap-filters-bar').ApFiltersBar | null;
    const toolbar = this.renderRoot.querySelector('ap-content-toolbar') as
      import('./components/toolbar/ap-content-toolbar').ApContentToolbar | null;
    if (!bar || !toolbar) return;

    if (metadataFieldKey) {
      this._pendingMetadataField = metadataFieldKey;
      bar.pendingMetadataField = metadataFieldKey;
    } else if (key) {
      this._pendingFilter = key;
      bar.pendingFilter = key;
    }

    // Wait for bar to render the pending chip (or existing pinned chip)
    await bar.updateComplete;

    // Find the pending chip, or fall back to existing pinned-empty chip for this filter
    let chip = bar.renderRoot.querySelector('.chip.pending') as HTMLElement | null;
    if (!chip) {
      // Filter might already have a pinned chip — find it by matching label text
      const chips = bar.renderRoot.querySelectorAll('.chip.pinned-empty');
      const targetLabel = metadataFieldKey
        ? (bar as any)._getMetadataLabel?.(metadataFieldKey)
        : undefined;
      for (const c of chips) {
        const label = c.querySelector('.chip-label')?.textContent?.trim();
        if (metadataFieldKey && label === targetLabel) { chip = c as HTMLElement; break; }
        if (key && label === (FILTER_LABELS[key as AnyFilterKey] || key)) { chip = c as HTMLElement; break; }
      }
    }
    if (!chip) return;

    const rect = chip.getBoundingClientRect();
    const wrapper = this.renderRoot.querySelector('.toolbar-filters-wrapper');
    const wrapperRect = wrapper?.getBoundingClientRect();
    const chipLeft = wrapperRect ? rect.left - wrapperRect.left : rect.left;
    const chipTop = wrapperRect ? rect.bottom - wrapperRect.top : undefined;

    if (metadataFieldKey) {
      toolbar.openMetadataFieldPanel(metadataFieldKey, true, chipLeft, chipTop);
    } else if (key) {
      toolbar.openFilterPanel(key, true, chipLeft, chipTop);
    }
  }

  private _handleFilterRemove(e: CustomEvent) {
    const key = e.detail.key as AnyFilterKey;
    if (key in (this.config?.forcedFilters ?? {})) return;
    const state = this.store.getState();
    const filters = { ...state.filters };
    const applied = { ...filters.applied };
    delete applied[key];
    filters.applied = applied;
    if (!filters.pinned.includes(key)) {
      filters.visible = filters.visible.filter((k: AnyFilterKey) => k !== key);
    }
    this.store.setState({ filters, offset: 0, assets: [], folders: [], isLoading: true });
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
    this.store.setState({ filters, offset: 0, assets: [], folders: [], isLoading: true });
    this.selectionCtrl.resetRange();
    this._debouncedLoadData();
    // Clear pending metadata state when value is set
    if (this._pendingMetadataField === fieldKey) {
      this._pendingMetadataField = null;
      const bar = this.renderRoot.querySelector('ap-filters-bar') as
        import('./components/filters/ap-filters-bar').ApFiltersBar | null;
      if (bar) bar.pendingMetadataField = null;
    }
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
    this.store.setState({ filters, offset: 0, assets: [], folders: [], isLoading: true });
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
      isLoading: true,
    });
    const bar = this.renderRoot.querySelector('ap-filters-bar') as
      import('./components/filters/ap-filters-bar').ApFiltersBar | null;
    if (bar) bar.activeFilter = null;
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

    // Replace applied filters, stripping any forced keys
    const forcedKeys = new Set(Object.keys(this.config?.forcedFilters ?? {}));
    const sanitized = { ...applied };
    for (const k of forcedKeys) delete sanitized[k as AnyFilterKey];
    filters.applied = sanitized;
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

    this.store.setState({ filters, offset: 0, assets: [], folders: [], isLoading: true });
    this.selectionCtrl.resetRange();
    this._debouncedLoadData();
  }

  // ── Sort Options ────────────────────────────────────────────────────

  private _getSortOptions(): SortOption[] {
    const s = this.storeCtrl.state;
    if (s.searchQuery) {
      return SEARCH_SORT_OPTIONS;
    }
    if (s.activeTab === 'folders') {
      return FOLDERS_SORT_OPTIONS;
    }
    return MAIN_SORT_OPTIONS;
  }

  // ── Search Notation Builder ──────────────────────────────────────────

  private _buildSearchNotation(): string {
    const state = this.store.getState();
    const merged = { ...normalizeFilters(this.config?.forcedFilters), ...state.filters.applied };
    const parts = serializeFilters(merged, state.filters.metadata.applied);
    return parts.join(' ');
  }

  render() {
    const s = this.storeCtrl.state;
    const selectedIds = Array.from(s.selectedAssets.keys());
    const selectedFolderIds = Array.from(s.selectedFolders.keys());
    const selectedAssets = this.selectionCtrl.getSelectedAssets();
    const selectedFolders = this.selectionCtrl.getSelectedFolders();
    const folderSelectable = this.config?.folderSelection !== false;

    const headerTemplate = html`
      <ap-header
        .activeTab=${s.activeTab}
        .tabs=${this.config?.tabs ?? ['assets', 'folders']}
        .viewMode=${s.viewMode}
        .searchQuery=${s.searchQuery}
        .regionalGroups=${s.regionalVariantGroups}
        .regionalFilters=${s.regionalFilters}
        .hideClose=${this._isInline}
        @tab-change=${this._handleTabChange}
        @search-change=${this._handleSearchChange}
        @view-change=${this._handleViewChange}
        @regional-change=${this._handleRegionalChange}
        @ap-close=${() => this._handleCancel('close-button')}
      ></ap-header>
    `;

    const hasUploader = !!this.config?.uploader;

    const contentTemplate = html`
      <div class="content-area"
        @dragenter=${this._onDragEnter}
        @dragover=${this._onDragOver}
        @dragleave=${this._onDragLeave}
        @drop=${this._onDrop}
      >
        ${this._isDragOver ? html`
          <div class="drop-zone-overlay">
            <div class="drop-zone-label">
              <ap-icon name="upload" .size=${32}></ap-icon>
              Drop files to upload
            </div>
          </div>
        ` : nothing}
        <div class="main-content">
          <div class="toolbar-filters-wrapper${this.config?.stickyFilters ? ' sticky' : ''}">
            <ap-content-toolbar
              .isLoading=${s.isLoading}
              .totalCount=${s.totalCount}
              .totalFolderCount=${s.totalFolderCount}
              .showUpload=${hasUploader}
              .sortBy=${s.sortBy}
              .sortDirection=${s.sortDirection}
              .sortOptions=${this._getSortOptions()}
              .filters=${s.filters}
              .labels=${s.labels}
              .tags=${s.tags}
              .metadataFields=${s.metadataFields}
              .pinnedFilters=${s.filters.pinned}
              .apiClient=${this.apiClient}
              .forcedFilterKeys=${Object.keys(normalizeFilters(this.config?.forcedFilters))}
              @sort-change=${this._handleSortChange}
              @sort-direction-change=${this._handleSortDirectionChange}
              @filter-update=${this._handleFilterUpdate}
              @filter-pin=${this._handleFilterPin}
              @metadata-filter-change=${this._handleMetadataFilterChange}
              @metadata-field-toggle=${this._handleMetadataFieldToggle}
              @metadata-pin=${this._handleMetadataPin}
              @filter-panel-change=${this._handleFilterPanelChange}
              @filter-pending=${this._handleFilterPending}
              @upload-click=${this._handleUploadClick}
            ></ap-content-toolbar>

            <ap-filters-bar
              .appliedFilters=${s.filters.applied}
              .appliedMetadata=${s.filters.metadata.applied}
              .metadataFields=${s.metadataFields}
              .tags=${s.tags}
              .labels=${s.labels}
              .pinnedFilters=${s.filters.pinned}
              .pinnedMetadataFields=${s.filters.metadata.pinned}
              .forcedFilters=${this.config?.forcedFilters ?? {}}
              @filter-remove=${this._handleFilterRemove}
              @filter-deactivate=${this._handleFilterDeactivate}
              @filter-open=${this._handleFilterOpen}
              @metadata-filter-open=${this._handleMetadataFilterOpen}
              @metadata-filter-remove=${this._handleMetadataFilterRemove}
              @metadata-field-deactivate=${this._handleMetadataFieldDeactivate}
              @metadata-pin=${this._handleMetadataPin}
              @filters-clear-all=${this._handleFiltersClearAll}
              @filters-set=${this._handleFiltersSet}
            ></ap-filters-bar>

            ${s.breadcrumb.length > 0
              ? html`<ap-breadcrumb
                  .items=${s.breadcrumb}
                  @breadcrumb-navigate=${this._handleBreadcrumbNavigate}
                ></ap-breadcrumb>`
              : nothing}
          </div>

          ${s.isLoading && s.assets.length === 0 && s.folders.length === 0
            ? html`<ap-skeleton .variant=${s.viewMode} .gridSize=${this.config?.gridSize ?? 'normal'} .multiSelect=${this.config?.multiSelect !== false} .folderCount=${2}></ap-skeleton>`
            : this._renderContent(s, selectedIds, selectedFolderIds, folderSelectable)}

          <ap-marquee-overlay .active=${this.marqueeCtrl.isActive} .rect=${this.marqueeCtrl.rect}></ap-marquee-overlay>
          ${this._folderResolveOpen ? html`
            <ap-folder-resolve-dialog
              .folders=${selectedFolders}
              .loading=${s.isResolvingFolders}
              @folder-resolve-confirm=${this._handleFolderResolveConfirm}
              @folder-resolve-cancel=${this._handleFolderResolveCancel}
            ></ap-folder-resolve-dialog>
          ` : nothing}
        </div>

        ${s.isPreviewOpen && s.previewAsset
          ? html`<ap-preview-panel
              .asset=${s.previewAsset}
              .assets=${s.assets}
              .selectedIds=${selectedIds}
              .containerToken=${s.projectToken}
              .showMetadata=${this.config?.showMetadata !== false}
              .metadataFields=${s.metadataFields}
              .labels=${s.labels}
              .regionalFilters=${s.regionalFilters}
              .multiSelect=${this.config?.multiSelect ?? true}
              @preview-close=${this._handlePreviewClose}
              @preview-navigate=${this._handlePreviewNavigate}
              @asset-select=${this._handleAssetSelect}
              @asset-quick-select=${this._handleQuickSelect}
              @filter-update=${this._handleFilterUpdate}
            ></ap-preview-panel>`
          : nothing}
      </div>
    `;

    const footerTemplate = html`
      <ap-selection-bar
        .selectedAssets=${selectedAssets}
        .selectedFolders=${selectedFolders}
        .totalCount=${s.totalCount}
        .totalFolderCount=${s.totalFolderCount}
        .isSelectingAll=${s.isSelectingAll}
        .multiSelect=${this.config?.multiSelect ?? true}
        .maxSelections=${this.config?.maxSelections}
        @selection-confirm=${this._handleSelectionConfirm}
        @selection-clear=${this._handleSelectionClear}
        @selection-deselect=${this._handleSelectionDeselect}
        @select-all=${this._handleSelectAll}
      ></ap-selection-bar>
    `;

    const uploaderTemplate = this._isUploaderOpen ? html`
      <div class="uploader-overlay">
        ${this._isInline ? nothing : html`
          <button class="uploader-close-btn" @click=${() => this._handleCancel('close-button')} title="Close">
            <ap-icon name="close" .size=${18}></ap-icon>
          </button>
        `}
        <div class="uploader-body">${this._uploaderEl}</div>
      </div>
    ` : nothing;

    if (this._isInline) {
      if (!s.isOpen) return nothing;
      return html`
        <div class="ap-inline">
          ${this._isUploaderOpen ? uploaderTemplate : html`
            <div class="inline-header">${headerTemplate}</div>
            <div class="inline-content">${contentTemplate}</div>
            <div class="inline-footer">${footerTemplate}</div>
          `}
        </div>
      `;
    }

    return html`
      <ap-modal
        ?open=${s.isOpen}
        @ap-cancel=${(e: CustomEvent) => this._handleCancel(e.detail.reason)}
      >
        ${this._isUploaderOpen ? uploaderTemplate : html`
          <div slot="header">${headerTemplate}</div>
          ${contentTemplate}
          <div slot="footer">${footerTemplate}</div>
        `}
      </ap-modal>
    `;
  }

  private _renderContent(s: AppState, selectedIds: string[], selectedFolderIds: string[] = [], folderSelectable = false) {
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
            .selectedFolderIds=${selectedFolderIds}
            .isLoading=${s.isLoading}
            .multiSelect=${this.config?.multiSelect ?? true}
            .folderSelectable=${folderSelectable}
            .gridSize=${this.config?.gridSize ?? 'normal'}
            @asset-select=${this._handleAssetSelect}
            @asset-preview=${this._handleAssetPreview}
            @asset-quick-select=${this._handleQuickSelect}
            @folder-select=${this._handleFolderSelect}
          ></ap-grid-view>
          <div id="sentinel"></div>
        `;
      }

      return html`
        <ap-list-view
          .assets=${s.assets}
          .folders=${[]}
          .selectedIds=${selectedIds}
          .selectedFolderIds=${selectedFolderIds}
          .isLoading=${s.isLoading}
          .multiSelect=${this.config?.multiSelect ?? true}
          .folderSelectable=${folderSelectable}
          .totalCount=${s.totalCount}
          .isSelectingAll=${s.isSelectingAll}
          @asset-select=${this._handleAssetSelect}
          @asset-preview=${this._handleAssetPreview}
          @asset-quick-select=${this._handleQuickSelect}
          @folder-select=${this._handleFolderSelect}
          @select-all=${this._handleSelectAll}
          @selection-clear=${this._handleSelectionClear}
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
            .selectedFolderIds=${selectedFolderIds}
            .isLoading=${s.isLoading}
            .multiSelect=${this.config?.multiSelect ?? true}
            .folderSelectable=${folderSelectable}
            .gridSize=${this.config?.gridSize ?? 'normal'}
            @asset-select=${this._handleAssetSelect}
            @asset-preview=${this._handleAssetPreview}
            @asset-quick-select=${this._handleQuickSelect}
            @folder-open=${this._handleFolderOpen}
            @folder-select=${this._handleFolderSelect}
          ></ap-grid-view>
          <div id="sentinel"></div>
        `;
      }

      return html`
        <ap-list-view
          .assets=${s.assets}
          .folders=${s.folders}
          .folderPreviews=${s.folderPreviews}
          .selectedIds=${selectedIds}
          .selectedFolderIds=${selectedFolderIds}
          .isLoading=${s.isLoading}
          .multiSelect=${this.config?.multiSelect ?? true}
          .folderSelectable=${folderSelectable}
          .totalCount=${s.totalCount}
          .isSelectingAll=${s.isSelectingAll}
          @asset-select=${this._handleAssetSelect}
          @asset-preview=${this._handleAssetPreview}
          @asset-quick-select=${this._handleQuickSelect}
          @folder-open=${this._handleFolderOpen}
          @folder-select=${this._handleFolderSelect}
          @select-all=${this._handleSelectAll}
          @selection-clear=${this._handleSelectionClear}
        ></ap-list-view>
        <div id="sentinel"></div>
      `;
    }

    return nothing;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sfx-asset-picker': AssetPicker;
  }
}
