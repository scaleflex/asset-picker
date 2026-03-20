import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';
import type { ApiClient } from '../../services/api-client';
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
import { filterPopoverStyles } from './shared/filter-styles';
import { resetStyles } from '../../styles/shared-styles';

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
  static styles = [resetStyles, filterPopoverStyles, css`
    /* ── Field selection panel ─────────────────────────────── */

    .add-field-btn {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 6px 12px;
      border: 1px dashed var(--ap-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--ap-radius-sm, 6px);
      background: none;
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      cursor: pointer;
      width: 100%;
      font-family: var(--ap-font-family, system-ui, sans-serif);
      transition: all 150ms;
    }

    .add-field-btn:hover {
      border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }

    .field-selection {
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--ap-radius-sm, 6px);
      background: var(--ap-background, oklch(1 0 0));
      margin-bottom: 12px;
    }

    .field-selection-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 12px;
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
    }

    .field-selection-title {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }

    .field-selection-close {
      background: none;
      border: none;
      cursor: pointer;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      padding: 2px;
      display: flex;
      align-items: center;
    }

    .field-selection-close:hover {
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }

    .selector-wrap {
      margin: -10px -8px;
    }

    .field-search {
      position: sticky;
      top: -12px;
      z-index: 2;
      width: 100%;
      height: 34px;
      padding: 0 12px;
      box-sizing: border-box;
      border: none;
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      background: var(--ap-card, oklch(1 0 0));
      outline: none;
      font-family: var(--ap-font-family, system-ui, sans-serif);
    }

    .field-search::placeholder {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }

    .field-list {
      padding: 12px;
    }

    .field-group-label {
      padding: 6px 12px 4px;
      font-size: 0.875rem;
      font-weight: 400;
      letter-spacing: 0.05em;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }

    .field-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 12px;
      cursor: pointer;
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      transition: background 100ms;
    }

    .field-item:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }

    .field-item.disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .field-item.selected {
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }

    .limit-note {
      padding: 8px 12px;
      font-size: 0.75rem;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      text-align: center;
    }

    .limit-note.at-limit {
      color: var(--ap-destructive, oklch(0.577 0.215 27.325));
    }

    .empty-msg {
      padding: 16px 12px;
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      text-align: center;
    }

    /* ── Per-field filter sections ─────────────────────────── */

    .field-filters {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .field-section {
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--ap-radius-sm, 6px);
      overflow: hidden;
    }

    .field-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 12px;
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      cursor: pointer;
      user-select: none;
    }

    .field-header-left {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
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
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      padding: 2px;
      display: flex;
      align-items: center;
      border-radius: 4px;
      transition: all 100ms;
    }

    .icon-btn:hover {
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      background: var(--ap-border, oklch(92.86% 0.009 247.92));
    }

    .icon-btn.remove:hover {
      color: var(--ap-destructive, oklch(0.577 0.215 27.325));
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

    /* ── Tags input ─────────────────────────────────────── */

    .tags-container {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      padding: 6px;
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
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
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.1));
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
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
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      background: transparent;
      font-family: var(--ap-font-family, system-ui, sans-serif);
    }

    .tag-input::placeholder {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }

    /* ── Geo inputs ─────────────────────────────────────── */

    .geo-row {
      display: flex;
      gap: 12px;
    }

    .geo-location {
      flex: 2;
    }

    .geo-radius {
      flex: 1;
    }

    /* ── Select option items ────────────────────────────── */

    .option-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 8px;
      border-radius: var(--ap-radius-sm, 6px);
      cursor: pointer;
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      transition: background 150ms;
    }

    .option-item:hover:not(.disabled) {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }

    .option-item.disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    /* ── Chevron ────────────────────────────────────────── */

    .chevron {
      transition: transform 150ms;
    }

    .chevron.expanded {
      transform: rotate(90deg);
    }

    /* ── Selector mode ─────────────────────────────────── */

    .field-item-label {
      flex: 1;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .field-item-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
      flex-shrink: 0;
    }

    .field-item-pin {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 22px;
      height: 22px;
      border: none;
      background: none;
      cursor: pointer;
      padding: 0;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      border-radius: 4px;
      flex-shrink: 0;
      margin-left: auto;
      opacity: 0;
      transition: all 150ms;
    }

    .field-item:hover .field-item-pin,
    .field-item-pin.pinned {
      opacity: 1;
    }

    .field-item-pin:hover {
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.08));
    }

    .field-item-pin.pinned {
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }

    .field-item.has-filter {
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.1));
    }
  `];

  // ── Public properties ────────────────────────────────────────────

  @property({ type: Array })
  fields: MetadataModelField[] = [];

  @property({ type: Object })
  appliedFilters: Record<string, MetadataFilterValue> = {};

  @property({ type: Array })
  visibleFields: string[] = [];

  @property() mode: 'full' | 'selector' | 'field' = 'full';

  @property() activeFieldKey = '';

  @property({ type: Array }) pinnedFields: string[] = [];

  @property({ type: Object }) appliedMetadata: Record<string, MetadataFilterValue> = {};

  @property({ attribute: false }) apiClient?: ApiClient;

  // ── Internal state ───────────────────────────────────────────────

  @state() private _showFieldSelection = false;
  @state() private _fieldSearch = '';
  @state() private _collapsedFields: Set<string> = new Set();
  @state() private _tagInputs: Record<string, string> = {};
  @state() private _tagSuggestions: Record<string, string[]> = {};
  @state() private _tagLoading: Record<string, boolean> = {};
  @state() private _datePresets: Record<string, string> = {};
  @state() private _dateFroms: Record<string, string> = {};
  @state() private _dateTos: Record<string, string> = {};
  @state() private _specificModeFields: Set<string> = new Set();
  @state() private _selectSearches: Record<string, string> = {};

  private _tagDebounceTimers: Record<string, ReturnType<typeof setTimeout>> = {};

  connectedCallback() {
    super.connectedCallback();
    this.updateComplete.then(() => this._focusSearch());
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    for (const timer of Object.values(this._tagDebounceTimers)) {
      clearTimeout(timer);
    }
  }

  private _focusSearch() {
    const input = this.renderRoot.querySelector('.field-search, .search-input') as HTMLInputElement | null;
    input?.focus();
  }

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
    return this.appliedMetadata[prefixedKey] || this.appliedFilters[prefixedKey] || {};
  }

  private _isSpecialValue(values: string[] | undefined): boolean {
    if (!values || values.length !== 1) return false;
    return values[0] === EMPTY_VALUE || values[0] === NOT_EMPTY_VALUE;
  }

  /** Get the "content" mode for a field: 'empty', 'not-empty', or 'specific' */
  private _getContentMode(prefixedKey: string): string {
    const applied = this._getApplied(prefixedKey);
    if (applied.values?.[0] === EMPTY_VALUE) return EMPTY_VALUE;
    if (applied.values?.[0] === NOT_EMPTY_VALUE) return NOT_EMPTY_VALUE;
    if (this._specificModeFields.has(prefixedKey)) return SPECIFIC_VALUE;
    // If there are actual values, treat as specific
    if (applied.values && applied.values.length > 0) return SPECIFIC_VALUE;
    return '';
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

  private _emitFieldSelect(field: MetadataModelField) {
    const prefixedKey = getPrefixedKey(field);
    // Enforce limit for new fields
    if (!this.visibleFields.includes(prefixedKey) && this._atFieldLimit) return;
    // Also make sure it's visible
    if (!this.visibleFields.includes(prefixedKey)) {
      this._emitFieldToggle(field, true);
    }
    this.dispatchEvent(
      new CustomEvent('metadata-field-select', {
        detail: { fieldKey: prefixedKey },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _emitPin(prefixedKey: string, pinned: boolean) {
    this.dispatchEvent(
      new CustomEvent('metadata-pin', {
        detail: { fieldKey: prefixedKey, pinned },
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

  // ── Operator change (via radio group) ─────────────────────────────

  private _onOperatorChange(field: MetadataModelField, value: string) {
    const applied = this._getApplied(getPrefixedKey(field));
    const values = applied.values || [];
    this._emitFilterChange(field, value, values);
  }

  // ── Content mode change ─────────────────────────────────────────

  private _onContentModeChange(field: MetadataModelField, mode: string) {
    const prefixedKey = getPrefixedKey(field);
    if (mode === SPECIFIC_VALUE) {
      const newSet = new Set(this._specificModeFields);
      newSet.add(prefixedKey);
      this._specificModeFields = newSet;
      // Clear empty/not-empty value, keep operator
      const applied = this._getApplied(prefixedKey);
      if (this._isSpecialValue(applied.values)) {
        this._emitFilterChange(field, applied.operator, []);
      }
    } else {
      // Exit specific mode
      if (this._specificModeFields.has(prefixedKey)) {
        const newSet = new Set(this._specificModeFields);
        newSet.delete(prefixedKey);
        this._specificModeFields = newSet;
      }
      this._onEmptyOption(field, mode);
    }
  }

  // ── Clear field filter ──────────────────────────────────────────

  private _clearFieldFilter(field: MetadataModelField) {
    const prefixedKey = getPrefixedKey(field);
    // Exit specific mode
    if (this._specificModeFields.has(prefixedKey)) {
      const newSet = new Set(this._specificModeFields);
      newSet.delete(prefixedKey);
      this._specificModeFields = newSet;
    }
    // Clear date state
    const { [prefixedKey]: _dp, ...restPresets } = this._datePresets;
    this._datePresets = restPresets;
    const { [prefixedKey]: _df, ...restFroms } = this._dateFroms;
    this._dateFroms = restFroms;
    const { [prefixedKey]: _dt, ...restTos } = this._dateTos;
    this._dateTos = restTos;
    // Clear search
    const { [prefixedKey]: _s, ...restSearches } = this._selectSearches;
    this._selectSearches = restSearches;
    // Clear tag inputs
    const { [prefixedKey]: _ti, ...restTagInputs } = this._tagInputs;
    this._tagInputs = restTagInputs;

    this._emitFilterChange(field, undefined, []);
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

  private _onSelectOneToggle(field: MetadataModelField, value: string) {
    const prefixedKey = getPrefixedKey(field);
    const applied = this._getApplied(prefixedKey);
    const operator = applied.operator || SINGLE_SELECT_OPERATOR_OPTIONS[0].value;
    const current = applied.values || [];

    // For select-one, toggle: if already selected, deselect; otherwise set
    if (current.length === 1 && current[0] === value) {
      this._emitFilterChange(field, operator, []);
    } else {
      this._emitFilterChange(field, operator, [value]);
    }
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

  private _onTagInput(field: MetadataModelField, prefixedKey: string, e: Event) {
    const value = (e.target as HTMLInputElement).value;
    // If user types comma, commit immediately
    if (value.includes(',')) {
      const tag = value.replace(/,/g, '').trim();
      if (tag) {
        this._tagInputs = { ...this._tagInputs, [prefixedKey]: tag };
        this._commitTagInput(field, prefixedKey);
      }
      return;
    }
    this._tagInputs = { ...this._tagInputs, [prefixedKey]: value };
    this._fetchTagSuggestions(field, prefixedKey, value.trim());
  }

  private _selectTagSuggestion(field: MetadataModelField, tag: string) {
    const prefixedKey = getPrefixedKey(field);
    const applied = this._getApplied(prefixedKey);
    const operator = applied.operator || SINGLE_SELECT_OPERATOR_OPTIONS[0].value;
    const current = applied.values || [];

    if (!current.includes(tag)) {
      this._emitFilterChange(field, operator, [...current, tag]);
    }
    // Clear input and suggestions after selection
    this._tagInputs = { ...this._tagInputs, [prefixedKey]: '' };
    this._tagSuggestions = { ...this._tagSuggestions, [prefixedKey]: [] };
  }

  private _fetchTagSuggestions(field: MetadataModelField, prefixedKey: string, query: string) {
    if (this._tagDebounceTimers[prefixedKey]) {
      clearTimeout(this._tagDebounceTimers[prefixedKey]);
    }

    if (!query || !this.apiClient) {
      this._tagSuggestions = { ...this._tagSuggestions, [prefixedKey]: [] };
      this._tagLoading = { ...this._tagLoading, [prefixedKey]: false };
      return;
    }

    this._tagDebounceTimers[prefixedKey] = setTimeout(async () => {
      this._tagLoading = { ...this._tagLoading, [prefixedKey]: true };
      try {
        const metaKey = `_${field.ckey || field.key}`;
        const response = await this.apiClient!.request<{ tags: { tag: string }[] }>(
          '/metadata/autocomplete',
          { q: query, meta_key: metaKey },
        );
        // Only update if input hasn't changed
        if ((this._tagInputs[prefixedKey] || '').trim() === query) {
          this._tagSuggestions = {
            ...this._tagSuggestions,
            [prefixedKey]: (response.tags || []).map((t) => t.tag),
          };
        }
      } catch {
        this._tagSuggestions = { ...this._tagSuggestions, [prefixedKey]: [] };
      } finally {
        this._tagLoading = { ...this._tagLoading, [prefixedKey]: false };
      }
    }, 300);
  }

  private _commitTagInput(field: MetadataModelField, prefixedKey: string) {
    const tag = (this._tagInputs[prefixedKey] || '').trim();
    if (!tag) return;

    const applied = this._getApplied(prefixedKey);
    const operator = applied.operator || SINGLE_SELECT_OPERATOR_OPTIONS[0].value;
    const current = applied.values || [];

    if (!current.includes(tag)) {
      this._emitFilterChange(field, operator, [...current, tag]);
    }

    this._tagInputs = { ...this._tagInputs, [prefixedKey]: '' };
    this._tagSuggestions = { ...this._tagSuggestions, [prefixedKey]: [] };
  }

  private _removeTag(field: MetadataModelField, tag: string) {
    const prefixedKey = getPrefixedKey(field);
    const applied = this._getApplied(prefixedKey);
    const operator = applied.operator || SINGLE_SELECT_OPERATOR_OPTIONS[0].value;
    const current = applied.values || [];
    this._emitFilterChange(
      field,
      operator,
      current.filter((v) => v !== tag),
    );
  }

  private _onTagOperatorChange(field: MetadataModelField, newOperator: string) {
    const prefixedKey = getPrefixedKey(field);
    const applied = this._getApplied(prefixedKey);
    const values = applied.values || [];
    this._emitFilterChange(field, newOperator, values);
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

  private _onGeoLocationInput(field: MetadataModelField, e: Event) {
    const raw = (e.target as HTMLInputElement).value.trim();
    const prefixedKey = getPrefixedKey(field);
    const radiusEl = this.shadowRoot?.querySelector<HTMLInputElement>(
      `[data-geo-radius="${prefixedKey}"]`,
    );
    const radius = radiusEl?.value || '';

    if (!raw) {
      this._emitFilterChange(field, undefined, []);
      return;
    }

    // Parse "lat, lng" format
    const parts = raw.split(',').map((s) => s.trim());
    if (parts.length !== 2 || parts.some((p) => isNaN(Number(p)) || p === '')) {
      // Invalid format, don't emit but keep the input
      return;
    }

    const [lat, lng] = parts;
    const r = radius || '0';
    let value = `${lat},${lng}..${r}`;

    this._emitFilterChange(field, FILTER_OPERATORS.IS, [value]);
  }

  private _onGeoRadiusInput(field: MetadataModelField, e: Event) {
    const radius = (e.target as HTMLInputElement).value;
    const prefixedKey = getPrefixedKey(field);
    const applied = this._getApplied(prefixedKey);

    if (!applied.values?.[0]) return;

    const val = applied.values[0];
    const [coords] = val.split('..');

    let value = coords;
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

  // ── Render: Text filter ──────────────────────────────────────────

  private _renderTextFilter(field: MetadataModelField) {
    const prefixedKey = getPrefixedKey(field);
    const applied = this._getApplied(prefixedKey);
    const isSpecial = this._isSpecialValue(applied.values);
    const textValue = isSpecial ? '' : (applied.values?.[0] || '');
    const contentMode = this._getContentMode(prefixedKey);
    const isEmptyMode = contentMode === EMPTY_VALUE || contentMode === NOT_EMPTY_VALUE;
    const operator = applied.operator || TEXT_OPERATOR_OPTIONS[0].value;
    const isTextArea = field.type === METADATA_FIELD_TYPES.TEXT_AREA;

    return html`
      <div class="filter-content" style="position: relative;">
        <button
          class="clear-btn"
          ?disabled=${!applied.values?.length && !applied.operator}
          @click=${() => this._clearFieldFilter(field)}
        >Clear all</button>

        <div class="filter-section">
          <span class="section-label">Operator</span>
          <ap-radio-group
            direction="horizontal"
            .options=${TEXT_OPERATOR_OPTIONS}
            .value=${operator}
            ?disabled=${isEmptyMode}
            @ap-change=${(e: CustomEvent) => this._onOperatorChange(field, e.detail.value)}
          ></ap-radio-group>
        </div>

        <div class="filter-section">
          <span class="section-label">Content</span>
          <ap-radio-group
            .options=${EMPTY_AND_SPECIFIC_OPTIONS}
            .value=${contentMode}
            @ap-change=${(e: CustomEvent) => this._onContentModeChange(field, e.detail.value)}
          ></ap-radio-group>
        </div>

        ${contentMode === SPECIFIC_VALUE
          ? html`
              <div class="filter-section">
                <span class="section-label">Value</span>
                ${isTextArea
                  ? html`
                      <textarea
                        class="filter-input"
                        placeholder="Enter value..."
                        .value=${textValue}
                        @change=${(e: Event) => this._onTextInput(field, e)}
                      ></textarea>
                    `
                  : html`
                      <input
                        class="filter-input"
                        type="text"
                        placeholder="Enter value..."
                        .value=${textValue}
                        @change=${(e: Event) => this._onTextInput(field, e)}
                        @keydown=${(e: KeyboardEvent) => {
                          if (e.key === 'Enter') e.preventDefault();
                        }}
                      />
                    `}
              </div>
            `
          : nothing}
      </div>
    `;
  }

  // ── Render: Number filter ────────────────────────────────────────

  private _renderNumberFilter(field: MetadataModelField) {
    const prefixedKey = getPrefixedKey(field);
    const applied = this._getApplied(prefixedKey);
    const operator = applied.operator || NUMBER_OPERATOR_OPTIONS[0].value;
    const isSpecial = this._isSpecialValue(applied.values);
    const contentMode = this._getContentMode(prefixedKey);
    const isEmptyMode = contentMode === EMPTY_VALUE || contentMode === NOT_EMPTY_VALUE;
    const isRange = operator === FILTER_OPERATORS.RANGE;
    const isGreaterThan = operator === FILTER_OPERATORS.GREATER_THAN_OR_EQUAL;
    const isLessThan = operator === FILTER_OPERATORS.LESS_THAN_OR_EQUAL;
    const isDecimal = field.type === METADATA_FIELD_TYPES.DECIMAL2;
    const step = isDecimal ? '0.01' : '1';
    const placeholder = isDecimal ? '0.00' : '0';

    const val0 = isSpecial ? '' : (applied.values?.[0] || '');
    const val1 = isSpecial ? '' : (applied.values?.[1] || '');

    // Label logic: "Value" for exact (Is/Is not), "Min"/"Max" for range/greater/less
    const showTwoColumns = isRange || isGreaterThan || isLessThan;
    const minLabel = isRange || isGreaterThan || isLessThan ? 'Min' : 'Value';
    const maxLabel = 'Max';

    return html`
      <div class="filter-content" style="position: relative;">
        <button
          class="clear-btn"
          ?disabled=${!applied.values?.length && !applied.operator}
          @click=${() => this._clearFieldFilter(field)}
        >Clear all</button>

        <div class="filter-section">
          <span class="section-label">Condition</span>
          <ap-radio-group
            columns="2"
            .options=${NUMBER_OPERATOR_OPTIONS}
            .value=${operator}
            ?disabled=${isEmptyMode}
            @ap-change=${(e: CustomEvent) => this._onOperatorChange(field, e.detail.value)}
          ></ap-radio-group>
        </div>

        <div class="filter-section">
          <span class="section-label">Content</span>
          <ap-radio-group
            .options=${EMPTY_AND_SPECIFIC_OPTIONS}
            .value=${contentMode}
            @ap-change=${(e: CustomEvent) => this._onContentModeChange(field, e.detail.value)}
          ></ap-radio-group>
        </div>

        ${contentMode === SPECIFIC_VALUE
          ? html`
              <div class="filter-section">
                <div class="grid-2">
                  <div>
                    <span class="input-label" aria-disabled=${isLessThan ? 'true' : nothing}>${minLabel}</span>
                    <input
                      class="filter-input"
                      type="number"
                      step=${step}
                      placeholder=${placeholder}
                      .value=${val0}
                      ?disabled=${isLessThan}
                      @change=${(e: Event) => this._onNumberInput(field, e, 0)}
                    />
                  </div>
                  ${showTwoColumns
                    ? html`
                        <div>
                          <span class="input-label" aria-disabled=${isGreaterThan ? 'true' : nothing}>${maxLabel}</span>
                          <input
                            class="filter-input"
                            type="number"
                            step=${step}
                            placeholder=${placeholder}
                            .value=${val1}
                            ?disabled=${isGreaterThan}
                            @change=${(e: Event) => this._onNumberInput(field, e, 1)}
                          />
                        </div>
                      `
                    : nothing}
                </div>
              </div>
            `
          : nothing}
      </div>
    `;
  }

  // ── Render: Boolean filter ───────────────────────────────────────

  private _renderBooleanFilter(field: MetadataModelField) {
    const applied = this._getApplied(getPrefixedKey(field));
    const currentValue = applied.values?.[0] || '';

    return html`
      <div class="filter-content" style="position: relative;">
        <button
          class="clear-btn"
          ?disabled=${!applied.values?.length}
          @click=${() => this._clearFieldFilter(field)}
        >Clear all</button>

        <div class="filter-section">
          <span class="section-label">Value</span>
          <ap-radio-group
            .options=${BOOLEAN_OPTIONS}
            .value=${currentValue}
            @ap-change=${(e: CustomEvent) => this._onBooleanSelect(field, e.detail.value)}
          ></ap-radio-group>
        </div>
      </div>
    `;
  }

  // ── Render: Select-one filter ────────────────────────────────────

  private _renderSelectOneFilter(field: MetadataModelField) {
    const prefixedKey = getPrefixedKey(field);
    const applied = this._getApplied(prefixedKey);
    const isSpecial = this._isSpecialValue(applied.values);
    const selectedValues = isSpecial ? [] : (applied.values || []);
    const options = field.possible_values || [];
    const operator = applied.operator || SINGLE_SELECT_OPERATOR_OPTIONS[0].value;
    const search = (this._selectSearches[prefixedKey] || '').toLowerCase();
    const isSearching = search.length > 0;
    const hasFilter = selectedValues.length > 0 || isSpecial;

    const filteredOptions = search
      ? options.filter((o) => o.label.toLowerCase().includes(search))
      : options;

    const atLimit = selectedValues.length >= SELECTED_METADATA_FIELDS_LIMIT;

    return html`
      <div class="filter-content">
        <!-- Search input -->
        <div class="search-wrapper">
          <input
            class="search-input"
            type="text"
            placeholder="Search options..."
            .value=${this._selectSearches[prefixedKey] || ''}
            @input=${(e: Event) => {
              this._selectSearches = {
                ...this._selectSearches,
                [prefixedKey]: (e.target as HTMLInputElement).value,
              };
            }}
          />
          ${isSearching
            ? html`
                <button class="search-clear" @click=${() => {
                  this._selectSearches = { ...this._selectSearches, [prefixedKey]: '' };
                }}>
                  <ap-icon name="close" .size=${12}></ap-icon>
                </button>
              `
            : nothing}
        </div>

        ${!isSearching
          ? html`
              <!-- Operator -->
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">Operator</span>
                  <button
                    class="clear-btn"
                    ?disabled=${!hasFilter && !applied.operator}
                    @click=${() => this._clearFieldFilter(field)}
                  >Clear all</button>
                </div>
                <ap-radio-group
                  direction="horizontal"
                  .options=${SINGLE_SELECT_OPERATOR_OPTIONS}
                  .value=${operator}
                  @ap-change=${(e: CustomEvent) => this._onOperatorChange(field, e.detail.value)}
                ></ap-radio-group>
              </div>

              <!-- Selected chips -->
              ${selectedValues.length > 0
                ? html`
                    <div class="filter-section">
                      <div class="chips-wrap">
                        ${selectedValues.map((val) => {
                          const opt = options.find((o) => o.api_value === val);
                          return html`
                            <div class="chip">
                              <span class="chip-label">${opt?.label || val}</span>
                              <button class="chip-remove" @click=${() => this._onSelectOneToggle(field, val)}>
                                <ap-icon name="close" .size=${10}></ap-icon>
                              </button>
                            </div>
                          `;
                        })}
                      </div>
                    </div>
                  `
                : nothing}
            `
          : html`
              <div class="section-header">
                <span class="section-label"></span>
                <button
                  class="clear-btn"
                  ?disabled=${!hasFilter && !applied.operator}
                  @click=${() => this._clearFieldFilter(field)}
                >Clear all</button>
              </div>
            `}

        <!-- Options list -->
        <div class="filter-section">
          <span class="section-label">All options</span>

          <!-- Empty/Not empty checkboxes -->
          <div class="options-list short">
            ${EMPTY_OPTIONS.map(
              (opt) => html`
                <div
                  class="option-item"
                  @click=${() => this._onEmptyOption(field, opt.value)}
                >
                  <ap-checkbox ?checked=${applied.values?.[0] === opt.value}></ap-checkbox>
                  <span>${opt.label}</span>
                </div>
              `,
            )}
          </div>

          <div class="separator"></div>

          <!-- Regular options -->
          <div class="options-list">
            ${filteredOptions.length === 0
              ? html`<div class="no-results">No options found</div>`
              : filteredOptions.map((opt) => {
                  const isSelected = selectedValues.includes(opt.api_value);
                  const isDisabled = !isSelected && atLimit;
                  return html`
                    <div
                      class="option-item ${isDisabled ? 'disabled' : ''}"
                      @click=${() => !isDisabled && this._onSelectOneToggle(field, opt.api_value)}
                    >
                      <ap-checkbox ?checked=${isSelected}></ap-checkbox>
                      <span>${opt.label}</span>
                    </div>
                  `;
                })}
          </div>
        </div>
      </div>
    `;
  }

  // ── Render: Multi-select filter ──────────────────────────────────

  private _renderMultiSelectFilter(field: MetadataModelField) {
    const prefixedKey = getPrefixedKey(field);
    const applied = this._getApplied(prefixedKey);
    const isSpecial = this._isSpecialValue(applied.values);
    const selectedValues = isSpecial ? [] : (applied.values || []);
    const options = field.possible_values || [];
    const operator = applied.operator || MULTI_SELECT_OPERATOR_OPTIONS[0].value;
    const search = (this._selectSearches[prefixedKey] || '').toLowerCase();
    const isSearching = search.length > 0;
    const hasFilter = selectedValues.length > 0 || isSpecial;

    const filteredOptions = search
      ? options.filter((o) => o.label.toLowerCase().includes(search))
      : options;

    const atLimit = selectedValues.length >= SELECTED_METADATA_FIELDS_LIMIT;

    return html`
      <div class="filter-content">
        <!-- Search input -->
        <div class="search-wrapper">
          <input
            class="search-input"
            type="text"
            placeholder="Search options..."
            .value=${this._selectSearches[prefixedKey] || ''}
            @input=${(e: Event) => {
              this._selectSearches = {
                ...this._selectSearches,
                [prefixedKey]: (e.target as HTMLInputElement).value,
              };
            }}
          />
          ${isSearching
            ? html`
                <button class="search-clear" @click=${() => {
                  this._selectSearches = { ...this._selectSearches, [prefixedKey]: '' };
                }}>
                  <ap-icon name="close" .size=${12}></ap-icon>
                </button>
              `
            : nothing}
        </div>

        ${!isSearching
          ? html`
              <!-- Operator -->
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">Operator</span>
                  <button
                    class="clear-btn"
                    ?disabled=${!hasFilter && !applied.operator}
                    @click=${() => this._clearFieldFilter(field)}
                  >Clear all</button>
                </div>
                <ap-radio-group
                  direction="horizontal"
                  .options=${MULTI_SELECT_OPERATOR_OPTIONS}
                  .value=${operator}
                  @ap-change=${(e: CustomEvent) => this._onOperatorChange(field, e.detail.value)}
                ></ap-radio-group>
              </div>

              <!-- Selected chips -->
              ${selectedValues.length > 0
                ? html`
                    <div class="filter-section">
                      <div class="chips-wrap">
                        ${selectedValues.map((val) => {
                          const opt = options.find((o) => o.api_value === val);
                          return html`
                            <div class="chip">
                              <span class="chip-label">${opt?.label || val}</span>
                              <button class="chip-remove" @click=${() => this._onMultiSelectToggle(field, val)}>
                                <ap-icon name="close" .size=${10}></ap-icon>
                              </button>
                            </div>
                          `;
                        })}
                      </div>
                    </div>
                  `
                : nothing}
            `
          : html`
              <div class="section-header">
                <span class="section-label"></span>
                <button
                  class="clear-btn"
                  ?disabled=${!hasFilter && !applied.operator}
                  @click=${() => this._clearFieldFilter(field)}
                >Clear all</button>
              </div>
            `}

        <!-- Options list -->
        <div class="filter-section">
          <span class="section-label">All options</span>

          <!-- Empty/Not empty checkboxes -->
          <div class="options-list short">
            ${EMPTY_OPTIONS.map(
              (opt) => html`
                <div
                  class="option-item"
                  @click=${() => this._onEmptyOption(field, opt.value)}
                >
                  <ap-checkbox ?checked=${applied.values?.[0] === opt.value}></ap-checkbox>
                  <span>${opt.label}</span>
                </div>
              `,
            )}
          </div>

          <div class="separator"></div>

          <!-- Regular options -->
          <div class="options-list">
            ${filteredOptions.length === 0
              ? html`<div class="no-results">No options found</div>`
              : filteredOptions.map((opt) => {
                  const isSelected = selectedValues.includes(opt.api_value);
                  const isDisabled = !isSelected && atLimit;
                  return html`
                    <div
                      class="option-item ${isDisabled ? 'disabled' : ''}"
                      @click=${() => !isDisabled && this._onMultiSelectToggle(field, opt.api_value)}
                    >
                      <ap-checkbox ?checked=${isSelected}></ap-checkbox>
                      <span>${opt.label}</span>
                    </div>
                  `;
                })}
          </div>
        </div>
      </div>
    `;
  }

  // ── Render: Tags filter ──────────────────────────────────────────

  private _renderTagsFilter(field: MetadataModelField) {
    const prefixedKey = getPrefixedKey(field);
    const applied = this._getApplied(prefixedKey);
    const isSpecial = this._isSpecialValue(applied.values);
    const tags = isSpecial ? [] : (applied.values || []);
    const inputValue = this._tagInputs[prefixedKey] || '';
    const operator = applied.operator || SINGLE_SELECT_OPERATOR_OPTIONS[0].value;
    const hasFilter = tags.length > 0 || isSpecial;
    const suggestions = this._tagSuggestions[prefixedKey] || [];
    const isLoading = this._tagLoading[prefixedKey] || false;
    const isSearching = inputValue.trim().length > 0;
    const atLimit = tags.length >= SELECTED_METADATA_FIELDS_LIMIT;

    return html`
      <div class="filter-content">
        <!-- Search input -->
        <div class="search-wrapper">
          <input
            class="search-input"
            type="text"
            placeholder="Search tags..."
            .value=${inputValue}
            @input=${(e: Event) => this._onTagInput(field, prefixedKey, e)}
            @keydown=${(e: KeyboardEvent) => this._onTagKeydown(field, e)}
          />
          ${isSearching
            ? html`
                <button class="search-clear" @click=${() => {
                  this._tagInputs = { ...this._tagInputs, [prefixedKey]: '' };
                  this._tagSuggestions = { ...this._tagSuggestions, [prefixedKey]: [] };
                }}>
                  <ap-icon name="close" .size=${12}></ap-icon>
                </button>
              `
            : nothing}
        </div>

        ${!isSearching
          ? html`
              <!-- Operator -->
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">Condition</span>
                  <button
                    class="clear-btn"
                    ?disabled=${!hasFilter && !applied.operator}
                    @click=${() => this._clearFieldFilter(field)}
                  >Clear all</button>
                </div>
                <ap-radio-group
                  direction="horizontal"
                  .options=${SINGLE_SELECT_OPERATOR_OPTIONS}
                  .value=${operator}
                  ?disabled=${isSpecial}
                  @ap-change=${(e: CustomEvent) => this._onTagOperatorChange(field, e.detail.value)}
                ></ap-radio-group>
              </div>

              <!-- Selected chips -->
              ${tags.length > 0
                ? html`
                    <div class="filter-section">
                      <div class="chips-wrap">
                        ${tags.map(
                          (tag) => html`
                            <div class="chip">
                              <span class="chip-label">${tag}</span>
                              <button class="chip-remove" @click=${() => this._removeTag(field, tag)}>
                                <ap-icon name="close" .size=${10}></ap-icon>
                              </button>
                            </div>
                          `,
                        )}
                      </div>
                    </div>
                  `
                : nothing}

              <!-- Empty/Not empty -->
              <div class="filter-section">
                <span class="section-label">All options</span>
                <div class="options-list short">
                  ${EMPTY_OPTIONS.map(
                    (opt) => html`
                      <div
                        class="option-item"
                        @click=${() => this._onEmptyOption(field, opt.value)}
                      >
                        <ap-checkbox ?checked=${applied.values?.[0] === opt.value}></ap-checkbox>
                        <span>${opt.label}</span>
                      </div>
                    `,
                  )}
                </div>
              </div>
            `
          : html`
              <div class="section-header">
                <span class="section-label"></span>
                <button
                  class="clear-btn"
                  ?disabled=${!hasFilter && !applied.operator}
                  @click=${() => this._clearFieldFilter(field)}
                >Clear all</button>
              </div>
            `}

        <!-- Suggestions list -->
        ${isSearching
          ? html`
              <div class="filter-section">
                <div class="options-list">
                  ${isLoading
                    ? html`<div class="option-item disabled"><span>Loading...</span></div>`
                    : suggestions.length > 0
                      ? suggestions.map(
                          (tag) => {
                            const isSelected = tags.includes(tag);
                            const isDisabled = !isSelected && atLimit;
                            return html`
                              <div
                                class="option-item ${isDisabled ? 'disabled' : ''}"
                                @click=${() => !isDisabled && (isSelected ? this._removeTag(field, tag) : this._selectTagSuggestion(field, tag))}
                              >
                                <ap-checkbox ?checked=${isSelected}></ap-checkbox>
                                <span>${tag}</span>
                              </div>
                            `;
                          },
                        )
                      : html`<div class="option-item disabled"><span>No results</span></div>`}
                </div>
              </div>
            `
          : nothing}
      </div>
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

    const emptyOptions = [
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
      <div class="filter-content" style="position: relative;">
        <button
          class="clear-btn"
          ?disabled=${!activePreset && !applied.values?.length}
          @click=${() => this._clearFieldFilter(field)}
        >Clear all</button>

        <div class="filter-section">
          <ap-radio-group
            .options=${emptyOptions}
            .value=${activePreset === 'empty' || activePreset === 'non-empty' ? activePreset : ''}
            @ap-change=${(e: CustomEvent) => this._onDatePreset(field, e.detail.value)}
          ></ap-radio-group>

          <div class="separator"></div>

          <ap-radio-group
            columns="2"
            .options=${DATE_RANGE_OPTIONS}
            .value=${activePreset !== 'empty' && activePreset !== 'non-empty' ? activePreset : ''}
            @ap-change=${(e: CustomEvent) => this._onDatePreset(field, e.detail.value)}
          ></ap-radio-group>
        </div>

        ${needsDateInput
          ? html`
              <div class="filter-section">
                <div class="grid-2">
                  ${activePreset === 'before'
                    ? html`
                        <div>
                          <span class="input-label">End date</span>
                          <input
                            type="date"
                            class="filter-input"
                            .value=${toStr}
                            @change=${(e: Event) => this._onDateInput(field, 'to', e)}
                          />
                        </div>
                      `
                    : activePreset === 'after'
                      ? html`
                          <div>
                            <span class="input-label">Start date</span>
                            <input
                              type="date"
                              class="filter-input"
                              .value=${fromStr}
                              @change=${(e: Event) => this._onDateInput(field, 'from', e)}
                            />
                          </div>
                        `
                      : html`
                          <div>
                            <span class="input-label">Start date</span>
                            <input
                              type="date"
                              class="filter-input"
                              .value=${fromStr}
                              @change=${(e: Event) => this._onDateInput(field, 'from', e)}
                            />
                          </div>
                          <div>
                            <span class="input-label">End date</span>
                            <input
                              type="date"
                              class="filter-input"
                              .value=${toStr}
                              @change=${(e: Event) => this._onDateInput(field, 'to', e)}
                            />
                          </div>
                        `}
                </div>
              </div>
            `
          : nothing}
      </div>
    `;
  }

  // ── Render: Geo filter ───────────────────────────────────────────

  private _renderGeoFilter(field: MetadataModelField) {
    const prefixedKey = getPrefixedKey(field);
    const applied = this._getApplied(prefixedKey);
    const isSpecial = this._isSpecialValue(applied.values);
    const contentMode = this._getContentMode(prefixedKey);

    // Parse "lat,lng" or "lat,lng..radius"
    let locationStr = '';
    let radius = '';
    if (!isSpecial && applied.values?.[0]) {
      const val = applied.values[0];
      const [coords, rad] = val.split('..');
      locationStr = coords || '';
      radius = rad || '';
    }

    // Validate location format for error display
    const hasLocationInput = locationStr.length > 0;
    const parts = locationStr.split(',').map((s) => s.trim());
    const isValidLocation = !hasLocationInput || (parts.length === 2 && parts.every((p) => !isNaN(Number(p)) && p !== ''));

    return html`
      <div class="filter-content" style="position: relative;">
        <button
          class="clear-btn"
          ?disabled=${!applied.values?.length}
          @click=${() => this._clearFieldFilter(field)}
        >Clear all</button>

        <div class="filter-section">
          <span class="section-label">Content</span>
          <ap-radio-group
            .options=${EMPTY_AND_SPECIFIC_OPTIONS}
            .value=${contentMode}
            @ap-change=${(e: CustomEvent) => this._onContentModeChange(field, e.detail.value)}
          ></ap-radio-group>
        </div>

        ${contentMode === SPECIFIC_VALUE
          ? html`
              <div class="filter-section">
                <div class="geo-row">
                  <div class="geo-location">
                    <span class="input-label">Location</span>
                    <input
                      class="filter-input"
                      type="text"
                      placeholder="Latitude, longitude"
                      .value=${locationStr}
                      @change=${(e: Event) => this._onGeoLocationInput(field, e)}
                    />
                    ${hasLocationInput && !isValidLocation
                      ? html`<div class="error-text">Enter coordinates as "latitude, longitude"</div>`
                      : nothing}
                  </div>
                  <div class="geo-radius">
                    <span class="input-label">Max radius (&deg;)</span>
                    <input
                      class="filter-input"
                      type="number"
                      placeholder="0"
                      data-geo-radius=${prefixedKey}
                      .value=${radius}
                      @change=${(e: Event) => this._onGeoRadiusInput(field, e)}
                    />
                  </div>
                </div>
              </div>
            `
          : nothing}
      </div>
    `;
  }

  // ── Render: Attachment filter ────────────────────────────────────

  private _renderAttachmentFilter(field: MetadataModelField) {
    const applied = this._getApplied(getPrefixedKey(field));
    const currentValue = applied.values?.[0] || '';

    return html`
      <div class="filter-content" style="position: relative;">
        <button
          class="clear-btn"
          ?disabled=${!applied.values?.length}
          @click=${() => this._clearFieldFilter(field)}
        >Clear all</button>

        <div class="filter-section">
          <ap-radio-group
            .options=${EMPTY_OPTIONS}
            .value=${currentValue}
            @ap-change=${(e: CustomEvent) => this._onEmptyOption(field, e.detail.value)}
          ></ap-radio-group>
        </div>
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
      <div class="filter-content" style="position: relative;">
        <button
          class="clear-btn"
          ?disabled=${values.length === 0}
          @click=${() => this._clearFieldFilter(field)}
        >Clear all</button>

        <div class="filter-section">
          <span class="section-label">Condition</span>
          <ap-radio-group
            direction="horizontal"
            .options=${SINGLE_SELECT_OPERATOR_OPTIONS}
            .value=${operator}
            @ap-change=${(e: CustomEvent) => this._emitFilterChange(field, e.detail.value, values)}
          ></ap-radio-group>
          <input
            class="filter-input"
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
      </div>
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

  // ── Selector mode render ─────────────────────────────────────────

  private _renderSelectorMode() {
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
          const isVisible = this.visibleFields.includes(prefixedKey);
          const hasFilter = !!this.appliedMetadata[prefixedKey] || !!this.appliedFilters[prefixedKey];
          const isPinned = this.pinnedFields.includes(prefixedKey);
          const isDisabled = !isVisible && this._atFieldLimit;
          return html`
            <div
              class="field-item ${hasFilter ? 'has-filter' : ''} ${isDisabled ? 'disabled' : ''}"
              @click=${() => !isDisabled && this._emitFieldSelect(field)}
            >
              <span class="field-item-label">${field.label}</span>
              <button
                class="field-item-pin ${isPinned ? 'pinned' : ''}"
                @click=${(e: Event) => {
                  e.stopPropagation();
                  this._emitPin(prefixedKey, !isPinned);
                }}
                title=${isPinned ? 'Unpin field' : 'Pin field'}
              >
                <ap-icon name="pin" .size=${12}></ap-icon>
              </button>
              ${hasFilter
                ? html`<ap-icon name="check" .size=${14}></ap-icon>`
                : nothing}
            </div>
          `;
        })}
      `;
    };

    return html`
      <div class="selector-wrap">
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

  // ── Field mode render ──────────────────────────────────────────

  private _renderFieldMode() {
    const field = this._getField(this.activeFieldKey);
    if (!field) return html`<div class="empty-msg">Field not found</div>`;
    return this._renderFieldControl(field);
  }

  // ── Main render ──────────────────────────────────────────────────

  render() {
    // Selector mode: just field list for picking a field
    if (this.mode === 'selector') {
      return this._renderSelectorMode();
    }

    // Field mode: single field filter
    if (this.mode === 'field') {
      return this._renderFieldMode();
    }

    // Full mode (original behavior)
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
