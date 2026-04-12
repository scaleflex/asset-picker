import { LitElement } from 'lit';
export declare class ApModal extends LitElement {
    static styles: import('lit').CSSResult;
    open: boolean;
    private dialog;
    updated(changed: Map<string, unknown>): void;
    private _animateClose;
    private _handleBackdropClick;
    private _handleCancel;
    render(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-modal': ApModal;
    }
}
//# sourceMappingURL=ap-modal.d.ts.map