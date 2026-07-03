import { LitElement } from 'lit';
import { TFunction } from '../../store/store.types';
export declare class ApFilterImage extends LitElement {
    static styles: import('lit').CSSResult[];
    selectedResolution: string[];
    selectedOrientation: string[];
    selectedFaces: string[];
    t: TFunction;
    private get _hasSelection();
    private _toggle;
    private _toggleResolution;
    private _toggleOrientation;
    private _toggleFaces;
    private _clearAll;
    private _dispatchChange;
    render(): import('lit').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-filter-image': ApFilterImage;
    }
}
//# sourceMappingURL=ap-filter-image.d.ts.map