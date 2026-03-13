import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export interface RadioOption {
  value: string;
  label: string;
  icon?: string;
  disabled?: boolean;
}

/**
 * Radio button group matching js-admin FiltersCheckboxGroup pattern.
 * Supports vertical list and horizontal/grid layouts via CSS on the host.
 */
@customElement('ap-radio-group')
export class ApRadioGroup extends LitElement {
  static styles = [
    css`
      :host {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      :host([direction="horizontal"]) {
        flex-direction: row;
        gap: 16px;
      }
      :host([columns="2"]) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
      }
      .option {
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
        padding: 2px 0;
      }
      .option[aria-disabled="true"] {
        opacity: 0.5;
        cursor: default;
        pointer-events: none;
      }
      .radio {
        width: 18px;
        height: 18px;
        min-width: 18px;
        border: 2px solid var(--ap-border, #e4e4e7);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: border-color 150ms;
        background: var(--ap-background, #fff);
        box-sizing: border-box;
      }
      .radio .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: transparent;
        transition: background 150ms;
      }
      .option[aria-checked="true"] .radio {
        border-color: var(--ap-primary, oklch(0.65 0.19 258));
      }
      .option[aria-checked="true"] .radio .dot {
        background: var(--ap-primary, oklch(0.65 0.19 258));
      }
      .label {
        font-size: var(--ap-font-size-sm, 0.875rem);
        color: var(--ap-foreground, #09090b);
        font-family: inherit;
        user-select: none;
      }
    `,
  ];

  @property() value = '';
  @property({ type: Array }) options: RadioOption[] = [];
  @property({ type: Boolean }) disabled = false;
  @property({ reflect: true }) direction: 'vertical' | 'horizontal' = 'vertical';
  @property({ reflect: true }) columns?: string;

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'radiogroup');
    if (!this.hasAttribute('tabindex')) {
      this.setAttribute('tabindex', '0');
    }
    this.addEventListener('keydown', this._onKeydown);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('keydown', this._onKeydown);
  }

  private _onKeydown = (e: KeyboardEvent) => {
    const enabledOptions = this.options.filter(
      (opt) => !this.disabled && !opt.disabled
    );
    if (enabledOptions.length === 0) return;

    const currentIndex = enabledOptions.findIndex(
      (opt) => opt.value === this.value
    );

    let newIndex: number | null = null;

    switch (e.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        e.preventDefault();
        newIndex =
          currentIndex < 0 ? 0 : (currentIndex + 1) % enabledOptions.length;
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        e.preventDefault();
        newIndex =
          currentIndex < 0
            ? enabledOptions.length - 1
            : (currentIndex - 1 + enabledOptions.length) %
              enabledOptions.length;
        break;
      case ' ':
      case 'Enter':
        e.preventDefault();
        if (currentIndex >= 0) {
          this._select(enabledOptions[currentIndex]);
        } else if (enabledOptions.length > 0) {
          this._select(enabledOptions[0]);
        }
        return;
      default:
        return;
    }

    if (newIndex !== null) {
      this._select(enabledOptions[newIndex]);
    }
  };

  render() {
    return html`
      ${this.options.map(
        (opt) => html`
          <div
            class="option"
            role="radio"
            aria-checked=${opt.value === this.value}
            aria-disabled=${(this.disabled || opt.disabled) ? 'true' : nothing}
            @click=${() => this._select(opt)}
          >
            <div class="radio"><div class="dot"></div></div>
            ${opt.icon ? html`<ap-icon name=${opt.icon} .size=${16}></ap-icon>` : nothing}
            <span class="label">${opt.label}</span>
          </div>
        `
      )}
    `;
  }

  private _select(opt: RadioOption) {
    if (this.disabled || opt.disabled) return;
    this.dispatchEvent(new CustomEvent('ap-change', {
      detail: { value: opt.value },
      bubbles: true,
      composed: true,
    }));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ap-radio-group': ApRadioGroup;
  }
}
