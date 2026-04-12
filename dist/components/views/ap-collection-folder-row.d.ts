import { LitElement } from 'lit';
import { CollectionFolder } from '../../types/collection.types';
export declare class ApCollectionFolderRow extends LitElement {
    static styles: import('lit').CSSResult;
    folder: CollectionFolder;
    index: number;
    private _handleClick;
    render(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-collection-folder-row': ApCollectionFolderRow;
    }
}
//# sourceMappingURL=ap-collection-folder-row.d.ts.map