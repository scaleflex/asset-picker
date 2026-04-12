import { LitElement } from 'lit';
import { Folder, FolderPreviewImage } from '../../types/folder.types';
export declare class ApFolderRow extends LitElement {
    static styles: import('lit').CSSResult;
    folder: Folder;
    previews: FolderPreviewImage[];
    selected: boolean;
    selectable: boolean;
    multiSelect: boolean;
    index: number;
    compactLevel: number;
    private _getGridColumns;
    private _renderPreviewImg;
    private _renderThumb;
    private _handleClick;
    private _handleOpen;
    render(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-folder-row': ApFolderRow;
    }
}
//# sourceMappingURL=ap-folder-row.d.ts.map