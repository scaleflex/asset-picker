import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { MarqueeRect } from '../../controllers/marquee.controller';

@customElement('ap-marquee-overlay')
export class ApMarqueeOverlay extends LitElement {
  static styles = css`
    :host {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      min-height: 100%;
      pointer-events: none;
      z-index: 10;
    }
    .marquee {
      position: absolute;
      border: 2px solid var(--ap-primary, oklch(0.65 0.19 258));
      background: var(--ap-primary-10, oklch(0.65 0.19 258 / 0.1));
      border-radius: 2px;
    }
  `;

  @property({ type: Boolean }) active = false;
  @property({ type: Object }) rect: MarqueeRect = { x: 0, y: 0, width: 0, height: 0 };

  render() {
    if (!this.active || this.rect.width < 5 || this.rect.height < 5) return nothing;
    return html`
      <div
        class="marquee"
        style="left:${this.rect.x}px;top:${this.rect.y}px;width:${this.rect.width}px;height:${this.rect.height}px"
      ></div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ap-marquee-overlay': ApMarqueeOverlay;
  }
}
