import { LitElement } from 'lit';
import { Folder } from '../../types/folder.types';
export interface FolderPreviewImage {
    file_uri_cdn: string;
    file_type: string;
}
export declare class ApFolderCard extends LitElement {
    static styles: import('lit').CSSResult;
    folder: Folder;
    previews: FolderPreviewImage[];
    private _handleOpen;
    private _isAlternativeDisplay;
    /**
     * Get the best preview URL for a folder preview image.
     * Applies CDN transformations for videos and PDFs (like asset cards).
     */
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