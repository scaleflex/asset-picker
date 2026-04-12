import { LitElement } from 'lit';
export declare class ApCheckbox extends LitElement {
    static styles: import('lit').CSSResult[];
    checked: boolean;
    indeterminate: boolean;
    disabled: boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _hasLabel;
    private _onSlotChange;
    private _handleHostClick;
    render(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-checkbox': ApCheckbox;
    }
}
//# sourceMappingURL=ap-checkbox.d.ts.map