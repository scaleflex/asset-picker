import { LitElement } from 'lit';
import { TFunction } from '../../store/store.types';
import { DamClient } from '@scaleflex/dam-core';
export declare class ApFilterProductRef extends LitElement {
    static styles: import('lit').CSSResult[];
    selected: string[];
    apiClient?: DamClient;
    t: TFunction;
    private _searchInput?;
    private _search;
    private _debouncedSearch;
    private _products;
    private _isLoading;
    private _showAddList;
    private _addListText;
    private _debounceTimer?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private get _isSearching();
    private _emit;
    private _toggle;
    private _remove;
    private _clearAll;
    private _onSearchInput;
    private _clearSearch;
    private _fetchProducts;
    private _openAddList;
    private _closeAddList;
    private _onAddListInput;
    private _onAddListKeydown;
    private _submitAddList;
    private _renderProductItem;
    render(): import('lit').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-filter-product-ref': ApFilterProductRef;
    }
}
//# sourceMappingURL=ap-filter-product-ref.d.ts.map