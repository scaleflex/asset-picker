import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { FILTER_KEYS, FILTER_OPERATORS } from '../../types/filter.types';

type SizeUnit = 'MB' | 'GB';

/** v5 API uses KB-based sizing; 1 MB = 1000 KB */
const MULTIPLIER: Record<SizeUnit, number> = {
  MB: 1_000,
  GB: 1_000_000,
};

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

    .unit-toggle {
      display: inline-flex;
      border: 1px solid var(--ap-border, #e4e4e7);
      border-radius: var(--ap-radius-sm, 6px);
      overflow: hidden;
      flex-shrink: 0;
    }

    .unit-btn {
      padding: 4px 8px;
      border: none;
      background: none;
      font-size: 0.75rem;
      cursor: pointer;
      color: var(--ap-foreground, #09090b);
      font-family: var(--ap-font-family, system-ui, sans-serif);
      transition: background 150ms, color 150ms;
    }

    .unit-btn:not(:last-child) {
      border-right: 1px solid var(--ap-border, #e4e4e7);
    }

    .unit-btn.active {
      background: var(--ap-primary-10, oklch(0.65 0.19 258 / 0.1));
      color: var(--ap-primary, oklch(0.65 0.19 258));
    }
  `;

  @property({ type: Number }) min = 0;
  @property({ type: Number }) max = 0;

  @state() private _minVal = '';
  @state() private _maxVal = '';
  @state() private _unit: SizeUnit = 'MB';
  @state() private _initialized = false;

  willUpdate(changedProperties: Map<string, unknown>) {
    if (!this._initialized && (changedProperties.has('min') || changedProperties.has('max'))) {
      this._initialized = true;
      if (this.min > 0) this._minVal = String(this.min);
      if (this.max > 0) this._maxVal = String(this.max);
    }
  }

  private _setUnit(unit: SizeUnit) {
    this._unit = unit;
    this._emitChange();
  }

  private _emitChange() {
    const mult = MULTIPLIER[this._unit];
    const minBytes = this._minVal !== '' ? Math.round(parseFloat(this._minVal) * mult) : null;
    const maxBytes = this._maxVal !== '' ? Math.round(parseFloat(this._maxVal) * mult) : null;

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
    this._minVal = (e.target as HTMLInputElement).value;
    this._emitChange();
  }

  private _onMaxInput(e: Event) {
    this._maxVal = (e.target as HTMLInputElement).value;
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
              .value=${this._minVal}
              @change=${this._onMinInput}
            />
            <div class="unit-toggle">
              <button
                class="unit-btn ${this._unit === 'MB' ? 'active' : ''}"
                @click=${() => this._setUnit('MB')}
              >MB</button>
              <button
                class="unit-btn ${this._unit === 'GB' ? 'active' : ''}"
                @click=${() => this._setUnit('GB')}
              >GB</button>
            </div>
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
              .value=${this._maxVal}
              @change=${this._onMaxInput}
            />
            <span class="unit">${this._unit}</span>
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
