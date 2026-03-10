import { LitElement } from 'lit';
export declare class ApFilterImage extends LitElement {
    static styles: import('lit').CSSResult;
    selectedResolution: string[];
    selectedOrientation: string[];
    selectedFaces: string[];
    private _toggle;
    private _toggleResolution;
    private _toggleOrientation;
    private _toggleFaces;
    private _dispatchChange;
    private _renderSection;
    render(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-filter-image': ApFilterImage;
    }
}
//# sourceMappingURL=ap-filter-image.d.ts.map