import { LitElement } from 'lit';
import { Folder, FolderPreviewImage } from '../../types/folder.types';
export declare class ApFolderCard extends LitElement {
    static styles: import('lit').CSSResult[];
    folder: Folder;
    previews: FolderPreviewImage[];
    selected: boolean;
    selectable: boolean;
    multiSelect: boolean;
    index: number;
    private _handleClick;
    private _handleOpen;
    private _getPreviewUrl;
    private _renderPreviewImg;
    private _renderPreviews;
    render(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-folder-card': ApFolderCard;
    }
}
//# sourceMappingURL=ap-folder-card.d.ts.map