import { LitElement } from 'lit';
import { SortBy, SortDirection } from '../../types/config.types';
import { FiltersState, FilterKey, AnyFilterKey, MetadataModelField } from '../../types/filter.types';
import { Label } from '../../types/label.types';
import { SortOption } from './sort.constants';
export declare class ApContentToolbar extends LitElement {
    static styles: import('lit').CSSResult;
    totalCount: number;
    totalFolderCount: number;
    isLoading: boolean;
    sortBy: SortBy;
    sortDirection: SortDirection;
    sortOptions: SortOption[];
    filters: FiltersState;
    labels: Label[];
    metadataFields: MetadataModelField[];
    pinnedFilters: AnyFilterKey[];
    private _sortDropdown?;
    private _showDropdown;
    private _openFilter;
    private _openMetadataField;
    private _externalTrigger;
    private _externalLeft;
    private _outsideClickHandler;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changed: Map<string, unknown>): void;
    private _closeAllDropdowns;
    private _toggleDropdown;
    /** Close any open filter panel */
    closeFilterPanel(): void;
    /** Open a specific filter panel (also used programmatically by parent) */
    openFilterPanel(key: FilterKey, external?: boolean, chipLeft?: number): void;
    private _handleSortOpen;
    private _handleSort;
    private _toggleSortDirection;
    private _isFilterActive;
    private _handleFilterChange;
    private _handleMetadataFilterChange;
    private _handleMetadataFieldToggle;
    private _handleMetadataFieldSelect;
    private _handleMetadataPin;
    openMetadataFieldPanel(fieldKey: string, external?: boolean, chipLeft?: number): void;
    private _getMetadataFieldLabel;
    private _togglePin;
    private _getFilterIcon;
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