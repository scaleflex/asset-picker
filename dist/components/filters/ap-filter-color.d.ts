import { LitElement } from 'lit';
export declare class ApFilterColor extends LitElement {
    static styles: import('lit').CSSResult;
    selected: string;
    tolerance: string;
    coverage: string;
    private _selectColor;
    private _selectTolerance;
    private _handleCoverageInput;
    private _dispatchChange;
    render(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-filter-color': ApFilterColor;
    }
}
//# sourceMappingURL=ap-filter-color.d.ts.map