import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { FILTER_KEYS, FILTER_OPERATORS } from '../../types/filter.types';
import { filterPopoverStyles } from './shared/filter-styles';
import type { DropdownOption } from '../shared/ap-dropdown';

type SizeUnit = 'KB' | 'MB' | 'GB';

/** v5 API expects MB; 1 GB = 1000 MB, 1 KB = 1/1000 MB */
const MULTIPLIER: Record<SizeUnit, number> = {
  KB: 1 / 1_000,
  MB: 1,
  GB: 1_000,
};

const UNIT_OPTIONS: DropdownOption[] = [
  // KB disabled until backend supports sub-MB precision
  { value: 'MB', label: 'MB' },
  { value: 'GB', label: 'GB' },
];

@customElement('ap-filter-size')
export class ApFilterSize extends LitElement {
  static styles = [
    filterPopoverStyles,
    css`
      /* Hide number input spinners */
      .filter-input[type='number']::-webkit-inner-spin-button,
      .filter-input[type='number']::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      .filter-input[type='number'] {
        -moz-appearance: textfield;
      }
      .size-grid {
        display: grid;
        grid-template-columns: auto auto 1fr;
        gap: 12px;
      }
    `,
  ];

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

  private get _hasFilter(): boolean {
    return this._minVal !== '' || this._maxVal !== '';
  }

  private _clearAll() {
    this._minVal = '';
    this._maxVal = '';
    this._emitChange();
  }

  private _setUnit(e: CustomEvent) {
    this._unit = e.detail.value as SizeUnit;
    this._emitChange();
  }

  private _emitChange() {
    const mult = MULTIPLIER[this._unit];
    const minMB = this._minVal !== '' ? parseFloat((parseFloat(this._minVal) * mult).toFixed(2)).toString() : null;
    const maxMB = this._maxVal !== '' ? parseFloat((parseFloat(this._maxVal) * mult).toFixed(2)).toString() : null;

    let rangeValue: string;
    if (minMB !== null && maxMB !== null) {
      rangeValue = `${minMB}..${maxMB}`;
    } else if (minMB !== null) {
      rangeValue = `${minMB}..`;
    } else if (maxMB !== null) {
      rangeValue = `..${maxMB}`;
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
      <div class="filter-content">
        <span class="section-label">Size</span>
        <button
          class="clear-btn"
          ?disabled=${!this._hasFilter}
          @click=${this._clearAll}
        >Clear all</button>

        <div class="size-grid">
          <div>
            <span class="input-label">From</span>
            <input
              class="filter-input"
              type="number"
              placeholder="0"
              min="0"
              step="0.1"
              .value=${this._minVal}
              @change=${this._onMinInput}
            />
          </div>
          <div>
            <span class="input-label">To</span>
            <input
              class="filter-input"
              type="number"
              placeholder="Any"
              min="0"
              step="0.1"
              .value=${this._maxVal}
              @change=${this._onMaxInput}
            />
          </div>
          <div>
            <span class="input-label">Unit</span>
            <ap-dropdown
              .options=${UNIT_OPTIONS}
              .value=${this._unit}
              @ap-change=${this._setUnit}
            ></ap-dropdown>
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
