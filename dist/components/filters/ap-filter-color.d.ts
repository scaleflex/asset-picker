import { LitElement } from 'lit';
interface ColorEntry {
    hex: string;
    tolerance: string;
    coverage: string;
}
export declare class ApFilterColor extends LitElement {
    static styles: import('lit').CSSResult[];
    colors: ColorEntry[];
    private _advanced;
    private _showPalette;
    private get _hasSelection();
    private get _selectedHexes();
    private static _HEX_RE;
    private _selectColor;
    private _removeColor;
    private _clearAll;
    private _toggleAdvanced;
    private _handleToleranceChange;
    private _handleCoverageInput;
    private _showAddPalette;
    private _dispatchChange;
    private _renderPalette;
    private _renderNormalColorEntry;
    private _renderAdvancedColorEntry;
    render(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-filter-color': ApFilterColor;
    }
}
export {};
//# sourceMappingURL=ap-filter-color.d.ts.map