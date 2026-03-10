import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import {
  DATE_FIELD_OPTIONS,
  DATE_RANGE_OPTIONS,
  LICENSE_DATE_RANGE_OPTIONS,
} from './filters.constants';
import { FILTER_KEYS, type DateField, type DateKind } from '../../types/filter.types';
import { resolvePresetToRange } from '../../utils/filter-date';

function toDateStr(d: Date): string {
  return d.toISOString().split('T')[0];
}

@customElement('ap-filter-date')
export class ApFilterDate extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .field-tabs {
      display: flex;
      gap: 0;
      margin-bottom: 12px;
      border: 1px solid var(--ap-border, #e4e4e7);
      border-radius: var(--ap-radius-sm, 6px);
      overflow: hidden;
    }

    .field-tab {
      flex: 1;
      padding: 6px 12px;
      border: none;
      background: none;
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-family: var(--ap-font-family, system-ui, sans-serif);
      cursor: pointer;
      color: var(--ap-foreground, #09090b);
      transition: background 150ms, color 150ms;
    }

    .field-tab:not(:last-child) {
      border-right: 1px solid var(--ap-border, #e4e4e7);
    }

    .field-tab:hover {
      background: var(--ap-muted, #f4f4f5);
    }

    .field-tab.active {
      background: var(--ap-primary-10, oklch(0.65 0.19 258 / 0.1));
      color: var(--ap-primary, oklch(0.65 0.19 258));
    }

    .presets {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-bottom: 12px;
    }

    .preset {
      padding: 4px 10px;
      border: 1px solid var(--ap-border, #e4e4e7);
      border-radius: 9999px;
      background: none;
      font-size: 0.8125rem;
      cursor: pointer;
      color: var(--ap-foreground, #09090b);
      font-family: var(--ap-font-family, system-ui, sans-serif);
      transition: background 150ms, border-color 150ms, color 150ms;
    }

    .preset:hover,
    .preset.active {
      background: var(--ap-primary-10, oklch(0.65 0.19 258 / 0.1));
      border-color: var(--ap-primary, oklch(0.65 0.19 258));
      color: var(--ap-primary, oklch(0.65 0.19 258));
    }

    .date-inputs {
      display: flex;
      gap: 8px;
      align-items: center;
      margin-top: 8px;
    }

    input[type='date'] {
      padding: 6px 8px;
      border: 1px solid var(--ap-border, #e4e4e7);
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, #09090b);
      font-family: var(--ap-font-family, system-ui, sans-serif);
      background: var(--ap-background, #fff);
    }

    input[type='date']:focus {
      outline: 2px solid var(--ap-primary, oklch(0.65 0.19 258));
      outline-offset: -1px;
    }

    .separator {
      color: var(--ap-muted-foreground, #71717a);
      font-size: 0.8125rem;
    }
  `;

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
      this.to = range.to;
    }

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

  private _renderFieldTabs() {
    if (this._isLicenseExpiry) return nothing;

    return html`
      <div class="field-tabs">
        ${DATE_FIELD_OPTIONS.map(
          (opt) => html`
            <button
              class="field-tab ${this.field === opt.value ? 'active' : ''}"
              @click=${() => this._selectField(opt.value as DateField)}
            >
              ${opt.label}
            </button>
          `,
        )}
      </div>
    `;
  }

  private _renderDateInputs() {
    const p = this.preset;
    if (!['before', 'after', 'between', 'specific'].includes(p)) return nothing;

    const fromStr = this.from ? toDateStr(new Date(this.from)) : '';
    const toStr = this.to ? toDateStr(new Date(this.to)) : '';

    if (p === 'specific') {
      return html`
        <div class="date-inputs">
          <input
            type="date"
            .value=${fromStr}
            @change=${(e: Event) => this._handleDateInput('from', e)}
          />
        </div>
      `;
    }

    if (p === 'before') {
      return html`
        <div class="date-inputs">
          <span class="separator">Before</span>
          <input
            type="date"
            .value=${toStr}
            @change=${(e: Event) => this._handleDateInput('to', e)}
          />
        </div>
      `;
    }

    if (p === 'after') {
      return html`
        <div class="date-inputs">
          <span class="separator">After</span>
          <input
            type="date"
            .value=${fromStr}
            @change=${(e: Event) => this._handleDateInput('from', e)}
          />
        </div>
      `;
    }

    // between
    return html`
      <div class="date-inputs">
        <input
          type="date"
          .value=${fromStr}
          @change=${(e: Event) => this._handleDateInput('from', e)}
        />
        <span class="separator">to</span>
        <input
          type="date"
          .value=${toStr}
          @change=${(e: Event) => this._handleDateInput('to', e)}
        />
      </div>
    `;
  }

  render() {
    return html`
      ${this._renderFieldTabs()}
      <div class="presets">
        ${this._rangeOptions.map(
          (opt) => html`
            <button
              class="preset ${this.preset === opt.value ? 'active' : ''}"
              @click=${() => this._selectPreset(opt.value)}
            >
              ${opt.label}
            </button>
          `,
        )}
      </div>
      ${this._renderDateInputs()}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ap-filter-date': ApFilterDate;
  }
}
