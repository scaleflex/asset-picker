import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';


@customElement('ap-spinner')
export class ApSpinner extends LitElement {
  static styles = [
    css`
      :host {
        display: inline-flex;
      }
      .spinner {
        border: 2px solid var(--ap-border, oklch(92.86% 0.009 247.92));
        border-top-color: var(--ap-primary, oklch(0.578 0.198 268.129));
        border-radius: 50%;
        animation: spin 0.6s linear infinite;
      }
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    `,
  ];

  @property({ type: Number }) size = 24;

  render() {
    return html`<div class="spinner" style="width:${this.size}px;height:${this.size}px"></div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ap-spinner': ApSpinner;
  }
}
