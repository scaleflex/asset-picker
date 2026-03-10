import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import {
  METADATA_PREFIX_BY_TYPE,
  METADATA_FIELD_TYPES,
  FILTER_OPERATORS,
  EMPTY_VALUE,
  NOT_EMPTY_VALUE,
  SPECIFIC_VALUE,
  type MetadataModelField,
  type MetadataFieldType,
} from '../../types/filter.types';
import {
  SELECTED_METADATA_FIELDS_LIMIT,
  METADATA_UI_TYPE_MAP,
  TEXT_OPERATOR_OPTIONS,
  NUMBER_OPERATOR_OPTIONS,
  SINGLE_SELECT_OPERATOR_OPTIONS,
  MULTI_SELECT_OPERATOR_OPTIONS,
  BOOLEAN_OPTIONS,
  EMPTY_OPTIONS,
  EMPTY_AND_SPECIFIC_OPTIONS,
  DATE_RANGE_OPTIONS,
  type MetadataFilterUIType,
} from './filters.constants';

// ── Helpers ──────────────────────────────────────────────────────────

function getPrefixedKey(field: MetadataModelField): string {
  const prefix = METADATA_PREFIX_BY_TYPE[field.type] || '';
  return `${prefix}${field.key}`;
}

interface MetadataFilterValue {
  operator?: string;
  values?: string[];
  metadataType?: string;
}

// ── Component ────────────────────────────────────────────────────────

@customElement('ap-filter-metadata')
export class ApFilterMetadata extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    /* ── Field selection panel ─────────────────────────────── */

    .add-field-btn {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 6px 12px;
      border: 1px dashed var(--ap-border, #e4e4e7);
      border-radius: var(--ap-radius-sm, 6px);
      background: none;
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-muted-foreground, #71717a);
      cursor: pointer;
      width: 100%;
      font-family: var(--ap-font-family, system-ui, sans-serif);
      transition: all 150ms;
    }

    .add-field-btn:hover {
      border-color: var(--ap-primary, oklch(0.65 0.19 258));
      color: var(--ap-primary, oklch(0.65 0.19 258));
    }

    .field-selection {
      border: 1px solid var(--ap-border, #e4e4e7);
      border-radius: var(--ap-radius-sm, 6px);
      background: var(--ap-background, #fff);
      margin-bottom: 12px;
    }

    .field-selection-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 12px;
      border-bottom: 1px solid var(--ap-border, #e4e4e7);
    }

    .field-selection-title {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      color: var(--ap-foreground, #09090b);
    }

    .field-selection-close {
      background: none;
      border: none;
      cursor: pointer;
      color: var(--ap-muted-foreground, #71717a);
      padding: 2px;
      display: flex;
      align-items: center;
    }

    .field-selection-close:hover {
      color: var(--ap-foreground, #09090b);
    }

    .field-search {
      width: 100%;
      padding: 8px 12px;
      border: none;
      border-bottom: 1px solid var(--ap-border, #e4e4e7);
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, #09090b);
      background: transparent;
      outline: none;
      box-sizing: border-box;
      font-family: var(--ap-font-family, system-ui, sans-serif);
    }

    .field-search::placeholder {
      color: var(--ap-muted-foreground, #71717a);
    }

    .field-list {
      max-height: 260px;
      overflow-y: auto;
      padding: 4px 0;
    }

    .field-group-label {
      padding: 6px 12px 4px;
      font-size: 0.6875rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--ap-muted-foreground, #71717a);
    }

    .field-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 12px;
      cursor: pointer;
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, #09090b);
      transition: background 100ms;
    }

    .field-item:hover {
      background: var(--ap-muted, #f4f4f5);
    }

    .field-item.disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .field-item.selected {
      color: var(--ap-primary, oklch(0.65 0.19 258));
    }

    .limit-note {
      padding: 8px 12px;
      font-size: 0.75rem;
      color: var(--ap-muted-foreground, #71717a);
      text-align: center;
    }

    .limit-note.at-limit {
      color: var(--ap-destructive, #ef4444);
    }

    .empty-msg {
      padding: 16px 12px;
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-muted-foreground, #71717a);
      text-align: center;
    }

    /* ── Per-field filter sections ─────────────────────────── */

    .field-filters {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .field-section {
      border: 1px solid var(--ap-border, #e4e4e7);
      border-radius: var(--ap-radius-sm, 6px);
      overflow: hidden;
    }

    .field-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 12px;
      background: var(--ap-muted, #f4f4f5);
      cursor: pointer;
      user-select: none;
    }

    .field-header-left {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      color: var(--ap-foreground, #09090b);
    }

    .field-header-actions {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .icon-btn {
      background: none;
      border: none;
      cursor: pointer;
      color: var(--ap-muted-foreground, #71717a);
      padding: 2px;
      display: flex;
      align-items: center;
      border-radius: 4px;
      transition: all 100ms;
    }

    .icon-btn:hover {
      color: var(--ap-foreground, #09090b);
      background: var(--ap-border, #e4e4e7);
    }

    .icon-btn.remove:hover {
      color: var(--ap-destructive, #ef4444);
    }

    .field-body {
      padding: 10px 12px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .field-body.collapsed {
      display: none;
    }

    /* ── Shared controls ───────────────────────────────────── */

    .operator-select {
      padding: 5px 8px;
      border: 1px solid var(--ap-border, #e4e4e7);
      border-radius: var(--ap-radius-sm, 6px);
      font-size: 0.8125rem;
      color: var(--ap-foreground, #09090b);
      background: var(--ap-background, #fff);
      font-family: var(--ap-font-family, system-ui, sans-serif);
      cursor: pointer;
    }

    .text-input, .number-input {
      width: 100%;
      padding: 6px 10px;
      border: 1px solid var(--ap-border, #e4e4e7);
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, #09090b);
      background: var(--ap-background, #fff);
      box-sizing: border-box;
      outline: none;
      font-family: var(--ap-font-family, system-ui, sans-serif);
      transition: border-color 150ms;
    }

    .text-input:focus, .number-input:focus {
      border-color: var(--ap-primary, oklch(0.65 0.19 258));
    }

    .text-input::placeholder, .number-input::placeholder {
      color: var(--ap-muted-foreground, #71717a);
    }

    .range-row {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .range-row .number-input {
      flex: 1;
    }

    .range-separator {
      font-size: 0.8125rem;
      color: var(--ap-muted-foreground, #71717a);
      flex-shrink: 0;
    }

    /* ── Options list (boolean, empty/non-empty, etc.) ──── */

    .options-list {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .option-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 4px 0;
      cursor: pointer;
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, #09090b);
    }

    .radio-dot {
      width: 16px;
      height: 16px;
      border: 2px solid var(--ap-border, #e4e4e7);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      transition: border-color 150ms;
    }

    .radio-dot.active {
      border-color: var(--ap-primary, oklch(0.65 0.19 258));
    }

    .radio-dot-inner {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--ap-primary, oklch(0.65 0.19 258));
      display: none;
    }

    .radio-dot.active .radio-dot-inner {
      display: block;
    }

    /* ── Select dropdown for select-one ─────────────────── */

    .value-select {
      width: 100%;
      padding: 6px 10px;
      border: 1px solid var(--ap-border, #e4e4e7);
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, #09090b);
      background: var(--ap-background, #fff);
      font-family: var(--ap-font-family, system-ui, sans-serif);
      box-sizing: border-box;
      cursor: pointer;
    }

    /* ── Multi-select checkboxes ────────────────────────── */

    .multi-options {
      max-height: 180px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .multi-option {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 4px 0;
      cursor: pointer;
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, #09090b);
    }

    /* ── Tags input ─────────────────────────────────────── */

    .tags-container {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      padding: 6px;
      border: 1px solid var(--ap-border, #e4e4e7);
      border-radius: var(--ap-radius-sm, 6px);
      min-height: 36px;
      align-items: center;
    }

    .tag-chip {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 2px 8px;
      border-radius: 9999px;
      font-size: 0.8125rem;
      background: var(--ap-primary-10, oklch(0.65 0.19 258 / 0.1));
      color: var(--ap-primary, oklch(0.65 0.19 258));
    }

    .tag-chip-remove {
      background: none;
      border: none;
      cursor: pointer;
      color: inherit;
      padding: 0;
      display: flex;
      align-items: center;
      opacity: 0.7;
    }

    .tag-chip-remove:hover {
      opacity: 1;
    }

    .tag-input {
      border: none;
      outline: none;
      font-size: var(--ap-font-size-sm, 0.875rem);
      flex: 1;
      min-width: 80px;
      color: var(--ap-foreground, #09090b);
      background: transparent;
      font-family: var(--ap-font-family, system-ui, sans-serif);
    }

    .tag-input::placeholder {
      color: var(--ap-muted-foreground, #71717a);
    }

    /* ── Geo inputs ─────────────────────────────────────── */

    .geo-row {
      display: flex;
      gap: 8px;
    }

    .geo-field {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .geo-label {
      font-size: 0.6875rem;
      color: var(--ap-muted-foreground, #71717a);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    /* ── Date presets ───────────────────────────────────── */

    .presets {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
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
    }

    .preset:hover, .preset.active {
      background: var(--ap-primary-10, oklch(0.65 0.19 258 / 0.1));
      border-color: var(--ap-primary, oklch(0.65 0.19 258));
      color: var(--ap-primary, oklch(0.65 0.19 258));
    }

    .date-inputs {
      display: flex;
      gap: 8px;
      align-items: center;
      margin-top: 4px;
    }

    input[type="date"] {
      padding: 6px 8px;
      border: 1px solid var(--ap-border, #e4e4e7);
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, #09090b);
      font-family: var(--ap-font-family, system-ui, sans-serif);
    }

    .separator {
      color: var(--ap-muted-foreground, #71717a);
      font-size: 0.8125rem;
    }

    /* ── Divider ────────────────────────────────────────── */

    .divider {
      height: 1px;
      background: var(--ap-border, #e4e4e7);
      margin: 4px 0;
    }

    /* ── Chevron ────────────────────────────────────────── */

    .chevron {
      transition: transform 150ms;
    }

    .chevron.expanded {
      transform: rotate(90deg);
    }
  `;

  // ── Public properties ────────────────────────────────────────────

  @property({ type: Array })
  fields: MetadataModelField[] = [];

  @property({ type: Object })
  appliedFilters: Record<string, MetadataFilterValue> = {};

  @property({ type: Array })
  visibleFields: string[] = [];

  // ── Internal state ───────────────────────────────────────────────

  @state() private _showFieldSelection = false;
  @state() private _fieldSearch = '';
  @state() private _collapsedFields: Set<string> = new Set();
  @state() private _tagInputs: Record<string, string> = {};
  @state() private _datePresets: Record<string, string> = {};
  @state() private _dateFroms: Record<string, string> = {};
  @state() private _dateTos: Record<string, string> = {};
  @state() private _specificModeFields: Set<string> = new Set();

  // ── Computed helpers ─────────────────────────────────────────────

  private get _atFieldLimit(): boolean {
    return this.visibleFields.length >= SELECTED_METADATA_FIELDS_LIMIT;
  }

  private _getField(prefixedKey: string): MetadataModelField | undefined {
    return this.fields.find((f) => getPrefixedKey(f) === prefixedKey);
  }

  private _getUIType(field: MetadataModelField): MetadataFilterUIType {
    return METADATA_UI_TYPE_MAP[field.type];
  }

  private _getApplied(prefixedKey: string): MetadataFilterValue {
    return this.appliedFilters[prefixedKey] || {};
  }

  private _isSpecialValue(values: string[] | undefined): boolean {
    if (!values || values.length !== 1) return false;
    return values[0] === EMPTY_VALUE || values[0] === NOT_EMPTY_VALUE;
  }

  // ── Event dispatchers ────────────────────────────────────────────

  private _emitFilterChange(
    field: MetadataModelField,
    operator: string | undefined,
    values: string[],
  ) {
    const prefixedKey = getPrefixedKey(field);
    this.dispatchEvent(
      new CustomEvent('metadata-filter-change', {
        detail: {
          fieldKey: prefixedKey,
          operator,
          values,
          metadataType: field.type,
        },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _emitFieldToggle(field: MetadataModelField, visible: boolean) {
    const prefixedKey = getPrefixedKey(field);
    this.dispatchEvent(
      new CustomEvent('metadata-field-toggle', {
        detail: { fieldKey: prefixedKey, visible },
        bubbles: true,
        composed: true,
      }),
    );
  }

  // ── Field selection actions ──────────────────────────────────────

  private _openFieldSelection() {
    this._showFieldSelection = true;
    this._fieldSearch = '';
  }

  private _closeFieldSelection() {
    this._showFieldSelection = false;
    this._fieldSearch = '';
  }

  private _addField(field: MetadataModelField) {
    if (this._atFieldLimit) return;
    const prefixedKey = getPrefixedKey(field);
    if (this.visibleFields.includes(prefixedKey)) return;
    this._emitFieldToggle(field, true);
  }

  private _removeField(field: MetadataModelField) {
    this._emitFieldToggle(field, false);
    // Also clear its filter
    this._emitFilterChange(field, undefined, []);
  }

  private _toggleCollapse(prefixedKey: string) {
    const next = new Set(this._collapsedFields);
    if (next.has(prefixedKey)) {
      next.delete(prefixedKey);
    } else {
      next.add(prefixedKey);
    }
    this._collapsedFields = next;
  }

  // ── Operator change ──────────────────────────────────────────────

  private _onOperatorChange(field: MetadataModelField, e: Event) {
    const operator = (e.target as HTMLSelectElement).value;
    const applied = this._getApplied(getPrefixedKey(field));
    const values = applied.values || [];
    this._emitFilterChange(field, operator, values);
  }

  // ── Text filter ──────────────────────────────────────────────────

  private _onTextInput(field: MetadataModelField, e: Event) {
    const value = (e.target as HTMLInputElement).value;
    const applied = this._getApplied(getPrefixedKey(field));
    const operator = applied.operator || TEXT_OPERATOR_OPTIONS[0].value;
    this._emitFilterChange(field, operator, value ? [value] : []);
  }

  // ── Number filter ────────────────────────────────────────────────

  private _onNumberInput(field: MetadataModelField, e: Event, index: number) {
    const value = (e.target as HTMLInputElement).value;
    const prefixedKey = getPrefixedKey(field);
    const applied = this._getApplied(prefixedKey);
    const operator = applied.operator || NUMBER_OPERATOR_OPTIONS[0].value;
    const values = [...(applied.values || [])];

    if (index === 0) {
      values[0] = value;
    } else {
      values[1] = value;
    }

    // Validate: integers for numeric, decimals for decimal2
    const filtered = values.filter((v) => v !== '' && v !== undefined);
    if (filtered.length > 0) {
      const isDecimal = field.type === METADATA_FIELD_TYPES.DECIMAL2;
      const isValid = filtered.every((v) =>
        isDecimal ? !isNaN(parseFloat(v)) : /^-?\d+$/.test(v),
      );
      if (!isValid) return;
    }

    this._emitFilterChange(field, operator, values);
  }

  // ── Boolean filter ───────────────────────────────────────────────

  private _onBooleanSelect(field: MetadataModelField, value: string) {
    const applied = this._getApplied(getPrefixedKey(field));
    const current = applied.values?.[0];
    // Toggle off if same value selected
    if (current === value) {
      this._emitFilterChange(field, undefined, []);
    } else {
      this._emitFilterChange(field, applied.operator, [value]);
    }
  }

  // ── Select-one filter ────────────────────────────────────────────

  private _onSelectOneChange(field: MetadataModelField, e: Event) {
    const value = (e.target as HTMLSelectElement).value;
    const applied = this._getApplied(getPrefixedKey(field));
    const operator = applied.operator || SINGLE_SELECT_OPERATOR_OPTIONS[0].value;
    this._emitFilterChange(field, operator, value ? [value] : []);
  }

  // ── Multi-select filter ──────────────────────────────────────────

  private _onMultiSelectToggle(field: MetadataModelField, value: string) {
    const prefixedKey = getPrefixedKey(field);
    const applied = this._getApplied(prefixedKey);
    const operator = applied.operator || MULTI_SELECT_OPERATOR_OPTIONS[0].value;
    const current = applied.values || [];

    const newValues = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];

    this._emitFilterChange(field, operator, newValues);
  }

  // ── Tags filter ──────────────────────────────────────────────────

  private _onTagKeydown(field: MetadataModelField, e: KeyboardEvent) {
    const prefixedKey = getPrefixedKey(field);
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      this._commitTagInput(field, prefixedKey);
    }
  }

  private _onTagInput(prefixedKey: string, e: Event) {
    const value = (e.target as HTMLInputElement).value;
    // If user types comma, commit immediately
    if (value.includes(',')) {
      const tag = value.replace(/,/g, '').trim();
      if (tag) {
        this._tagInputs = { ...this._tagInputs, [prefixedKey]: tag };
        const field = this._getField(prefixedKey);
        if (field) this._commitTagInput(field, prefixedKey);
      }
      return;
    }
    this._tagInputs = { ...this._tagInputs, [prefixedKey]: value };
  }

  private _commitTagInput(field: MetadataModelField, prefixedKey: string) {
    const tag = (this._tagInputs[prefixedKey] || '').trim();
    if (!tag) return;

    const applied = this._getApplied(prefixedKey);
    const operator = applied.operator || MULTI_SELECT_OPERATOR_OPTIONS[0].value;
    const current = applied.values || [];

    if (!current.includes(tag)) {
      this._emitFilterChange(field, operator, [...current, tag]);
    }

    this._tagInputs = { ...this._tagInputs, [prefixedKey]: '' };
  }

  private _removeTag(field: MetadataModelField, tag: string) {
    const prefixedKey = getPrefixedKey(field);
    const applied = this._getApplied(prefixedKey);
    const operator = applied.operator || MULTI_SELECT_OPERATOR_OPTIONS[0].value;
    const current = applied.values || [];
    this._emitFilterChange(
      field,
      operator,
      current.filter((v) => v !== tag),
    );
  }

  // ── Date filter ──────────────────────────────────────────────────

  private _onDatePreset(field: MetadataModelField, preset: string) {
    const prefixedKey = getPrefixedKey(field);
    this._datePresets = { ...this._datePresets, [prefixedKey]: preset };

    // Presets requiring manual date input
    if (['before', 'after', 'between'].includes(preset)) {
      this._dateFroms = { ...this._dateFroms, [prefixedKey]: '' };
      this._dateTos = { ...this._dateTos, [prefixedKey]: '' };
      return;
    }

    // Empty / non-empty
    if (preset === 'empty' || preset === 'non-empty') {
      this._emitFilterChange(field, undefined, [preset]);
      return;
    }

    // Compute date ranges
    const now = new Date();
    let from = '';
    let to = '';

    switch (preset) {
      case 'today': {
        const d = new Date(now);
        d.setHours(0, 0, 0, 0);
        from = d.toISOString();
        to = now.toISOString();
        break;
      }
      case 'last_week': {
        const weekStart = new Date(now);
        const day = weekStart.getDay();
        weekStart.setDate(weekStart.getDate() - (day === 0 ? 6 : day - 1));
        weekStart.setHours(0, 0, 0, 0);
        const prevWeekStart = new Date(weekStart);
        prevWeekStart.setDate(prevWeekStart.getDate() - 7);
        from = prevWeekStart.toISOString();
        to = weekStart.toISOString();
        break;
      }
      case 'last_month': {
        const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
        const prevMonthStart = new Date(monthStart);
        prevMonthStart.setMonth(prevMonthStart.getMonth() - 1);
        from = prevMonthStart.toISOString();
        to = monthStart.toISOString();
        break;
      }
      case 'last_year': {
        const yearStart = new Date(now.getFullYear(), 0, 1);
        const prevYearStart = new Date(yearStart);
        prevYearStart.setFullYear(prevYearStart.getFullYear() - 1);
        from = prevYearStart.toISOString();
        to = yearStart.toISOString();
        break;
      }
    }

    if (from && to) {
      this._dateFroms = { ...this._dateFroms, [prefixedKey]: from };
      this._dateTos = { ...this._dateTos, [prefixedKey]: to };
      this._emitFilterChange(field, '..', [from, to]);
    }
  }

  private _onDateInput(
    field: MetadataModelField,
    which: 'from' | 'to',
    e: Event,
  ) {
    const value = (e.target as HTMLInputElement).value;
    const prefixedKey = getPrefixedKey(field);
    const preset = this._datePresets[prefixedKey] || '';
    const isoValue = value ? new Date(value + 'T00:00:00').toISOString() : '';

    if (which === 'from') {
      this._dateFroms = { ...this._dateFroms, [prefixedKey]: isoValue };
    } else {
      this._dateTos = { ...this._dateTos, [prefixedKey]: isoValue };
    }

    let from = this._dateFroms[prefixedKey] || '';
    let to = this._dateTos[prefixedKey] || '';

    if (preset === 'after' && from) {
      to = new Date().toISOString();
      this._dateTos = { ...this._dateTos, [prefixedKey]: to };
    }
    if (preset === 'before' && to) {
      from = new Date(0).toISOString();
      this._dateFroms = { ...this._dateFroms, [prefixedKey]: from };
    }

    if (from && to) {
      this._emitFilterChange(field, '..', [from, to]);
    }
  }

  // ── Geo filter ───────────────────────────────────────────────────

  private _onGeoInput(field: MetadataModelField) {
    const prefixedKey = getPrefixedKey(field);
    const latEl = this.shadowRoot?.querySelector<HTMLInputElement>(
      `[data-geo-lat="${prefixedKey}"]`,
    );
    const lngEl = this.shadowRoot?.querySelector<HTMLInputElement>(
      `[data-geo-lng="${prefixedKey}"]`,
    );
    const radiusEl = this.shadowRoot?.querySelector<HTMLInputElement>(
      `[data-geo-radius="${prefixedKey}"]`,
    );

    const lat = latEl?.value || '';
    const lng = lngEl?.value || '';
    const radius = radiusEl?.value || '';

    if (!lat && !lng) {
      this._emitFilterChange(field, undefined, []);
      return;
    }

    let value = `${lat},${lng}`;
    if (radius) {
      value += `..${radius}`;
    }

    this._emitFilterChange(field, FILTER_OPERATORS.IS, [value]);
  }

  // ── Empty/non-empty option click ─────────────────────────────────

  private _onEmptyOption(field: MetadataModelField, value: string) {
    const applied = this._getApplied(getPrefixedKey(field));
    const current = applied.values?.[0];
    if (current === value) {
      // Toggle off special value, restore operator
      this._emitFilterChange(field, applied.operator, []);
    } else {
      this._emitFilterChange(field, applied.operator, [value]);
    }
  }

  // ── Render: Field selection panel ────────────────────────────────

  private _renderFieldSelection() {
    const search = this._fieldSearch.toLowerCase();
    const filtered = this.fields.filter((f) =>
      f.label.toLowerCase().includes(search),
    );

    const rootFields = filtered.filter(
      (f) => !f.group || f.group === 'root',
    );
    const productFields = filtered.filter((f) => f.group === 'product');

    const renderGroup = (label: string, fields: MetadataModelField[]) => {
      if (fields.length === 0) return nothing;
      return html`
        <div class="field-group-label">${label}</div>
        ${fields.map((field) => {
          const prefixedKey = getPrefixedKey(field);
          const isSelected = this.visibleFields.includes(prefixedKey);
          const isDisabled = !isSelected && this._atFieldLimit;
          return html`
            <div
              class="field-item ${isSelected ? 'selected' : ''} ${isDisabled ? 'disabled' : ''}"
              @click=${() => !isDisabled && !isSelected && this._addField(field)}
            >
              ${isSelected
                ? html`<ap-icon name="check" .size=${14}></ap-icon>`
                : nothing}
              <span>${field.label}</span>
            </div>
          `;
        })}
      `;
    };

    return html`
      <div class="field-selection">
        <div class="field-selection-header">
          <span class="field-selection-title">Add metadata field</span>
          <button
            class="field-selection-close"
            @click=${this._closeFieldSelection}
          >
            <ap-icon name="close" .size=${16}></ap-icon>
          </button>
        </div>
        <input
          class="field-search"
          type="text"
          placeholder="Search fields..."
          .value=${this._fieldSearch}
          @input=${(e: Event) => {
            this._fieldSearch = (e.target as HTMLInputElement).value;
          }}
        />
        <div class="field-list">
          ${filtered.length === 0
            ? html`<div class="empty-msg">No fields found</div>`
            : html`
                ${renderGroup('Root fields', rootFields)}
                ${renderGroup('Product fields', productFields)}
              `}
        </div>
        ${this.visibleFields.length > 0
          ? html`
              <div
                class="limit-note ${this._atFieldLimit ? 'at-limit' : ''}"
              >
                ${this.visibleFields.length} / ${SELECTED_METADATA_FIELDS_LIMIT} fields selected
              </div>
            `
          : nothing}
      </div>
    `;
  }

  // ── Render: Operator selector ────────────────────────────────────

  private _renderOperator(
    field: MetadataModelField,
    options: { label: string; value: string }[],
  ) {
    const applied = this._getApplied(getPrefixedKey(field));
    const current = applied.operator || options[0].value;
    return html`
      <select
        class="operator-select"
        .value=${current}
        @change=${(e: Event) => this._onOperatorChange(field, e)}
      >
        ${options.map(
          (opt) =>
            html`<option value=${opt.value} ?selected=${current === opt.value}>
              ${opt.label}
            </option>`,
        )}
      </select>
    `;
  }

  // ── Render: Empty/non-empty options ──────────────────────────────

  private _renderEmptyOptions(field: MetadataModelField) {
    const applied = this._getApplied(getPrefixedKey(field));
    const currentValue = applied.values?.[0];
    return html`
      <div class="divider"></div>
      <div class="options-list">
        ${EMPTY_OPTIONS.map(
          (opt) => html`
            <div
              class="option-item"
              @click=${() => this._onEmptyOption(field, opt.value)}
            >
              <div class="radio-dot ${currentValue === opt.value ? 'active' : ''}">
                <div class="radio-dot-inner"></div>
              </div>
              <span>${opt.label}</span>
            </div>
          `,
        )}
      </div>
    `;
  }

  // ── Render: Text filter ──────────────────────────────────────────

  private _renderTextFilter(field: MetadataModelField) {
    const applied = this._getApplied(getPrefixedKey(field));
    const isSpecial = this._isSpecialValue(applied.values);
    const textValue = isSpecial ? '' : (applied.values?.[0] || '');

    return html`
      ${this._renderOperator(field, TEXT_OPERATOR_OPTIONS)}
      <input
        class="text-input"
        type="text"
        placeholder="Enter value..."
        .value=${textValue}
        @change=${(e: Event) => this._onTextInput(field, e)}
      />
      ${this._renderEmptyOptions(field)}
    `;
  }

  // ── Render: Number filter ────────────────────────────────────────

  private _renderNumberFilter(field: MetadataModelField) {
    const prefixedKey = getPrefixedKey(field);
    const applied = this._getApplied(prefixedKey);
    const operator = applied.operator || NUMBER_OPERATOR_OPTIONS[0].value;
    const isSpecial = this._isSpecialValue(applied.values);
    const isRange = operator === '..';
    const isDecimal = field.type === METADATA_FIELD_TYPES.DECIMAL2;
    const step = isDecimal ? '0.01' : '1';
    const placeholder = isDecimal ? '0.00' : '0';

    const val0 = isSpecial ? '' : (applied.values?.[0] || '');
    const val1 = isSpecial ? '' : (applied.values?.[1] || '');

    return html`
      ${this._renderOperator(field, NUMBER_OPERATOR_OPTIONS)}
      ${isRange
        ? html`
            <div class="range-row">
              <input
                class="number-input"
                type="number"
                step=${step}
                placeholder=${placeholder}
                .value=${val0}
                @change=${(e: Event) => this._onNumberInput(field, e, 0)}
              />
              <span class="range-separator">to</span>
              <input
                class="number-input"
                type="number"
                step=${step}
                placeholder=${placeholder}
                .value=${val1}
                @change=${(e: Event) => this._onNumberInput(field, e, 1)}
              />
            </div>
          `
        : html`
            <input
              class="number-input"
              type="number"
              step=${step}
              placeholder=${placeholder}
              .value=${val0}
              @change=${(e: Event) => this._onNumberInput(field, e, 0)}
            />
          `}
      ${this._renderEmptyOptions(field)}
    `;
  }

  // ── Render: Boolean filter ───────────────────────────────────────

  private _renderBooleanFilter(field: MetadataModelField) {
    const applied = this._getApplied(getPrefixedKey(field));
    const currentValue = applied.values?.[0];

    return html`
      <div class="options-list">
        ${BOOLEAN_OPTIONS.map(
          (opt) => html`
            <div
              class="option-item"
              @click=${() => this._onBooleanSelect(field, opt.value)}
            >
              <div class="radio-dot ${currentValue === opt.value ? 'active' : ''}">
                <div class="radio-dot-inner"></div>
              </div>
              <span>${opt.label}</span>
            </div>
          `,
        )}
      </div>
    `;
  }

  // ── Render: Select-one filter ────────────────────────────────────

  private _renderSelectOneFilter(field: MetadataModelField) {
    const prefixedKey = getPrefixedKey(field);
    const applied = this._getApplied(prefixedKey);
    const isSpecial = this._isSpecialValue(applied.values);
    const isSpecificMode = this._specificModeFields.has(prefixedKey);
    const currentValue = isSpecial ? '' : (applied.values?.[0] || '');
    const options = field.possible_values || [];

    return html`
      ${this._renderOperator(field, SINGLE_SELECT_OPERATOR_OPTIONS)}
      ${isSpecificMode
        ? html`
          <input
            class="text-input"
            type="text"
            placeholder="Enter custom value..."
            .value=${currentValue}
            @change=${(e: Event) => {
              const v = (e.target as HTMLInputElement).value;
              const operator = applied.operator || SINGLE_SELECT_OPERATOR_OPTIONS[0].value;
              this._emitFilterChange(field, operator, v ? [v] : []);
            }}
          />
        `
        : html`
          <select
            class="value-select"
            .value=${currentValue}
            @change=${(e: Event) => this._onSelectOneChange(field, e)}
          >
            <option value="">Select...</option>
            ${options.map(
              (opt) =>
                html`<option value=${opt.api_value} ?selected=${currentValue === opt.api_value}>
                  ${opt.label}
                </option>`,
            )}
          </select>
        `
      }
      <div class="divider"></div>
      <div class="options-list">
        ${EMPTY_AND_SPECIFIC_OPTIONS.map(
          (opt) => html`
            <div
              class="option-item"
              @click=${() => {
                if (opt.value === SPECIFIC_VALUE) {
                  const newSet = new Set(this._specificModeFields);
                  newSet.add(prefixedKey);
                  this._specificModeFields = newSet;
                } else {
                  // Exit specific mode when selecting empty/non-empty
                  if (this._specificModeFields.has(prefixedKey)) {
                    const newSet = new Set(this._specificModeFields);
                    newSet.delete(prefixedKey);
                    this._specificModeFields = newSet;
                  }
                  this._onEmptyOption(field, opt.value);
                }
              }}
            >
              <div class="radio-dot ${
                (opt.value === SPECIFIC_VALUE && isSpecificMode) ||
                (opt.value !== SPECIFIC_VALUE && applied.values?.[0] === opt.value)
                  ? 'active' : ''
              }">
                <div class="radio-dot-inner"></div>
              </div>
              <span>${opt.label}</span>
            </div>
          `,
        )}
      </div>
    `;
  }

  // ── Render: Multi-select filter ──────────────────────────────────

  private _renderMultiSelectFilter(field: MetadataModelField) {
    const applied = this._getApplied(getPrefixedKey(field));
    const isSpecial = this._isSpecialValue(applied.values);
    const selectedValues = isSpecial ? [] : (applied.values || []);
    const options = field.possible_values || [];

    return html`
      ${this._renderOperator(field, MULTI_SELECT_OPERATOR_OPTIONS)}
      <div class="multi-options">
        ${options.map(
          (opt) => html`
            <div
              class="multi-option"
              @click=${() => this._onMultiSelectToggle(field, opt.api_value)}
            >
              <ap-checkbox
                ?checked=${selectedValues.includes(opt.api_value)}
              ></ap-checkbox>
              <span>${opt.label}</span>
            </div>
          `,
        )}
      </div>
      ${this._renderEmptyOptions(field)}
    `;
  }

  // ── Render: Tags filter ──────────────────────────────────────────

  private _renderTagsFilter(field: MetadataModelField) {
    const prefixedKey = getPrefixedKey(field);
    const applied = this._getApplied(prefixedKey);
    const isSpecial = this._isSpecialValue(applied.values);
    const tags = isSpecial ? [] : (applied.values || []);
    const inputValue = this._tagInputs[prefixedKey] || '';

    return html`
      ${this._renderOperator(field, MULTI_SELECT_OPERATOR_OPTIONS)}
      <div class="tags-container">
        ${tags.map(
          (tag) => html`
            <span class="tag-chip">
              ${tag}
              <button
                class="tag-chip-remove"
                @click=${() => this._removeTag(field, tag)}
              >
                <ap-icon name="close" .size=${12}></ap-icon>
              </button>
            </span>
          `,
        )}
        <input
          class="tag-input"
          type="text"
          placeholder=${tags.length > 0 ? 'Add tag...' : 'Type and press Enter...'}
          .value=${inputValue}
          @input=${(e: Event) => this._onTagInput(prefixedKey, e)}
          @keydown=${(e: KeyboardEvent) => this._onTagKeydown(field, e)}
        />
      </div>
      ${this._renderEmptyOptions(field)}
    `;
  }

  // ── Render: Date filter ──────────────────────────────────────────

  private _renderDateFilter(field: MetadataModelField) {
    const prefixedKey = getPrefixedKey(field);
    const preset = this._datePresets[prefixedKey] || '';
    const applied = this._getApplied(prefixedKey);

    // Sync with applied values for empty/non-empty
    const isSpecial = this._isSpecialValue(applied.values);
    const activePreset = isSpecial ? (applied.values?.[0] || '') : preset;

    const presetOptions = [
      ...DATE_RANGE_OPTIONS,
      { value: 'empty', label: 'Empty' },
      { value: 'non-empty', label: 'Not empty' },
    ];

    const fromStr = this._dateFroms[prefixedKey]
      ? new Date(this._dateFroms[prefixedKey]).toISOString().split('T')[0]
      : '';
    const toStr = this._dateTos[prefixedKey]
      ? new Date(this._dateTos[prefixedKey]).toISOString().split('T')[0]
      : '';

    const needsDateInput = ['before', 'after', 'between'].includes(activePreset);

    return html`
      <div class="presets">
        ${presetOptions.map(
          (p) => html`
            <button
              class="preset ${activePreset === p.value ? 'active' : ''}"
              @click=${() => this._onDatePreset(field, p.value)}
            >
              ${p.label}
            </button>
          `,
        )}
      </div>
      ${needsDateInput
        ? html`
            <div class="date-inputs">
              ${activePreset === 'before'
                ? html`
                    <span class="separator">Before</span>
                    <input
                      type="date"
                      .value=${toStr}
                      @change=${(e: Event) => this._onDateInput(field, 'to', e)}
                    />
                  `
                : activePreset === 'after'
                  ? html`
                      <span class="separator">After</span>
                      <input
                        type="date"
                        .value=${fromStr}
                        @change=${(e: Event) =>
                          this._onDateInput(field, 'from', e)}
                      />
                    `
                  : html`
                      <input
                        type="date"
                        .value=${fromStr}
                        @change=${(e: Event) =>
                          this._onDateInput(field, 'from', e)}
                      />
                      <span class="separator">to</span>
                      <input
                        type="date"
                        .value=${toStr}
                        @change=${(e: Event) =>
                          this._onDateInput(field, 'to', e)}
                      />
                    `}
            </div>
          `
        : nothing}
    `;
  }

  // ── Render: Geo filter ───────────────────────────────────────────

  private _renderGeoFilter(field: MetadataModelField) {
    const prefixedKey = getPrefixedKey(field);
    const applied = this._getApplied(prefixedKey);
    const isSpecial = this._isSpecialValue(applied.values);

    // Parse "lat,lng" or "lat,lng..radius"
    let lat = '';
    let lng = '';
    let radius = '';
    if (!isSpecial && applied.values?.[0]) {
      const val = applied.values[0];
      const [coords, rad] = val.split('..');
      const [la, ln] = coords.split(',');
      lat = la || '';
      lng = ln || '';
      radius = rad || '';
    }

    return html`
      <div class="geo-row">
        <div class="geo-field">
          <span class="geo-label">Latitude</span>
          <input
            class="text-input"
            type="text"
            placeholder="e.g. 48.8566"
            data-geo-lat=${prefixedKey}
            .value=${lat}
            @change=${() => this._onGeoInput(field)}
          />
        </div>
        <div class="geo-field">
          <span class="geo-label">Longitude</span>
          <input
            class="text-input"
            type="text"
            placeholder="e.g. 2.3522"
            data-geo-lng=${prefixedKey}
            .value=${lng}
            @change=${() => this._onGeoInput(field)}
          />
        </div>
      </div>
      <div class="geo-field">
        <span class="geo-label">Radius (optional)</span>
        <input
          class="number-input"
          type="number"
          placeholder="km"
          data-geo-radius=${prefixedKey}
          .value=${radius}
          @change=${() => this._onGeoInput(field)}
        />
      </div>
      ${this._renderEmptyOptions(field)}
    `;
  }

  // ── Render: Attachment filter ────────────────────────────────────

  private _renderAttachmentFilter(field: MetadataModelField) {
    const applied = this._getApplied(getPrefixedKey(field));
    const currentValue = applied.values?.[0];

    return html`
      <div class="options-list">
        ${EMPTY_OPTIONS.map(
          (opt) => html`
            <div
              class="option-item"
              @click=${() => this._onEmptyOption(field, opt.value)}
            >
              <div class="radio-dot ${currentValue === opt.value ? 'active' : ''}">
                <div class="radio-dot-inner"></div>
              </div>
              <span>${opt.label}</span>
            </div>
          `,
        )}
      </div>
    `;
  }

  // ── Render: Face matcher (integer-list with slug face_matcher) ──

  private _renderFaceMatcherFilter(field: MetadataModelField) {
    const prefixedKey = getPrefixedKey(field);
    const applied = this._getApplied(prefixedKey);
    const values = applied.values || [];
    const operator = applied.operator || FILTER_OPERATORS.IS;

    return html`
      <div class="field-filter">
        <ap-dropdown
          variant="borderless"
          .value=${operator}
          .options=${SINGLE_SELECT_OPERATOR_OPTIONS}
          @ap-change=${(e: CustomEvent) => this._emitFilterChange(field, e.detail.value, values)}
        ></ap-dropdown>
        <input
          class="text-input"
          type="text"
          placeholder="Search faces..."
          .value=${values.join(', ')}
          @change=${(e: Event) => {
            const raw = (e.target as HTMLInputElement).value;
            const newValues = raw.split(',').map((v) => v.trim()).filter(Boolean);
            this._emitFilterChange(field, operator, newValues);
          }}
        />
      </div>
      ${this._renderEmptyOptions(field)}
    `;
  }

  // ── Render: Per-field filter control dispatcher ──────────────────

  private _renderFieldControl(field: MetadataModelField) {
    const uiType = this._getUIType(field);

    switch (uiType) {
      case 'text':
        return this._renderTextFilter(field);
      case 'number':
        return this._renderNumberFilter(field);
      case 'boolean':
        return this._renderBooleanFilter(field);
      case 'select-one':
        return this._renderSelectOneFilter(field);
      case 'multi-select':
        return this._renderMultiSelectFilter(field);
      case 'tags':
        return this._renderTagsFilter(field);
      case 'date':
        return this._renderDateFilter(field);
      case 'geo':
        return this._renderGeoFilter(field);
      case 'attachment':
        // integer-list with slug 'face_matcher' gets autocomplete UI
        if (field.type === METADATA_FIELD_TYPES.INTEGER_LIST && field.slug === 'face_matcher') {
          return this._renderFaceMatcherFilter(field);
        }
        return this._renderAttachmentFilter(field);
      default:
        return nothing;
    }
  }

  // ── Render: Single field section ─────────────────────────────────

  private _renderFieldSection(prefixedKey: string) {
    const field = this._getField(prefixedKey);
    if (!field) return nothing;

    const isCollapsed = this._collapsedFields.has(prefixedKey);

    return html`
      <div class="field-section">
        <div
          class="field-header"
          @click=${() => this._toggleCollapse(prefixedKey)}
        >
          <div class="field-header-left">
            <ap-icon
              class="chevron ${isCollapsed ? '' : 'expanded'}"
              name="chevron-right"
              .size=${14}
            ></ap-icon>
            <span>${field.label}</span>
          </div>
          <div class="field-header-actions">
            <button
              class="icon-btn remove"
              @click=${(e: Event) => {
                e.stopPropagation();
                this._removeField(field);
              }}
              title="Remove field"
            >
              <ap-icon name="close" .size=${14}></ap-icon>
            </button>
          </div>
        </div>
        <div class="field-body ${isCollapsed ? 'collapsed' : ''}">
          ${this._renderFieldControl(field)}
        </div>
      </div>
    `;
  }

  // ── Main render ──────────────────────────────────────────────────

  render() {
    const hasVisibleFields = this.visibleFields.length > 0;

    return html`
      ${this._showFieldSelection || !hasVisibleFields
        ? this._renderFieldSelection()
        : nothing}

      ${hasVisibleFields
        ? html`
            <div class="field-filters">
              ${this.visibleFields.map((key) => this._renderFieldSection(key))}
            </div>

            ${!this._showFieldSelection && !this._atFieldLimit
              ? html`
                  <button
                    class="add-field-btn"
                    style="margin-top: 8px"
                    @click=${this._openFieldSelection}
                  >
                    <ap-icon name="filter" .size=${14}></ap-icon>
                    Add field
                  </button>
                `
              : nothing}
          `
        : nothing}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ap-filter-metadata': ApFilterMetadata;
  }
}
