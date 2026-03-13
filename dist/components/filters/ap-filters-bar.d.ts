import { LitElement, nothing } from 'lit';
import { Filters, MetadataFilters, AnyFilterKey, MetadataModelField } from '../../types/filter.types';
export declare class ApFiltersBar extends LitElement {
    static styles: import('lit').CSSResult;
    appliedFilters: Filters;
    appliedMetadata: MetadataFilters;
    metadataFields: MetadataModelField[];
    pinnedFilters: AnyFilterKey[];
    pinnedMetadataFields: string[];
    activeFilter: AnyFilterKey | null;
    activeMetadataField: string | null;
    private _mapTypeLabel;
    private _getSizeSummary;
    private _getFilterSummary;
    private _getDateSummary;
    private _getMetadataLabel;
    private _stripMetadataPrefix;
    private _removeFilter;
    private _removeMetadataFilter;
    private _clearAll;
    private _openFilter;
    private _openMetadataFilter;
    render(): import('lit-html').TemplateResult<1> | typeof nothing;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-filters-bar': ApFiltersBar;
    }
}
//# sourceMappingURL=ap-filters-bar.d.ts.map