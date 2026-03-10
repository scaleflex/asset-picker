import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { FILTER_KEYS, FILTER_OPERATORS } from '../../types/filter.types';

const BYTES_PER_MB = 1_000_000;

@customElement('ap-filter-size')
export class ApFilterSize extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .range-inputs {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .input-group {
      display: flex;
      flex-direction: column;
      gap: 4px;
      flex: 1;
    }

    .input-label {
      font-size: 0.75rem;
      color: var(--ap-muted-foreground, #71717a);
      font-weight: 500;
    }

    .input-wrapper {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    input[type='number'] {
      width: 100%;
      min-width: 0;
      padding: 6px 8px;
      border: 1px solid var(--ap-border, #e4e4e7);
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, #09090b);
      background: var(--ap-background, #fff);
      outline: none;
      transition: border-color 150ms;
      box-sizing: border-box;
      -moz-appearance: textfield;
    }

    input[type='number']::-webkit-inner-spin-button,
    input[type='number']::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    input[type='number']:focus {
      border-color: var(--ap-primary, #3b82f6);
    }

    input[type='number']::placeholder {
      color: var(--ap-muted-foreground, #71717a);
    }

    .unit {
      font-size: 0.8125rem;
      color: var(--ap-muted-foreground, #71717a);
      flex-shrink: 0;
    }

    .separator {
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-muted-foreground, #71717a);
      padding-top: 18px;
    }
  `;

  @property({ type: Number }) min = 0;
  @property({ type: Number }) max = 0;

  @state() private _minMB = '';
  @state() private _maxMB = '';
  @state() private _initialized = false;

  willUpdate(changedProperties: Map<string, unknown>) {
    if (!this._initialized && (changedProperties.has('min') || changedProperties.has('max'))) {
      this._initialized = true;
      if (this.min > 0) this._minMB = String(this.min);
      if (this.max > 0) this._maxMB = String(this.max);
    }
  }

  private _emitChange() {
    const minBytes = this._minMB !== '' ? Math.round(parseFloat(this._minMB) * BYTES_PER_MB) : null;
    const maxBytes = this._maxMB !== '' ? Math.round(parseFloat(this._maxMB) * BYTES_PER_MB) : null;

    let rangeValue: string;
    if (minBytes !== null && maxBytes !== null) {
      rangeValue = `${minBytes}..${maxBytes}`;
    } else if (minBytes !== null) {
      rangeValue = `${minBytes}..`;
    } else if (maxBytes !== null) {
      rangeValue = `..${maxBytes}`;
    } else {
      // Both empty — clear the filter
      this.dispatchEvent(
        new CustomEvent('filter-change', {
          detail: {
            key: FILTER_KEYS.SIZE,
            values: [],
            operator: FILTER_OPERATORS.RANGE,
          },
          bubbles: true,
          composed: true,
        }),
      );
      return;
    }

    this.dispatchEvent(
      new CustomEvent('filter-change', {
        detail: {
          key: FILTER_KEYS.SIZE,
          values: [rangeValue],
          operator: FILTER_OPERATORS.RANGE,
        },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _onMinInput(e: Event) {
    this._minMB = (e.target as HTMLInputElement).value;
    this._emitChange();
  }

  private _onMaxInput(e: Event) {
    this._maxMB = (e.target as HTMLInputElement).value;
    this._emitChange();
  }

  render() {
    return html`
      <div class="range-inputs">
        <div class="input-group">
          <span class="input-label">Min</span>
          <div class="input-wrapper">
            <input
              type="number"
              placeholder="0"
              min="0"
              step="0.1"
              .value=${this._minMB}
              @change=${this._onMinInput}
            />
            <span class="unit">MB</span>
          </div>
        </div>

        <span class="separator">&ndash;</span>

        <div class="input-group">
          <span class="input-label">Max</span>
          <div class="input-wrapper">
            <input
              type="number"
              placeholder="Any"
              min="0"
              step="0.1"
              .value=${this._maxMB}
              @change=${this._onMaxInput}
            />
            <span class="unit">MB</span>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ap-filter-size': ApFilterSize;
  }
}
