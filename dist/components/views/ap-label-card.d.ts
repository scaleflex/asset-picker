import { LitElement } from 'lit';
import { Label } from '../../types/label.types';
export declare class ApLabelCard extends LitElement {
    static styles: import('lit').CSSResult[];
    label: Label;
    index: number;
    private _handleClick;
    render(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-label-card': ApLabelCard;
    }
}
//# sourceMappingURL=ap-label-card.d.ts.map