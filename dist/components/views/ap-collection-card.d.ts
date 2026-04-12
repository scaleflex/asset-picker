import { LitElement } from 'lit';
import { Collection } from '../../types/collection.types';
export declare class ApCollectionCard extends LitElement {
    static styles: import('lit').CSSResult[];
    collection: Collection;
    index: number;
    connectedCallback(): void;
    updated(changed: Map<string, unknown>): void;
    private _handleClick;
    render(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-collection-card': ApCollectionCard;
    }
}
//# sourceMappingURL=ap-collection-card.d.ts.map