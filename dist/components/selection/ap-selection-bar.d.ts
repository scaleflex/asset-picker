import { LitElement, nothing } from 'lit';
import { Asset } from '../../types/asset.types';
export declare class ApSelectionBar extends LitElement {
    static styles: import('lit').CSSResult;
    selectedAssets: Asset[];
    private _confirm;
    private _clear;
    private _deselect;
    render(): import('lit-html').TemplateResult<1> | typeof nothing;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-selection-bar': ApSelectionBar;
    }
}
//# sourceMappingURL=ap-selection-bar.d.ts.map