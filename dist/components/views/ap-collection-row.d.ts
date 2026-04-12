import { LitElement } from 'lit';
import { Collection } from '../../types/collection.types';
export declare class ApCollectionRow extends LitElement {
    static styles: import('lit').CSSResult;
    collection: Collection;
    index: number;
    private _formatDate;
    private _handleClick;
    render(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-collection-row': ApCollectionRow;
    }
}
//# sourceMappingURL=ap-collection-row.d.ts.map