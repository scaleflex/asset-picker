import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import {
  DATE_FIELD_OPTIONS,
  DATE_RANGE_OPTIONS,
  LICENSE_DATE_RANGE_OPTIONS,
} from './filters.constants';
import { filterPopoverStyles } from './shared/filter-styles';
import { FILTER_KEYS, type DateField, type DateKind } from '../../types/filter.types';
import { resolvePresetToRange } from '../../utils/filter-date';

function toDateStr(d: Date): string {
  return d.toISOString().split('T')[0];
}

@customElement('ap-filter-date')
export class ApFilterDate extends LitElement {
  static styles = [filterPopoverStyles, css`
    .date-inputs {
      margin-top: 4px;
    }
  `];

  @property() filterKey: string = FILTER_KEYS.DATE;
  @property() field: DateField = 'created';
  @property() kind: DateKind | null = null;
  @property() preset = '';
  @property() from = '';
  @property() to = '';

  private get _isLicenseExpiry(): boolean {
    return this.filterKey === FILTER_KEYS.LICENSE_EXPIRY;
  }

  private get _rangeOptions() {
    return this._isLicenseExpiry ? LICENSE_DATE_RANGE_OPTIONS : DATE_RANGE_OPTIONS;
  }

  private get _todayStr(): string {
    return toDateStr(new Date());
  }

  private get _hasFilter(): boolean {
    return !!(this.kind || this.preset || this.from || this.to);
  }

  /** Determine the DateKind from a preset/option value */
  private _kindFromValue(value: string): DateKind {
    if (['before', 'after', 'between', 'specific'].includes(value)) {
      return value as DateKind;
    }
    return 'preset';
  }

  private _selectField(field: DateField) {
    this.field = field;
    this._dispatchChange();
  }

  private _selectPreset(value: string) {
    // Deselected via clearable radio — clear filter
    if (!value) {
      this._clearAll();
      return;
    }
    const kind = this._kindFromValue(value);
    this.kind = kind;
    this.preset = value;

    // Manual-input kinds: clear dates and wait for user input
    if (['before', 'after', 'between', 'specific'].includes(value)) {
      this.from = '';
      this.to = '';
      this.requestUpdate();
      return;
    }

    // Resolve preset to date range
    const range = resolvePresetToRange(value);
    if (range) {
      this.from = range.from;
      this.to = range.to ?? '';
    }

    this._dispatchChange();
  }

  private _clearAll() {
    this.field = 'created';
    this.kind = null;
    this.preset = '';
    this.from = '';
    this.to = '';
    this._dispatchChange();
  }

  private _dispatchChange() {
    this.dispatchEvent(
      new CustomEvent('filter-change', {
        detail: {
          key: this.filterKey,
          values: {
            field: this.field,
            kind: this.kind,
            preset: this.preset,
            from: this.from,
            to: this.to,
          },
        },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _handleDateInput(inputField: 'from' | 'to', e: Event) {
    const value = (e.target as HTMLInputElement).value;
    const isoValue = value ? new Date(value + 'T00:00:00').toISOString() : '';

    if (inputField === 'from') this.from = isoValue;
    else this.to = isoValue;

    // For 'specific', set both from and to to the same day
    if (this.preset === 'specific' && inputField === 'from' && isoValue) {
      const endOfDay = new Date(value + 'T23:59:59');
      this.to = endOfDay.toISOString();
    }

    // For 'after', only from matters (to = now)
    if (this.preset === 'after' && inputField === 'from' && isoValue) {
      this.to = new Date().toISOString();
    }

    // For 'before', only to matters (from = epoch)
    if (this.preset === 'before' && inputField === 'to' && isoValue) {
      this.from = new Date(0).toISOString();
    }

    this._dispatchChange();
  }

  private _renderDateTypeSection() {
    if (this._isLicenseExpiry) return nothing;

    return html`
      <div class="filter-section">
        <span class="section-label">Date type</span>
        <ap-radio-group
          .options=${DATE_FIELD_OPTIONS}
          .value=${this.field}
          @ap-change=${(e: CustomEvent) => this._selectField(e.detail.value as DateField)}
        ></ap-radio-group>
      </div>
    `;
  }

  private _renderRangeSection() {
    return html`
      <div class="filter-section">
        <span class="section-label">Range</span>
        <ap-radio-group
          clearable
          columns="2"
          .options=${this._rangeOptions}
          .value=${this.preset}
          @ap-change=${(e: CustomEvent) => this._selectPreset(e.detail.value)}
        ></ap-radio-group>
      </div>
    `;
  }

  private _renderDateInputs() {
    const p = this.preset;
    if (!['before', 'after', 'between', 'specific'].includes(p)) return nothing;

    const fromStr = this.from ? toDateStr(new Date(this.from)) : '';
    const toStr = this.to ? toDateStr(new Date(this.to)) : '';
    const today = this._todayStr;

    if (p === 'specific') {
      return html`
        <div class="filter-section date-inputs">
          <div>
            <span class="input-label">Date</span>
            <input
              type="date"
              class="filter-input"
              max=${today}
              .value=${fromStr}
              @change=${(e: Event) => this._handleDateInput('from', e)}
            />
          </div>
        </div>
      `;
    }

    if (p === 'before') {
      return html`
        <div class="filter-section date-inputs">
          <div>
            <span class="input-label">End date</span>
            <input
              type="date"
              class="filter-input"
              max=${today}
              .value=${toStr}
              @change=${(e: Event) => this._handleDateInput('to', e)}
            />
          </div>
        </div>
      `;
    }

    if (p === 'after') {
      return html`
        <div class="filter-section date-inputs">
          <div>
            <span class="input-label">Start date</span>
            <input
              type="date"
              class="filter-input"
              max=${today}
              .value=${fromStr}
              @change=${(e: Event) => this._handleDateInput('from', e)}
            />
          </div>
        </div>
      `;
    }

    // between
    return html`
      <div class="filter-section date-inputs">
        <div class="grid-2">
          <div>
            <span class="input-label">Start date</span>
            <input
              type="date"
              class="filter-input"
              max=${toStr || today}
              .value=${fromStr}
              @change=${(e: Event) => this._handleDateInput('from', e)}
            />
          </div>
          <div>
            <span class="input-label">End date</span>
            <input
              type="date"
              class="filter-input"
              min=${fromStr}
              max=${today}
              .value=${toStr}
              @change=${(e: Event) => this._handleDateInput('to', e)}
            />
          </div>
        </div>
      </div>
    `;
  }

  render() {
    return html`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!this._hasFilter}
          @click=${() => this._clearAll()}
        >Clear all</button>
        ${this._renderDateTypeSection()}
        ${this._renderRangeSection()}
        ${this._renderDateInputs()}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ap-filter-date': ApFilterDate;
  }
}
