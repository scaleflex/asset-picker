import { FilterKey, FiltersInput } from './filter.types';
import { UploadFile } from '@scaleflex/uploader';
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
/**
 * Context describing what kind of thumbnail a URL is being produced for,
 * passed to `transformRemoteThumbnail`.
 */
export interface RemoteThumbnailContext {
    /**
     * What the thumbnail represents.
     *
     * Emitted by the picker:
     * - `'asset'`  — image thumbnail/preview in a grid card, list row or the preview panel
     *                (including the fullscreen image).
     * - `'video'`  — video poster thumbnail.
     * - `'pdf'`    — PDF first-page preview.
     * - `'folder'` — folder preview collage image.
     *
     * Emitted by the integrated uploader (when the same function is forwarded to it):
     * - `'url-import'` — URL pasted into the uploader's "Import from URL" dialog.
     * - `'connector'`  — listing/selection result from a Companion provider.
     */
    source: 'asset' | 'video' | 'pdf' | 'folder' | 'url-import' | 'connector';
    /** The asset being rendered, when available (omitted for folder previews and uploader contexts). */
    asset?: import('./asset.types').Asset;
    /** Provider id when `source === 'connector'` (uploader contexts only). */
    providerId?: string;
}
export interface TransformationsConfig {
    /** Override label for the "Export Original" button. If omitted, the translated default is used. */
    exportOriginalLabel?: string;
    /** Override label for the "Apply & Export" button. If omitted, the translated default is used. */
    applyExportLabel?: string;
}
/**
 * A user that can be selected as an approver or requester in the Approval filter.
 *
 * `uuid` is what gets sent to the BE as the filter value (e.g.
 * `task_approver:="<uuid>"`), so it must match the value stored on the asset.
 */
export interface ApprovalUser {
    /** Unique user identifier — what's sent to the BE as the filter value. */
    uuid: string;
    /** Display name shown in the dropdown. */
    name: string;
    /** Optional email (shown as secondary text and used for filtering when searching). */
    email?: string;
    /** Optional avatar URL. */
    avatarUrl?: string;
}
export interface AssetPickerConfig {
    auth: AuthConfig;
    /**
     * Override the Files API base URL. Must be the full `/v5` API base
     * (e.g. `https://api.filerobot.com/{container}/v5`) — i.e. ending in `/v5`.
     * Defaults to `https://api.filerobot.com/{projectToken}/v5`.
     */
    apiBase?: string;
    /**
     * Extra computed fields to request from the Files API, on top of the default
     * response set. These are additive — they do not narrow the rest of the response.
     *
     * Defaults to `['cdn_permalink']` so the signed CDN permalink is available on
     * selected assets (`url.cdn_permalink` in the `onSelect`/`ap-select` payload).
     * Override to request additional fields (e.g. `['cdn_permalink', 'relations']`),
     * or pass `[]` to request none.
     */
    apiFields?: string[];
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
    /**
     * Open the picker pre-navigated to this folder path (e.g. '/marketing/banners/').
     * Unlike rootFolderPath, this does not restrict navigation — users can still
     * browse to any folder including parent folders.
     * Overridden by rememberLastFolder if that option is also enabled.
     */
    initialFolderPath?: string;
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
     * Show a "Create folder" button on the Folders tab. Default: false.
     * Even when enabled, the button is only rendered if the security
     * template grants `DIR_CREATE` (or in `sassKey` auth mode, where the
     * integrator owns the key).
     */
    folderCreation?: boolean;
    /**
     * UUIDs of assets to display in the picker but prevent from being selected.
     * Useful when integrating into a context where some assets are already picked
     * (e.g. a "Compare assets" modal) — those assets appear greyed out and cannot
     * be re-selected.
     */
    disabledAssetIds?: string[];
    /**
     * UUIDs of folders to display but prevent from being selected.
     */
    disabledFolderIds?: string[];
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
    /** Enable transformation options (format, quality, resize) before selection is finalized. Defaults to false.
     * Pass a `TransformationsConfig` object to enable and customise button labels. */
    transformations?: boolean | TransformationsConfig;
    /** Enable AI-powered semantic search toggle in the search bar. Defaults to false. */
    enableAISearch?: boolean;
    /** Activate AI search mode by default when the picker opens. Requires `enableAISearch: true`. Defaults to false. */
    defaultAISearch?: boolean;
    /**
     * Rewrite remote thumbnail/preview image URLs before they are rendered as `<img src>`.
     *
     * Useful when the host page enforces a Content-Security-Policy that disallows the
     * Filerobot CDN origin — wrap the URL in a CSP-permitted proxy here. Applies to every
     * preview image the picker renders: grid cards, list rows, folder previews and the
     * preview panel (including the fullscreen image). It does **not** rewrite the
     * `<video>`/`<audio>` playback stream — only the video poster image. Return the
     * original `url` (or any falsy value) to leave it unchanged.
     *
     * Mirrors the uploader's option of the same name and is forwarded to the integrated
     * uploader, so a single function can handle both the picker's thumbnails and the
     * uploader's (`'url-import' | 'connector'`) contexts — branch on `ctx.source`.
     *
     * Called once per image per render, so keep it pure and cheap (no network calls,
     * no heavy allocation). Thrown errors are caught and the original URL is used.
     *
     * Note: the transform is registered process-wide, so if two pickers share a page the
     * last one configured wins — and a picker mounted without this option clears any
     * previously registered transform.
     *
     * Not covered: the `<video>`/`<audio>` playback stream (only the poster image is
     * rewritten), and the built-in file-type fallback icons served from
     * `scaleflex.cloudimg.io` — a strict CSP must allowlist that origin in `img-src`.
     *
     * @example
     * transformRemoteThumbnail: (url) =>
     *   `https://proxy.example.com/?u=${encodeURIComponent(url)}`
     */
    transformRemoteThumbnail?: (url: string, ctx: RemoteThumbnailContext) => string;
    /**
     * Users selectable in the Approval filter's "Approver" section.
     *
     * The picker has no Hub-backend access of its own, so it can't fetch a company
     * users list. The integrator must supply it. When omitted or empty, the
     * Approver section is hidden inside the Approval filter popover (and the chip
     * shows only the Status / Due date sub-filters).
     *
     * The `uuid` of each user is sent to Filerobot as the filter value
     * (`task_approver:="<uuid>"`). Free-text search against the BE is intentionally
     * not supported — it triggered 509 "database query" errors on partial matches.
     */
    approverUsers?: ApprovalUser[];
    /**
     * Users selectable in the Approval filter's "Requester" section.
     *
     * Same semantics as `approverUsers` — see that prop for details. Section is
     * hidden when omitted or empty; uuids are sent as `task_requester:="<uuid>"`.
     */
    requesterUsers?: ApprovalUser[];
    uploader?: UploaderIntegrationConfig;
}
/**
 * Configuration for the integrated uploader.
 * Auth and targetFolder are derived automatically — do not set them here.
 */
export interface UploaderIntegrationConfig {
    /** BCP 47 locale string (e.g. 'fr', 'de', 'en-US'). Defaults to navigator.language. */
    locale?: string;
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
    getLocateUrl?: (file: UploadFile) => string | null | undefined;
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
        /**
         * Default metadata values seeded into every newly added file, in backend
         * format under the same keys as the upload `meta` payload (the field's
         * `key`, e.g. `{ authorized_for_external_usage: false }`).
         */
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