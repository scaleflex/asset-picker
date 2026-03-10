import { LitElement } from 'lit';
import { Folder } from '../../types/folder.types';
export declare class ApFolderRow extends LitElement {
    static styles: import('lit').CSSResult;
    folder: Folder;
    private _handleOpen;
    render(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-folder-row': ApFolderRow;
    }
}
//# sourceMappingURL=ap-folder-row.d.ts.map