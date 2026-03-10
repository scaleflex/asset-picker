import { LitElement } from 'lit';
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
    config?: AssetPickerConfig;
    constructor();
    connectedCallback(): void;
    updated(changed: Map<string, unknown>): void;
    private _initConfig;
    private _doInit;
    open(): Promise<void>;
    close(): void;
    private _scrollToTop;
    private _loadData;
    private _loadMore;
    private _handleCancel;
    private _handleSearchChange;
    private _handleViewChange;
    private _handleRegionalChange;
    private _handleSortChange;
    private _handleSortDirectionChange;
    private _handleTabChange;
    private _handleAssetSelect;
    private _handleAssetPreview;
    private _handleQuickSelect;
    private _handleFolderOpen;
    private _handleBreadcrumbNavigate;
    private _handlePreviewClose;
    private _handlePreviewNavigate;
    private _handleSelectionConfirm;
    private _handleSelectionClear;
    private _handleSelectionDeselect;
    private _isDateFilterKey;
    private _handleFilterUpdate;
    private _handleFilterRemove;
    private _handleMetadataFilterChange;
    private _handleMetadataFieldToggle;
    private _handleMetadataFilterRemove;
    private _handleFilterPin;
    private _handleMetadataPin;
    private _handleFiltersClearAll;
    private _buildSearchNotation;
    render(): import('lit-html').TemplateResult<1>;
    private _renderContent;
}
declare global {
    interface HTMLElementTagNameMap {
        'asset-picker': AssetPicker;
    }
}
//# sourceMappingURL=asset-picker.d.ts.map