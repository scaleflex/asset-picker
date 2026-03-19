import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('ap-popover')
export class ApPopover extends LitElement {
  static styles = [
    css`
      :host {
        position: relative;
        display: inline-block;
      }
      .content {
        display: none;
        position: absolute;
        top: calc(100% + 4px);
        left: 0;
        z-index: 50;
        min-width: 200px;
        background: var(--ap-card, oklch(1 0 0));
        border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
        border-radius: var(--ap-radius, 8px);
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        padding: 8px;
      }
      .content.open {
        display: block;
      }
    `,
  ];

  @state() open = false;

  render() {
    return html`
      <slot name="trigger" @click=${() => (this.open = !this.open)}></slot>
      <div class="content ${this.open ? 'open' : ''}">
        <slot></slot>
      </div>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('click', this._handleOutsideClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('click', this._handleOutsideClick);
  }

  private _handleOutsideClick = (e: Event) => {
    if (this.open && !e.composedPath().includes(this)) {
      this.open = false;
    }
  };
}

declare global {
  interface HTMLElementTagNameMap {
    'ap-popover': ApPopover;
  }
}
