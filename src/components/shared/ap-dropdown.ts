import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { resetStyles } from '../../styles/shared-styles';

export interface DropdownOption {
  value: string;
  label: string;
  icon?: string;
}

@customElement('ap-dropdown')
export class ApDropdown extends LitElement {
  static styles = [
    resetStyles,
    css`
      :host {
        position: relative;
        display: inline-block;
      }
      .trigger {
        display: flex;
        align-items: center;
        gap: 4px;
        height: 36px;
        padding: 0 12px;
        border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
        border-radius: var(--ap-radius-sm, 6px);
        background: var(--ap-background, oklch(1 0 0));
        color: var(--ap-foreground, oklch(0.37 0.022 248.413));
        font-family: inherit;
        font-size: var(--ap-font-size-sm, 0.875rem);
        cursor: pointer;
        white-space: nowrap;
      }
      .trigger:hover {
        background: var(--ap-muted, oklch(0.974 0.006 239.819));
      }
      :host([variant="borderless"]) .trigger {
        border-color: transparent;
        background: none;
      }
      :host([variant="borderless"]) .trigger:hover {
        background: var(--ap-muted, oklch(0.974 0.006 239.819));
      }
      .menu {
        position: fixed;
        z-index: 50;
        min-width: 160px;
        background: var(--ap-card, oklch(1 0 0));
        border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
        border-radius: var(--ap-radius, 8px);
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        padding: 4px;
      }
      .menu.below { bottom: auto; }
      .menu.above { top: auto; }
      .menu.align-left { right: auto; }
      .menu.align-right { left: auto; }
      .option {
        display: flex;
        align-items: center;
        gap: 6px;
        width: 100%;
        padding: 6px 12px;
        border: none;
        background: none;
        color: var(--ap-foreground, oklch(0.37 0.022 248.413));
        font-family: inherit;
        font-size: var(--ap-font-size-sm, 0.875rem);
        text-align: left;
        cursor: pointer;
        border-radius: 4px;
      }
      .option:hover, .option.focused {
        background: var(--ap-muted, oklch(0.974 0.006 239.819));
      }
      .option[aria-selected="true"] {
        background: var(--ap-selection-bg, oklch(0.578 0.198 268.129 / 0.08));
        color: var(--ap-primary, oklch(0.578 0.198 268.129));
      }
      .trigger ap-icon {
        color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      }
      .option ap-icon {
        color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      }
    `,
  ];

  @property() value = '';
  @property() label = '';
  @property({ reflect: true }) variant: 'default' | 'borderless' = 'default';
  @property({ type: Array }) options: DropdownOption[] = [];
  @state() private _open = false;
  @state() private _focusedIndex = -1;
  @state() private _menuPosition: 'below' | 'above' = 'below';
  @state() private _menuAlign: 'align-left' | 'align-right' = 'align-left';
  @state() private _menuTop = 0;
  @state() private _menuBottom = 0;
  @state() private _menuLeft = 0;
  @state() private _menuRight = 0;

  close() {
    this._open = false;
  }

  render() {
    const selected = this.options.find((o) => o.value === this.value);
    const menuId = 'ap-dropdown-menu';
    return html`
      <button
        class="trigger"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded=${this._open}
        aria-controls=${menuId}
        @click=${this._toggle}
        @keydown=${this._handleTriggerKeydown}
      >
        ${selected?.icon ? html`<ap-icon name=${selected.icon} .size=${16}></ap-icon>` : nothing}
        ${this.label}${selected ? `${this.label ? ': ' : ''}${selected.label}` : ''}
        <ap-icon name="chevron-down" .size=${14}></ap-icon>
      </button>
      ${this._open ? html`
        <div
          id=${menuId}
          class="menu ${this._menuPosition} ${this._menuAlign}"
          style="
            ${this._menuPosition === 'below' ? `top: ${this._menuTop}px` : `bottom: ${this._menuBottom}px`};
            ${this._menuAlign === 'align-left' ? `left: ${this._menuLeft}px` : `right: ${this._menuRight}px`};
          "
          role="listbox"
          @keydown=${this._handleMenuKeydown}
        >
          ${this.options.map(
            (opt, i) => html`
              <button
                class="option ${i === this._focusedIndex ? 'focused' : ''}"
                role="option"
                aria-selected=${opt.value === this.value}
                @click=${() => this._select(opt.value)}
                @mouseenter=${() => { this._focusedIndex = i; }}
              >
                ${opt.icon ? html`<ap-icon name=${opt.icon} .size=${16}></ap-icon>` : nothing}
                ${opt.label}
              </button>
            `
          )}
        </div>
      ` : nothing}
    `;
  }

  private _toggle() {
    this._open = !this._open;
    if (this._open) {
      this._focusedIndex = this.options.findIndex((o) => o.value === this.value);
      this._updateMenuPosition();
      this.dispatchEvent(new CustomEvent('dropdown-open', { bubbles: true, composed: true }));
      document.addEventListener('click', this._handleOutsideClick);
      this.updateComplete.then(() => this._focusCurrentOption());
    } else {
      document.removeEventListener('click', this._handleOutsideClick);
    }
  }

  private _select(value: string) {
    this._open = false;
    document.removeEventListener('click', this._handleOutsideClick);
    this.dispatchEvent(new CustomEvent('ap-change', { detail: { value }, bubbles: true, composed: true }));
  }

  private _updateMenuPosition() {
    const rect = this.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;
    const menuHeight = Math.min(this.options.length * 36 + 8, 300);
    this._menuPosition = spaceBelow < menuHeight && spaceAbove > spaceBelow ? 'above' : 'below';

    if (this._menuPosition === 'below') {
      this._menuTop = rect.bottom + 4;
    } else {
      this._menuBottom = window.innerHeight - rect.top + 4;
    }

    const spaceRight = window.innerWidth - rect.left;
    this._menuAlign = spaceRight < 200 ? 'align-right' : 'align-left';

    if (this._menuAlign === 'align-left') {
      this._menuLeft = rect.left;
    } else {
      this._menuRight = window.innerWidth - rect.right;
    }
  }

  private _handleTriggerKeydown(e: KeyboardEvent) {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!this._open) {
        this._open = true;
        this._focusedIndex = e.key === 'ArrowUp'
          ? this.options.length - 1
          : Math.max(0, this.options.findIndex((o) => o.value === this.value));
        this._updateMenuPosition();
        this.dispatchEvent(new CustomEvent('dropdown-open', { bubbles: true, composed: true }));
        document.addEventListener('click', this._handleOutsideClick);
        this.updateComplete.then(() => this._focusCurrentOption());
      }
    } else if (e.key === 'Escape') {
      if (this._open) {
        e.preventDefault();
        this._open = false;
        document.removeEventListener('click', this._handleOutsideClick);
      }
    }
  }

  private _handleMenuKeydown(e: KeyboardEvent) {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        this._focusedIndex = (this._focusedIndex + 1) % this.options.length;
        this._focusCurrentOption();
        break;
      case 'ArrowUp':
        e.preventDefault();
        this._focusedIndex = (this._focusedIndex - 1 + this.options.length) % this.options.length;
        this._focusCurrentOption();
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (this._focusedIndex >= 0 && this._focusedIndex < this.options.length) {
          this._select(this.options[this._focusedIndex].value);
          // Return focus to trigger
          this.shadowRoot?.querySelector<HTMLButtonElement>('.trigger')?.focus();
        }
        break;
      case 'Escape':
        e.preventDefault();
        this._open = false;
        document.removeEventListener('click', this._handleOutsideClick);
        this.shadowRoot?.querySelector<HTMLButtonElement>('.trigger')?.focus();
        break;
      case 'Tab':
        this._open = false;
        document.removeEventListener('click', this._handleOutsideClick);
        break;
      case 'Home':
        e.preventDefault();
        this._focusedIndex = 0;
        this._focusCurrentOption();
        break;
      case 'End':
        e.preventDefault();
        this._focusedIndex = this.options.length - 1;
        this._focusCurrentOption();
        break;
    }
  }

  private _focusCurrentOption() {
    const options = this.shadowRoot?.querySelectorAll<HTMLButtonElement>('.option');
    if (options && this._focusedIndex >= 0 && this._focusedIndex < options.length) {
      options[this._focusedIndex].focus();
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('click', this._handleOutsideClick);
  }

  private _handleOutsideClick = (e: Event) => {
    if (!e.composedPath().includes(this)) {
      this._open = false;
      document.removeEventListener('click', this._handleOutsideClick);
    }
  };
}

declare global {
  interface HTMLElementTagNameMap {
    'ap-dropdown': ApDropdown;
  }
}
