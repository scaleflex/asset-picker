import { LitElement } from 'lit';
import { Label } from '../../types/label.types';
export declare class ApFilterLabels extends LitElement {
    static styles: import('lit').CSSResult[];
    labels: Label[];
    selected: string[];
    private _searchInput?;
    private _search;
    connectedCallback(): void;
    private get _atLimit();
    private get _isSearching();
    private _toggle;
    private _remove;
    private _clearAll;
    private _onSearchInput;
    private _clearSearch;
    private _getLabelBySid;
    private _renderLabelItem;
    render(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-filter-labels': ApFilterLabels;
    }
}
//# sourceMappingURL=ap-filter-labels.d.ts.map