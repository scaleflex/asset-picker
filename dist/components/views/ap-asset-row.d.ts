import { LitElement } from 'lit';
import { Asset } from '../../types/asset.types';
import { TFunction } from '../../store/store.types';
export declare class ApAssetRow extends LitElement {
    static styles: import('lit').CSSResult;
    t: TFunction;
    asset: Asset;
    index: number;
    selected: boolean;
    disabled: boolean;
    multiSelect: boolean;
    compactLevel: number;
    private _getGridColumns;
    private _handleSelect;
    private _handlePreview;
    private _handleQuickSelect;
    render(): import('lit').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-asset-row': ApAssetRow;
    }
}
//# sourceMappingURL=ap-asset-row.d.ts.map