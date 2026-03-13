import { FilterKey } from './filter.types';
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
    hiddenTabs?: TabKey[];
    enabledFilters?: FilterKey[];
    allowedFileTypes?: string[];
    rootFolderUuid?: string;
    /** Show metadata sections in the preview panel. Defaults to true. */
    showMetadata?: boolean;
    onSelect?: (assets: import('./asset.types').Asset[]) => void;
    onCancel?: () => void;
}
//# sourceMappingURL=config.types.d.ts.map