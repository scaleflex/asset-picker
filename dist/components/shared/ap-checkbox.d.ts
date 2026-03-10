import { LitElement } from 'lit';
export declare class ApCheckbox extends LitElement {
    static styles: import('lit').CSSResult[];
    checked: boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _handleHostClick;
    render(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-checkbox': ApCheckbox;
    }
}
//# sourceMappingURL=ap-checkbox.d.ts.map