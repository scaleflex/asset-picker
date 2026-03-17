import { Store } from './store';
import type { AppState } from './store.types';

export function createStore(): Store<AppState> {
  return new Store<AppState>({
    config: null,
    projectToken: '',
    sassKey: '',
    brandColor: '',

    isOpen: false,
    activeTab: 'assets',
    viewMode: 'grid',
    searchQuery: '',
    sortBy: 'modified_at',
    sortDirection: 'desc',

    previewAsset: null,
    isPreviewOpen: false,

    assets: [],
    folders: [],
    folderPreviews: {},
    labels: [],
    tags: [],
    currentFolder: null,
    currentFolderPath: '/',
    breadcrumb: [],

    offset: 0,
    limit: 100,
    totalCount: 0,
    totalFolderCount: 0,
    isLoading: false,
    isSelectingAll: false,
    hasMore: false,

    filters: {
      metadata: { pinned: [], visible: [], applied: {} },
      pinned: [],
      visible: [],
      applied: {},
    },
    metadataFields: [],
    regionalVariantGroups: [],
    regionalFilters: {},

    selectedAssets: new Map(),
  });
}

export { Store } from './store';
export type { AppState } from './store.types';
