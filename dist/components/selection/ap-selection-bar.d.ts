import { LitElement, nothing } from 'lit';
import { Asset } from '../../types/asset.types';
import { Folder } from '../../types/folder.types';
export declare class ApSelectionBar extends LitElement {
    static styles: import('lit').CSSResult;
    selectedAssets: Asset[];
    selectedFolders: Folder[];
    totalCount: number;
    totalFolderCount: number;
    isSelectingAll: boolean;
    multiSelect: boolean;
    maxSelections?: number;
    showTransform: boolean;
    private get _totalSelected();
    private _formatCount;
    private _confirm;
    private _transform;
    private _clear;
    private _canSelectMore;
    private get _scopeTotal();
    private get _selectScope();
    private _selectAll;
    render(): import('lit-html').TemplateResult<1> | typeof nothing;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-selection-bar': ApSelectionBar;
    }
}
//# sourceMappingURL=ap-selection-bar.d.ts.map