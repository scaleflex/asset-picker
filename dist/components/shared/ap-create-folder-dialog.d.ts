import { LitElement } from 'lit';
export declare class ApCreateFolderDialog extends LitElement {
    static styles: import('lit').CSSResult[];
    currentFolderPath: string;
    loading: boolean;
    error: string | null;
    private _name;
    private _localError;
    private _apiErrorDismissed;
    private _input;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changed: Map<string, unknown>): void;
    private _handleDocKeyDown;
    private _handleInput;
    private _canSubmit;
    private _handleConfirm;
    private _handleCancel;
    private _handleBackdropClick;
    private _handleKeyDown;
    render(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-create-folder-dialog': ApCreateFolderDialog;
    }
}
//# sourceMappingURL=ap-create-folder-dialog.d.ts.map