import { LitElement, nothing } from 'lit';
import { Asset } from '../../types/asset.types';
import { Label } from '../../types/label.types';
import { MetadataModelField, RegionalFilters } from '../../types/filter.types';
export declare class ApPreviewPanel extends LitElement {
    static styles: import('lit').CSSResult;
    asset: Asset | null;
    assets: Asset[];
    selectedIds: string[];
    containerToken: string;
    showMetadata: boolean;
    metadataFields: MetadataModelField[];
    labels: Label[];
    regionalFilters: RegionalFilters;
    multiSelect: boolean;
    previewArea?: HTMLElement;
    private _videoEl?;
    private _isFullscreen;
    private _fsImageLoaded;
    private _previewLoading;
    private _openSections;
    private _hls;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _onKeyDown;
    private _destroyHls;
    updated(changedProperties: Map<string, unknown>): void;
    private _setupHls;
    private _onFullscreenChange;
    private _close;
    private _exitFullscreen;
    private _fullscreen;
    private _select;
    private _getCurrentIndex;
    private _navigateTo;
    /** Check if an asset supports inline fullscreen preview (not PDF/other). */
    private _supportsFullscreen;
    /**
     * Find the nearest navigable asset index in a given direction.
     * In fullscreen, skips assets that don't support fullscreen preview.
     * Returns -1 if no valid target exists.
     */
    private _findNavTarget;
    private _prev;
    private _next;
    private _getFullscreenImageUrl;
    private _getBlurDimensions;
    private _onFsImageLoad;
    private _getTagEntries;
    private _parseTagArray;
    private _applyTagFilter;
    private _applyLabelFilter;
    private _toggleSection;
    private _renderFileInfoSection;
    private _renderAccordion;
    private _getFileInfoRows;
    /**
     * Build a lookup map from metadata field key → field definition.
     * Maps by key, ckey, and slug.
     */
    private _buildFieldMap;
    /**
     * Resolve a single slug like "@itm_v1_xxx@" to its label via possible_values.
     */
    private _resolveSlug;
    /**
     * Resolve a metadata field value, handling regional variants and slug→label mapping.
     */
    private _resolveFieldValue;
    private _getAllMetadataRows;
    private _getAssetLabels;
    private _renderLabelsRow;
    private _renderTagsRow;
    render(): import('lit-html').TemplateResult<1> | typeof nothing;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-preview-panel': ApPreviewPanel;
    }
}
//# sourceMappingURL=ap-preview-panel.d.ts.map