import { LitElement, nothing } from 'lit';
import { AssetPickerConfig } from './types/config.types';
export declare class AssetPicker extends LitElement {
    static styles: import('lit').CSSResult[];
    private store;
    private storeCtrl;
    private selectionCtrl;
    private infiniteScrollCtrl;
    private marqueeCtrl;
    private apiClient?;
    private _lastSentinel?;
    private _lastMarqueeContainer?;
    private _initPromise?;
    private _initFailed;
    private _loadId;
    private _loadMoreId;
    private _selectAllId;
    private _loadDataTimer;
    private _pendingFilter;
    private _pendingMetadataField;
    private _normalizedForcedFilters;
    private _uploaderEl;
    private _uploaderImportPromise;
    private _dragCounter;
    private _isDragOver;
    private _isUploaderOpen;
    private _folderResolveOpen;
    private _transformOpen;
    private _transformAssets;
    private _transformFolders;
    private _transformAfterResolve;
    config?: AssetPickerConfig;
    constructor();
    private get _isInline();
    disconnectedCallback(): void;
    updated(changed: Map<string, unknown>): void;
    private _initConfig;
    private _doInit;
    /**
     * Ensure the uploader module is loaded (dynamic import).
     * Only called when config.uploader is set — zero cost otherwise.
     * Guards against concurrent calls via a shared promise.
     */
    private _ensureUploaderImport;
    /** Build the uploader config from asset-picker state + user config. */
    private _buildUploaderConfig;
    /** Open the uploader panel, optionally pre-loading files (from drop). */
    private _openUploader;
    /** Close the uploader panel and return to the asset picker. */
    private _closeUploader;
    private _handleUploadClick;
    /** Check if the drag event contains files (not text selections, links, etc.). */
    private _hasFileTransfer;
    private _onDragEnter;
    private _onDragOver;
    private _onDragLeave;
    private _onDrop;
    open(): Promise<void>;
    close(): void;
    private _scrollToTop;
    private _loadData;
    private _loadMore;
    private _debouncedLoadData;
    private _handleCancel;
    private _handleSearchChange;
    private _handleAISearchToggle;
    private _handleViewChange;
    private _handleRegionalChange;
    private _handleSortChange;
    private _handleSortDirectionChange;
    private _handleTabChange;
    private _handleAssetSelect;
    private _handleFolderSelect;
    private _handleAssetPreview;
    private _handleQuickSelect;
    private _emitSelect;
    private _handleFolderOpen;
    private _handleBreadcrumbNavigate;
    private _handleLabelOpen;
    private _handleCollectionOpen;
    private _handleCollectionFolderOpen;
    private _findCollectionFolder;
    private _getVisibleCollectionFolders;
    private _resolveInitialFolderPath;
    /**
     * Build breadcrumb items from a folder path relative to the root folder path.
     * Used to restore breadcrumbs when opening the picker into a remembered/configured folder.
     */
    private _buildBreadcrumbFromPath;
    private _handlePreviewClose;
    private _handlePreviewNavigate;
    private _handleSelectionConfirm;
    private _handleSelectionTransform;
    private _handleFolderResolveConfirm;
    private _handleFolderResolveCancel;
    private _handleTransformConfirm;
    private _handleTransformSkip;
    private _handleTransformCancel;
    private _handleSelectAll;
    private _handleSelectionClear;
    private _handleSelectionDeselect;
    private _isDateFilterKey;
    private _handleFilterUpdate;
    private _handleFilterOpen;
    private _handleMetadataFilterOpen;
    private _handleFilterPanelChange;
    private _handleFilterPending;
    private _handleFilterRemove;
    private _handleMetadataFilterChange;
    private _handleMetadataFieldToggle;
    private _handleMetadataFilterRemove;
    private _handleFilterPin;
    private _handleMetadataPin;
    private _handleFiltersClearAll;
    private _handleFilterDeactivate;
    private _handleMetadataFieldDeactivate;
    private _handleFiltersSet;
    private _getSortOptions;
    private _buildSearchNotation;
    render(): import('lit-html').TemplateResult<1> | typeof nothing;
    private _renderContent;
}
declare global {
    interface HTMLElementTagNameMap {
        'sfx-asset-picker': AssetPicker;
    }
}
//# sourceMappingURL=asset-picker.d.ts.map