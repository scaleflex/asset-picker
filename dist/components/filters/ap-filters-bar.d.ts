import { LitElement, nothing } from 'lit';
import { Filters, MetadataFilters, AnyFilterKey, MetadataModelField } from '../../types/filter.types';
export declare class ApFiltersBar extends LitElement {
    static styles: import('lit').CSSResult;
    appliedFilters: Filters;
    appliedMetadata: MetadataFilters;
    pinnedFilters: AnyFilterKey[];
    pinnedMetadata: string[];
    metadataFields: MetadataModelField[];
    private _getFilterSummary;
    private _getMetadataLabel;
    private _stripMetadataPrefix;
    private _removeFilter;
    private _removeMetadataFilter;
    private _togglePin;
    private _toggleMetadataPin;
    private _clearAll;
    render(): import('lit-html').TemplateResult<1> | typeof nothing;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-filters-bar': ApFiltersBar;
    }
}
//# sourceMappingURL=ap-filters-bar.d.ts.map