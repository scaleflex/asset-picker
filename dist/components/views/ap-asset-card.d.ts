import { LitElement } from 'lit';
import { Asset } from '../../types/asset.types';
export declare class ApAssetCard extends LitElement {
    static styles: import('lit').CSSResult;
    asset: Asset;
    index: number;
    selected: boolean;
    private _handleSelect;
    private _handlePreview;
    private _handleQuickSelect;
    render(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-asset-card': ApAssetCard;
    }
}
//# sourceMappingURL=ap-asset-card.d.ts.map