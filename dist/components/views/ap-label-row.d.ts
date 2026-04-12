import { LitElement } from 'lit';
import { Label } from '../../types/label.types';
export declare class ApLabelRow extends LitElement {
    static styles: import('lit').CSSResult;
    label: Label;
    index: number;
    private _handleClick;
    render(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-label-row': ApLabelRow;
    }
}
//# sourceMappingURL=ap-label-row.d.ts.map