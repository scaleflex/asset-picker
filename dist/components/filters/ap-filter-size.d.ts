import { LitElement } from 'lit';
export declare class ApFilterSize extends LitElement {
    static styles: import('lit').CSSResult;
    min: number;
    max: number;
    private _minMB;
    private _maxMB;
    private _initialized;
    willUpdate(changedProperties: Map<string, unknown>): void;
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