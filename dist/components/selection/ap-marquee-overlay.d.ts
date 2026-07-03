import { LitElement, nothing } from 'lit';
import { MarqueeRect } from '@scaleflex/dam-ui/controllers';
export declare class ApMarqueeOverlay extends LitElement {
    static styles: import('lit').CSSResult;
    active: boolean;
    rect: MarqueeRect;
    render(): import('lit').TemplateResult<1> | typeof nothing;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-marquee-overlay': ApMarqueeOverlay;
    }
}
//# sourceMappingURL=ap-marquee-overlay.d.ts.map