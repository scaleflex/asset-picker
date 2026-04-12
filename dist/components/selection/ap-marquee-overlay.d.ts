import { LitElement, nothing } from 'lit';
import { MarqueeRect } from '../../controllers/marquee.controller';
export declare class ApMarqueeOverlay extends LitElement {
    static styles: import('lit').CSSResult;
    active: boolean;
    rect: MarqueeRect;
    render(): import('lit-html').TemplateResult<1> | typeof nothing;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-marquee-overlay': ApMarqueeOverlay;
    }
}
//# sourceMappingURL=ap-marquee-overlay.d.ts.map