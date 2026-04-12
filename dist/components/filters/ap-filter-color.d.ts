import { LitElement } from 'lit';
export declare class ApFilterColor extends LitElement {
    static styles: import('lit').CSSResult[];
    /** Stored filter values from state, e.g. ["#FF0000 1 1 20", "#00FF00 2 2 30"] */
    values: string[];
    private _colors;
    private _advanced;
    private _showPalette;
    private _initialized;
    private get _hasSelection();
    private get _selectedHexes();
    willUpdate(changed: Map<string, unknown>): void;
    private _selectColor;
    private _removeColor;
    private _clearAll;
    private _toggleAdvanced;
    private _handleHexInput;
    private _handleToleranceChange;
    private _handleCoverageInput;
    private _showAddPalette;
    private _dispatchChange;
    private _renderPalette;
    private _renderColorEntry;
    render(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-filter-color': ApFilterColor;
    }
}
//# sourceMappingURL=ap-filter-color.d.ts.map