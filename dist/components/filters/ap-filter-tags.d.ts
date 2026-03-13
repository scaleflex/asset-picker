import { LitElement } from 'lit';
export declare class ApFilterTags extends LitElement {
    static styles: import('lit').CSSResult[];
    available: string[];
    selected: string[];
    suggested: string[];
    filterKey: string;
    private _search;
    private get _atLimit();
    private get _isSearching();
    private _toggle;
    private _remove;
    private _clearAll;
    private _onSearchInput;
    private _clearSearch;
    private _renderTagItem;
    render(): import('lit-html').TemplateResult<1>;
    private _renderSearchResults;
    private _renderSections;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-filter-tags': ApFilterTags;
    }
}
//# sourceMappingURL=ap-filter-tags.d.ts.map