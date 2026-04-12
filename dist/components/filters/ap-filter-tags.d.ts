import { LitElement } from 'lit';
import { TagWithLabel } from '../../types/tag.types';
export declare class ApFilterTags extends LitElement {
    static styles: import('lit').CSSResult[];
    tags: TagWithLabel[];
    selected: string[];
    filterKey: string;
    private _searchInput?;
    private _search;
    connectedCallback(): void;
    private get _suggestedTags();
    private get _otherTags();
    private get _atLimit();
    private get _isSearching();
    private _toggle;
    private _remove;
    private _clearAll;
    private _onSearchInput;
    private _clearSearch;
    private _getTagBySid;
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