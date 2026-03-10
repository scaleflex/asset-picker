import { LitElement } from 'lit';
import { SortBy, SortDirection } from '../../types/config.types';
import { FiltersState, MetadataModelField } from '../../types/filter.types';
import { Label } from '../../types/label.types';
export declare class ApContentToolbar extends LitElement {
    static styles: import('lit').CSSResult;
    totalCount: number;
    totalFolderCount: number;
    isLoading: boolean;
    sortBy: SortBy;
    sortDirection: SortDirection;
    filters: FiltersState;
    labels: Label[];
    metadataFields: MetadataModelField[];
    private _sortDropdown?;
    private _filterDropdownEl?;
    private _showDropdown;
    private _openFilter;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _handleOutsideClick;
    private _closeAllDropdowns;
    private _toggleDropdown;
    private _selectFilterKey;
    private _handleSortOpen;
    private _handleSort;
    private _toggleSortDirection;
    private _isFilterActive;
    private _handleFilterChange;
    private _handleMetadataFilterChange;
    private _handleMetadataFieldToggle;
    private _renderFilterContent;
    private _renderFilterButton;
    render(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-content-toolbar': ApContentToolbar;
    }
}
//# sourceMappingURL=ap-content-toolbar.d.ts.map