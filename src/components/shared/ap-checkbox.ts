import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';


@customElement('ap-checkbox')
export class ApCheckbox extends LitElement {
  static styles = [
    css`
      :host {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
      }
      .box {
        width: 18px;
        height: 18px;
        border: 2px solid var(--ap-border, #e4e4e7);
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 150ms;
        background: var(--ap-background, #fff);
      }
      :host([checked]) .box {
        background: var(--ap-primary, #3b82f6);
        border-color: var(--ap-primary, #3b82f6);
      }
      .check {
        display: none;
        color: var(--ap-primary-foreground, #fff);
      }
      :host([checked]) .check {
        display: block;
      }
      .label {
        margin-left: 8px;
        font-size: var(--ap-font-size-sm, 0.875rem);
        color: var(--ap-foreground, #09090b);
      }
    `,
  ];

  @property({ type: Boolean, reflect: true }) checked = false;

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('click', this._handleHostClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('click', this._handleHostClick);
  }

  private _handleHostClick = () => {
    this.dispatchEvent(new CustomEvent('ap-toggle', {
      detail: { checked: !this.checked },
      bubbles: true,
      composed: true,
    }));
  };

  render() {
    return html`
      <div class="box">
        <svg class="check" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4.5 12.75l6 6 9-13.5"></path>
        </svg>
      </div>
      <span class="label"><slot></slot></span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ap-checkbox': ApCheckbox;
  }
}
