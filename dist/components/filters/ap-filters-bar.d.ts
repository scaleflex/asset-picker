import { LitElement, nothing } from 'lit';
import { Filters, FiltersInput, MetadataFilters, AnyFilterKey, MetadataModelField } from '../../types/filter.types';
import { TagWithLabel } from '../../types/tag.types';
import { Label } from '../../types/label.types';
export declare class ApFiltersBar extends LitElement {
    static styles: import('lit').CSSResult;
    appliedFilters: Filters;
    appliedMetadata: MetadataFilters;
    forcedFilters: FiltersInput;
    metadataFields: MetadataModelField[];
    pinnedFilters: AnyFilterKey[];
    pinnedMetadataFields: string[];
    tags: TagWithLabel[];
    labels: Label[];
    activeFilter: AnyFilterKey | null;
    activeMetadataField: string | null;
    pendingFilter: AnyFilterKey | null;
    pendingMetadataField: string | null;
    private _mapTypeLabel;
    private _getSizeSummary;
    private _getFilterSummary;
    private _getDateSummary;
    private _getFilterIcon;
    private _getMetadataLabel;
    private _getMetadataIcon;
    private _stripMetadataPrefix;
    private _removeFilter;
    private _removeMetadataFilter;
    private _clearAll;
    private _openFilter;
    private _openMetadataFilter;
    private _renderForcedChip;
    private _renderFilterChip;
    private _renderMetadataChip;
    render(): import('lit-html').TemplateResult<1> | typeof nothing;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-filters-bar': ApFiltersBar;
    }
}
//# sourceMappingURL=ap-filters-bar.d.ts.map