import type { Asset } from '../types/asset.types';
import type { Folder } from '../types/folder.types';
import type { Label } from '../types/label.types';
import type { Collection, CollectionFolder } from '../types/collection.types';
import type { TagWithLabel } from '../types/tag.types';
import type { AssetPickerConfig, ViewMode, SortBy, SortDirection, TabKey } from '../types/config.types';
import type { FiltersState, MetadataModelField, FilterFileType, RegionalVariantGroup, RegionalFilters } from '../types/filter.types';

export interface BreadcrumbItem {
  uuid: string;
  name: string;
  path: string;
}

export interface AppState {
  config: AssetPickerConfig | null;
  projectToken: string;
  sassKey: string;
  brandColor: string;

  isOpen: boolean;
  activeTab: TabKey;
  viewMode: ViewMode;
  searchQuery: string;
  isAISearchActive: boolean;
  sortBy: SortBy;
  sortDirection: SortDirection;

  previewAsset: Asset | null;
  isPreviewOpen: boolean;

  assets: Asset[];
  folders: Folder[];
  folderPreviews: Record<string, { file_uri_cdn: string; file_type: string }[]>;
  labels: Label[];
  tags: TagWithLabel[];
  currentFolder: string | null;
  currentFolderPath: string;
  breadcrumb: BreadcrumbItem[];
  activeLabelUuid: string | null;

  collections: Collection[];
  activeCollectionUuid: string | null;
  activeCollectionFolders: CollectionFolder[];
  activeCollectionFolder: CollectionFolder | null;
  isLoadingCollectionFolders: boolean;

  offset: number;
  limit: number;
  totalCount: number;
  totalFolderCount: number;
  isLoading: boolean;
  isSelectingAll: boolean;
  hasMore: boolean;

  filters: FiltersState;
  fileTypes: FilterFileType[];
  metadataFields: MetadataModelField[];
  regionalVariantGroups: RegionalVariantGroup[];
  regionalFilters: RegionalFilters;

  selectedAssets: Map<string, Asset>;
  selectedFolders: Map<string, Folder>;
  isResolvingFolders: boolean;
}
