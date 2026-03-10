import { LitElement } from 'lit';
export declare class ApFilterTags extends LitElement {
    static styles: import('lit').CSSResult;
    available: string[];
    selected: string[];
    filterKey: string;
    private _search;
    private get _atLimit();
    private _toggle;
    private _onSearchInput;
    render(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-filter-tags': ApFilterTags;
    }
}
//# sourceMappingURL=ap-filter-tags.d.ts.map