import { LitElement } from 'lit';
import { CollectionFolder } from '../../types/collection.types';
export declare class ApCollectionFolderCard extends LitElement {
    static styles: import('lit').CSSResult[];
    folder: CollectionFolder;
    index: number;
    connectedCallback(): void;
    updated(changed: Map<string, unknown>): void;
    private _handleClick;
    render(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-collection-folder-card': ApCollectionFolderCard;
    }
}
//# sourceMappingURL=ap-collection-folder-card.d.ts.map