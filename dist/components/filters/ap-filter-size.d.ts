import { LitElement } from 'lit';
export declare class ApFilterSize extends LitElement {
    static styles: import('lit').CSSResult[];
    min: number;
    max: number;
    private _minVal;
    private _maxVal;
    private _unit;
    private _initialized;
    willUpdate(changedProperties: Map<string, unknown>): void;
    private get _hasFilter();
    private _clearAll;
    private _setUnit;
    private _emitChange;
    private _onMinInput;
    private _onMaxInput;
    render(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-filter-size': ApFilterSize;
    }
}
//# sourceMappingURL=ap-filter-size.d.ts.map