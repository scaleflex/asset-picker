import { LitElement } from 'lit';
import { Folder } from '../../types/folder.types';
export declare class ApFolderResolveDialog extends LitElement {
    static styles: import('lit').CSSResult[];
    folders: Folder[];
    loading: boolean;
    private _mode;
    private _handleConfirm;
    private _handleCancel;
    private _handleModeChange;
    render(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-folder-resolve-dialog': ApFolderResolveDialog;
    }
}
//# sourceMappingURL=ap-folder-resolve-dialog.d.ts.map