import { FilterKey, FiltersInput } from './filter.types';
export type AuthMode = 'securityTemplate' | 'sassKey';
export interface SecurityTemplateAuth {
    mode: 'securityTemplate';
    securityTemplateKey: string;
    projectToken: string;
}
export interface SassKeyAuth {
    mode: 'sassKey';
    sassKey: string;
    projectToken: string;
}
export type AuthConfig = SecurityTemplateAuth | SassKeyAuth;
export type DisplayMode = 'modal' | 'inline';
export type ViewMode = 'grid' | 'list';
export type GridSize = 'normal' | 'large';
export type SortBy = 'name' | 'created_at' | 'modified_at' | 'size' | 'type' | 'relevance' | 'title' | 'color' | 'uploaded' | 'updated_at' | 'files_count_recursive' | 'files_size_recursive';
export type SortDirection = 'asc' | 'desc';
export type TabKey = 'assets' | 'folders' | 'labels' | 'collections';
export interface AssetPickerConfig {
    auth: AuthConfig;
    apiBase?: string;
    locale?: string;
    multiSelect?: boolean;
    maxSelections?: number;
    defaultViewMode?: ViewMode;
    defaultSortBy?: SortBy;
    defaultSortDirection?: SortDirection;
    /** Tabs to show ('assets', 'folders', 'labels', 'collections'). Defaults to ['assets', 'folders']. If only one tab, the dropdown is hidden. */
    tabs?: TabKey[];
    /** Which tab to activate when the picker opens. Defaults to the first entry in `tabs`. */
    defaultTab?: TabKey;
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
    /** Remember the last active tab and restore it on next open. Defaults to false. */
    rememberLastTab?: boolean;
    /** Grid card density: 'normal' (4 columns at ~1200px) or 'large' (3 columns at ~1200px). Defaults to 'normal'. */
    gridSize?: GridSize;
    /** Make the toolbar and filters bar sticky so they remain visible while scrolling content. Defaults to false. */
    stickyFilters?: boolean;
    /** Allow selecting folders via checkboxes. Default: true. */
    folderSelection?: boolean;
    /**
     * What to return when folders are selected and user clicks Confirm:
     * - 'folder': Return Folder objects alongside Asset objects in ap-select event.
     * - 'assets': Show a dialog asking direct vs recursive, fetch folder contents, return only Assets.
     * Default: 'folder'.
     */
    folderSelectionMode?: 'folder' | 'assets';
    onSelect?: (assets: import('./asset.types').Asset[], folders?: import('./folder.types').Folder[]) => void;
    onCancel?: () => void;
    /**
     * Enable the integrated uploader. When provided, an "Upload" button appears in the toolbar
     * and the content area becomes a drop zone. Requires `@scaleflex/uploader` to be installed
     * (optional peer dependency — not loaded unless this config is set).
     *
     * Auth and target folder are derived automatically from the asset picker's state.
     */
    /** Enable transformation options (format, quality, resize) before selection is finalized. Defaults to false. */
    transformations?: boolean;
    /** Enable AI-powered semantic search toggle in the search bar. Defaults to false. */
    enableAISearch?: boolean;
    /** Activate AI search mode by default when the picker opens. Requires `enableAISearch: true`. Defaults to false. */
    defaultAISearch?: boolean;
    uploader?: UploaderIntegrationConfig;
}
/**
 * Configuration for the integrated uploader.
 * Auth and targetFolder are derived automatically — do not set them here.
 */
export interface UploaderIntegrationConfig {
    /** File restrictions (max size, allowed types, etc.). */
    restrictions?: {
        maxFileSize?: number | null;
        maxTotalFilesSize?: number | null;
        maxNumberOfFiles?: number | null;
        minNumberOfFiles?: number | null;
        allowedFileTypes?: string[] | null;
        blockedFileTypes?: string[] | null;
    };
    /** Max concurrent uploads. Defaults to 3. */
    concurrency?: number;
    /** Automatically start uploading when files are added. Defaults to false. */
    autoProceed?: boolean;
    /** Show "Fill Metadata" button in the uploader. */
    showFillMetadata?: boolean;
    /** Third-party connector config (Google Drive, Dropbox, etc.). */
    connectors?: {
        companionUrl: string;
        providers: ('google-drive' | 'dropbox' | 'onedrive' | 'box' | 'instagram' | 'facebook' | 'unsplash')[];
        customSources?: Array<{
            id: string;
            name: string;
            icon?: string;
            [key: string]: unknown;
        }>;
    };
    /** Layout for import-from sources: horizontal pills (default) or cards grid. */
    sourcesLayout?: 'pills' | 'cards';
    /**
     * Controls the standard header bar.
     * - `'close'` — header with X close button
     * - `'back'`  — header with back arrow (default when embedded in Asset Picker)
     * - `true`    — header visible, no button
     * - `false`   — no header at all
     */
    header?: boolean | 'close' | 'back';
    /** Whether closing clears all files. Default: true. */
    clearOnClose?: boolean;
    /** Whether the "Done" action clears all files. Default: true. */
    clearOnComplete?: boolean;
    /** Auto-close after all uploads complete. true = 1500ms delay, or pass ms. Default: false. */
    closeOnComplete?: boolean | number;
    /** Auto-remove rejected files after this delay (ms). Default: 4000. Set 0 or false to disable. */
    rejectedFileAutoRemoveDelay?: number | false;
    /**
     * Enable last-upload review screen. Shows previously uploaded files when re-opening.
     * - `false` (default) — disabled
     * - `true` — enabled, auto-scoped by container + airboxPuid
     * - `string` — explicit storage key suffix for same-airbox disambiguation
     */
    lastUploadReview?: boolean | string;
    /** Show "Locate" button on completed files. Default: false. */
    showLocateButton?: boolean;
    /** Show "Copy CDN URL" button on completed files. Default: false. */
    showCopyCdnButton?: boolean;
    /** Custom URL resolver for the "Locate" button. Return null to hide for a specific file. */
    getLocateUrl?: (file: any) => string | null | undefined;
    /** Show "Minimize & continue" button during uploads. Default: false. */
    minimizeOnUpload?: boolean;
    /** Metadata schema configuration for the "Fill Metadata" modal. */
    metadataConfig?: {
        /** Project UUID for fetching metadata schema from Hub API. */
        projectUuid: string;
        /** Pre-fetched raw metadata schema (skips Hub API call). */
        rawMetadata?: unknown;
        /** Hub API base URL. Default: 'https://hub.scaleflex.com/api'. */
        hubApiBase?: string;
        /** Headers for Hub API requests (x-session-token, x-company-token, x-project-token). */
        hubHeaders?: Record<string, string>;
        /** Which metadata fields to show: 'all' or an array of field keys. */
        fields?: 'all' | string[];
        /** Field keys that must be filled before upload. */
        requiredFields?: string[];
        /** Enforce required fields before upload. 'auto' enforces only when metadata is shown. */
        enforceRequiredBeforeUpload?: boolean | 'auto';
        /** Show the tags field. */
        showTags?: boolean;
        /** Language for field labels. */
        language?: string;
        /** Default values for metadata fields. */
        defaults?: Record<string, unknown>;
    };
    /**
     * Resumable upload via tus protocol.
     * - `true` — enable with defaults (10 MB threshold, 5 MB chunks)
     * - object — fine-grained tus settings
     */
    tusConfig?: boolean | {
        /** File size (bytes) above which tus is used. Default: 10 MB. 0 = always use tus. */
        sizeThreshold?: number;
        /** Chunk size in bytes. Default: 5 MB. */
        chunkSize?: number;
        /** Custom tus endpoint URL. */
        endpoint?: string;
        /** Persist fingerprints for cross-session resume. Default: true. */
        resumable?: boolean;
        /** Number of parallel chunk uploads. Default: 1. */
        parallelChunks?: number;
        /** Retry delays in ms. Default: [0, 1000, 3000, 5000]. */
        retryDelays?: number[];
    };
}
//# sourceMappingURL=config.types.d.ts.map