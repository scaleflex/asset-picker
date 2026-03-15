import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('ap-filter-popover')
export class ApFilterPopover extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .popover {
      position: absolute;
      top: calc(100% + 8px);
      left: 20px;
      z-index: 50;
      width: 320px;
      max-height: 400px;
      overflow-y: auto;
      overscroll-behavior: contain;
      background: var(--ap-card, #fff);
      border: 1px solid var(--ap-border, #e4e4e7);
      border-radius: var(--ap-radius, 8px);
      box-shadow: 0 10px 25px -5px rgb(0 0 0 / 0.1);
      padding: 12px;
    }
    .title {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 600;
      color: var(--ap-foreground, #09090b);
      margin-bottom: 12px;
    }
  `;

  @property() title = '';
  @property({ type: Boolean }) open = false;

  render() {
    if (!this.open) return html``;
    return html`
      <div class="popover">
        ${this.title ? html`<div class="title">${this.title}</div>` : ''}
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ap-filter-popover': ApFilterPopover;
  }
}
