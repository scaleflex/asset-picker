import { LitElement } from 'lit';
import { TFunction } from '../../store/store.types';
/**
 * Create-folder dialog — a thin wrapper over the shared `<sfx-dialog>` (plan/12 D13).
 * Keeps its existing public API (`currentFolderPath`/`loading`/`error` props and the
 * `create-folder-confirm`/`create-folder-cancel` events) so the parent is unchanged; it
 * owns only the folder-name validation and the "In /path" context line.
 */
export declare class ApCreateFolderDialog extends LitElement {
    static styles: import('lit').CSSResult;
    t: TFunction;
    currentFolderPath: string;
    loading: boolean;
    error: string | null;
    private _name;
    private _localError;
    private _apiErrorDismissed;
    updated(changed: Map<string, unknown>): void;
    private _onInput;
    private _validateName;
    private _onConfirm;
    private _onCancel;
    render(): import('lit').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-create-folder-dialog': ApCreateFolderDialog;
    }
}
//# sourceMappingURL=ap-create-folder-dialog.d.ts.map