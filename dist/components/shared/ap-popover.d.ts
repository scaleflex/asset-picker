import { LitElement } from 'lit';
export declare class ApPopover extends LitElement {
    static styles: import('lit').CSSResult[];
    open: boolean;
    render(): import('lit-html').TemplateResult<1>;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _handleOutsideClick;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-popover': ApPopover;
    }
}
//# sourceMappingURL=ap-popover.d.ts.map