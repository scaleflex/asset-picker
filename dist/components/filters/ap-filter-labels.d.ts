import { LitElement } from 'lit';
import { Label } from '../../types/label.types';
export declare class ApFilterLabels extends LitElement {
    static styles: import('lit').CSSResult;
    labels: Label[];
    selected: string[];
    private _search;
    private get _atLimit();
    private _toggle;
    private _onSearchInput;
    render(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-filter-labels': ApFilterLabels;
    }
}
//# sourceMappingURL=ap-filter-labels.d.ts.map