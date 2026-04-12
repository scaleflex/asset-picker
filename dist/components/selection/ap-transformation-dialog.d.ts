import { LitElement } from 'lit';
import { Asset } from '../../types/asset.types';
export declare class ApTransformationDialog extends LitElement {
    static styles: import('lit').CSSResult[];
    assets: Asset[];
    isMultiSelect: boolean;
    private _format;
    private _quality;
    private _width;
    private _height;
    private _lockAspect;
    private _activePreset;
    private _defaultFormat;
    private _defaultWidth;
    private _defaultHeight;
    private get _ratio();
    private get _isDirty();
    willUpdate(changed: Map<string, unknown>): void;
    private _initDefaults;
    private _handleFormatChange;
    private _handleQualityChange;
    private _handleWidthInput;
    private _handleHeightInput;
    private _handleMaxSizeInput;
    private _toggleLock;
    private _handlePreset;
    private _handleApply;
    private _handleSkip;
    private _handleClose;
    private _handleBackdropClick;
    render(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-transformation-dialog': ApTransformationDialog;
    }
}
//# sourceMappingURL=ap-transformation-dialog.d.ts.map