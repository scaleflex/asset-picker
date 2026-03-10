import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';


@customElement('ap-tooltip')
export class ApTooltip extends LitElement {
  static styles = [
    css`
      :host {
        position: relative;
        display: inline-flex;
      }
      .tip {
        display: none;
        position: absolute;
        bottom: calc(100% + 6px);
        left: 50%;
        transform: translateX(-50%);
        white-space: nowrap;
        padding: 4px 8px;
        font-size: 0.75rem;
        background: var(--ap-foreground, #09090b);
        color: var(--ap-background, #fff);
        border-radius: 4px;
        pointer-events: none;
        z-index: 100;
      }
      :host(:hover) .tip {
        display: block;
      }
    `,
  ];

  @property() text = '';

  render() {
    return html`
      <slot></slot>
      <div class="tip">${this.text}</div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ap-tooltip': ApTooltip;
  }
}
