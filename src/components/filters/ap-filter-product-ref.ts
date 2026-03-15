import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { FILTER_KEYS, FILTER_OPERATORS } from '../../types/filter.types';
import { filterPopoverStyles } from './shared/filter-styles';

const MAX_PRODUCTS = 10;

@customElement('ap-filter-product-ref')
export class ApFilterProductRef extends LitElement {
  static styles = [filterPopoverStyles, css`
    .product-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 8px;
      border-radius: var(--ap-radius-sm, 6px);
      cursor: pointer;
      transition: background 150ms;
    }

    .product-item:hover {
      background: var(--ap-muted, #f4f4f5);
    }

    .product-name {
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, #09090b);
      flex: 1;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .add-row {
      display: flex;
      gap: 6px;
    }

    .add-input {
      flex: 1;
      font-size: var(--ap-font-size-sm, 0.875rem);
      padding: 6px 8px;
      border: 1px solid var(--ap-border, #e4e4e7);
      border-radius: var(--ap-radius-sm, 6px);
      background: var(--ap-background, #fff);
      color: var(--ap-foreground, #09090b);
      outline: none;
    }

    .add-input:focus {
      border-color: var(--ap-primary, #3b82f6);
    }

    .add-btn {
      font-size: 0.8125rem;
      padding: 6px 12px;
      border: 1px solid var(--ap-border, #e4e4e7);
      border-radius: var(--ap-radius-sm, 6px);
      background: var(--ap-background, #fff);
      color: var(--ap-foreground, #09090b);
      cursor: pointer;
    }

    .add-btn:hover:not(:disabled) {
      background: var(--ap-muted, #f4f4f5);
    }

    .add-btn:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
  `];

  @property({ type: Array }) selected: string[] = [];
  @state() private _inputValue = '';

  private get _atLimit(): boolean {
    return this.selected.length >= MAX_PRODUCTS;
  }

  private _emit(values: string[]) {
    this.dispatchEvent(
      new CustomEvent('filter-change', {
        detail: {
          key: FILTER_KEYS.PRODUCT_REF,
          values,
          operator: FILTER_OPERATORS.IS,
        },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _add() {
    const value = this._inputValue.trim();
    if (!value || this._atLimit || this.selected.includes(value)) return;
    this._emit([...this.selected, value]);
    this._inputValue = '';
  }

  private _remove(value: string) {
    this._emit(this.selected.filter((v) => v !== value));
  }

  private _clearAll() {
    this._emit([]);
  }

  private _onInput(e: Event) {
    this._inputValue = (e.target as HTMLInputElement).value;
  }

  private _onKeydown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      e.preventDefault();
      this._add();
    }
  }

  render() {
    return html`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${this.selected.length === 0}
          @click=${this._clearAll}
        >Clear all</button>

        <div class="add-row">
          <input
            class="add-input"
            type="text"
            placeholder="Enter product reference..."
            .value=${this._inputValue}
            @input=${this._onInput}
            @keydown=${this._onKeydown}
          />
          <button
            class="add-btn"
            ?disabled=${!this._inputValue.trim() || this._atLimit}
            @click=${this._add}
          >Add</button>
        </div>

        ${this.selected.length > 0
          ? html`
              <div class="filter-section">
                <div class="chips-wrap">
                  ${this.selected.map(
                    (value) => html`
                      <div class="chip">
                        <span class="chip-label">${value}</span>
                        <button class="chip-remove" @click=${() => this._remove(value)}>
                          <ap-icon name="close" .size=${10}></ap-icon>
                        </button>
                      </div>
                    `,
                  )}
                </div>
              </div>
            `
          : nothing}

        ${this._atLimit
          ? html`
              <div class="info-alert">
                <ap-icon name="info" .size=${14}></ap-icon>
                <span>You can add up to ${MAX_PRODUCTS} product references.</span>
              </div>
            `
          : nothing}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ap-filter-product-ref': ApFilterProductRef;
  }
}
