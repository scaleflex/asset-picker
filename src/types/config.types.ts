import type { FilterKey, FiltersInput } from './filter.types';

export type AuthMode = 'session' | 'securityTemplate';

export interface SessionAuth {
  mode: 'session';
  sessionToken: string;
  companyToken: string;
  projectToken: string;
}

export interface SecurityTemplateAuth {
  mode: 'securityTemplate';
  securityTemplateKey: string;
  projectToken: string;
}

export type AuthConfig = SessionAuth | SecurityTemplateAuth;

export type DisplayMode = 'modal' | 'inline';
export type ViewMode = 'grid' | 'list';

export type SortBy = 'name' | 'created_at' | 'modified_at' | 'size' | 'type' | 'relevance' | 'title' | 'color' | 'uploaded' | 'updated_at' | 'files_count_recursive' | 'files_size_recursive';
export type SortDirection = 'asc' | 'desc';

export type TabKey = 'assets' | 'folders';

export interface AssetPickerConfig {
  auth: AuthConfig;
  apiBase?: string;
  locale?: string;
  multiSelect?: boolean;
  maxSelections?: number;
  defaultViewMode?: ViewMode;
  defaultSortBy?: SortBy;
  defaultSortDirection?: SortDirection;
  /** Tabs to show. Defaults to ['assets', 'folders']. If only one tab, the dropdown is hidden. */
  tabs?: TabKey[];
  enabledFilters?: FilterKey[];
  /** Start browsing from a specific folder path (e.g. '/marketing/banners/'). */
  rootFolderPath?: string;
  /** Show metadata sections in the preview panel. Defaults to true. */
  showMetadata?: boolean;
  /** Display mode: 'modal' (default) renders as a dialog overlay, 'inline' renders in page flow. */
  displayMode?: DisplayMode;
  /** Brand color (hex, e.g. "#3b82f6") used for all accent elements. Overrides the API-provided brand color. */
  brandColor?: string;
  /** Filters pre-applied when the picker opens. User can modify/remove them. */
  defaultFilters?: FiltersInput;
  /** Filters always active. Shown as locked chips the user cannot remove. */
  forcedFilters?: FiltersInput;
  /** Remember the last browsed folder and restore it on next open. Defaults to false. */
  rememberLastFolder?: boolean;
  /** Remember the last used view mode (grid/list) and restore it on next open. Defaults to false. */
  rememberLastView?: boolean;
  onSelect?: (assets: import('./asset.types').Asset[]) => void;
  onCancel?: () => void;
}
