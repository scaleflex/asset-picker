import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import {
  FILTER_KEYS,
  METADATA_PREFIXES,
  type Filters,
  type FiltersInput,
  type MetadataFilters,
  type AnyFilterKey,
  type AnyFilter,
  type StringFilter,
  type DateFilter,
  type MetadataModelField,
} from '../../types/filter.types';
import type { TagWithLabel } from '../../types/tag.types';
import type { Label } from '../../types/label.types';
import { FILTER_LABELS, ALL_FILTER_ITEMS, DATE_FIELD_OPTIONS, DATE_RANGE_OPTIONS, LICENSE_DATE_RANGE_OPTIONS, ASSET_TYPE_OPTIONS, METADATA_FIELD_TYPE_ICONS } from './filters.constants';
import { normalizeFilters } from '../../utils/filter-normalize';

@customElement('ap-filters-bar')
export class ApFiltersBar extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    :host([hidden]) {
      display: none;
    }
    .chips-row {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 0 20px 16px;
    }
    .chips {
      display: flex;
      align-items: center;
      gap: 8px;
      overflow-x: auto;
      scrollbar-width: none;
      min-width: 0;
      flex: 1;
    }
    .chips::-webkit-scrollbar {
      display: none;
    }
    .chip {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      height: 32px;
      padding: 0 12px;
      border: 1px solid var(--ap-primary-20, oklch(0.578 0.198 268.129 / 0.2));
      border-radius: 6px;
      font-size: 0.8125rem;
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.1));
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
      cursor: pointer;
      white-space: nowrap;
      transition: all 150ms;
    }
    .chip:hover {
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.15));
    }
    .chip.active {
      background: var(--ap-primary-20, oklch(0.578 0.198 268.129 / 0.2));
    }
    .chip-label {
      font-weight: 500;
    }
    .chip-summary {
      opacity: 0.8;
      max-width: 120px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .chip-remove {
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
      border: none;
      cursor: pointer;
      padding: 2px;
      color: inherit;
      opacity: 0.7;
      transition: opacity 150ms;
      border-radius: 4px;
      margin-left: 4px;
    }
    .chip-remove:hover {
      opacity: 1;
    }
    .clear-all {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      height: 34px;
      padding: 0 10px;
      border: none;
      border-radius: 6px;
      font-size: 0.8125rem;
      background: none;
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      cursor: pointer;
      white-space: nowrap;
      transition: all 150ms;
    }
    .clear-all:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    .chip.forced {
      cursor: default;
      opacity: 0.85;
    }
    .chip.forced:hover {
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.1));
    }
    .chip-lock {
      display: flex;
      align-items: center;
      color: inherit;
      opacity: 0.6;
      margin-left: 4px;
    }
    .chip.pinned-empty {
      height: 32px;
      padding: 0 12px;
      gap: 6px;
      border-style: solid;
      border-radius: 6px;
      background: transparent;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      border-color: var(--ap-input, oklch(0.871 0.016 241.798));
      font-weight: 400;
    }
    .chip .chip-icon {
      display: flex;
      align-items: center;
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .chip.pinned-empty .chip-icon {
      display: flex;
      align-items: center;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }
    .chip.pinned-empty:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      border-color: var(--ap-input, oklch(0.871 0.016 241.798));
    }
    .chip.pinned-empty:hover .chip-icon {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }
    .chip.pinned-empty.active {
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.1));
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
      border-color: var(--ap-primary-20, oklch(0.578 0.198 268.129 / 0.2));
    }
    .chip.pinned-empty.active .chip-icon {
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .chip-chevron {
      display: flex;
      align-items: center;
      opacity: 0.6;
    }
  `;

  @property({ type: Object }) appliedFilters: Filters = {};
  @property({ type: Object }) appliedMetadata: MetadataFilters = {};
  @property({ type: Object }) forcedFilters: FiltersInput = {};
  @property({ type: Array }) metadataFields: MetadataModelField[] = [];
  @property({ type: Array }) pinnedFilters: AnyFilterKey[] = [];
  @property({ type: Array }) pinnedMetadataFields: string[] = [];
  @property({ type: Array }) tags: TagWithLabel[] = [];
  @property({ type: Array }) labels: Label[] = [];
  @property() activeFilter: AnyFilterKey | null = null;
  @property() activeMetadataField: string | null = null;
  @property() pendingFilter: AnyFilterKey | null = null;
  @property() pendingMetadataField: string | null = null;

  private _mapTypeLabel(value: string): string {
    return ASSET_TYPE_OPTIONS.find((o) => o.value === value)?.label || value;
  }

  private _getSizeSummary(sf: StringFilter): string {
    if (sf.values.length === 0) return '';
    const raw = sf.values[0];
    const [minStr, maxStr] = raw.split('..');
    const min = minStr ? parseFloat(minStr) : null;
    const max = maxStr ? parseFloat(maxStr) : null;
    const fmt = (v: number) => v >= 1000 ? `${(v / 1000).toFixed(v % 1000 === 0 ? 0 : 1)} GB` : `${v} MB`;
    if (min !== null && max !== null) return `${fmt(min)} – ${fmt(max)}`;
    if (min !== null) return `> ${fmt(min)}`;
    if (max !== null) return `< ${fmt(max)}`;
    return '';
  }

  private _getFilterSummary(filter: AnyFilter, key?: AnyFilterKey): string {
    if (filter.type === 'string') {
      const sf = filter as StringFilter;
      if (sf.values.length === 0) return '';
      if (key === FILTER_KEYS.SIZE) return this._getSizeSummary(sf);
      if (key === FILTER_KEYS.COLOR) {
        // Color values are like "#FF0000 1 1 20" — extract just the hex
        const hexes = sf.values.map((v) => v.split(' ')[0]).filter(Boolean);
        if (hexes.length === 0) return '';
        if (hexes.length === 1) return hexes[0];
        return `${hexes[0]} +${hexes.length - 1}`;
      }
      const mapLabel = key === FILTER_KEYS.TYPE
        ? (v: string) => this._mapTypeLabel(v)
        : key === FILTER_KEYS.TAGS
          ? (v: string) => this.tags.find((t) => t.sid === v)?.label || v
          : key === FILTER_KEYS.LABELS
            ? (v: string) => this.labels.find((l) => l.sid === v)?.name || v
            : (v: string) => v;
      if (sf.values.length === 1) return mapLabel(sf.values[0]);
      return `${mapLabel(sf.values[0])} +${sf.values.length - 1}`;
    }
    if (filter.type === 'date') {
      return this._getDateSummary(filter as DateFilter);
    }
    // Image filter: object with { resolution, orientation, faces }
    if (typeof filter === 'object' && 'resolution' in filter) {
      const img = filter as unknown as { resolution: string[]; orientation: string[]; faces: string[] };
      const parts = [
        ...img.resolution,
        ...img.orientation,
        ...img.faces,
      ];
      if (parts.length === 0) return '';
      if (parts.length === 1) return parts[0];
      return `${parts[0]} +${parts.length - 1}`;
    }
    return '';
  }

  private _getDateSummary(df: DateFilter): string {
    const fieldLabel = DATE_FIELD_OPTIONS.find((o) => o.value === df.field)?.label || df.field;
    const allRangeOptions = [...DATE_RANGE_OPTIONS, ...LICENSE_DATE_RANGE_OPTIONS];
    const presetLabel = df.preset
      ? allRangeOptions.find((o) => o.value === df.preset)?.label || df.preset
      : '';

    const formatDate = (iso: string) => {
      try { return iso.split('T')[0]; } catch { return iso; }
    };

    let value = '';
    switch (df.kind) {
      case 'preset':
        value = presetLabel;
        break;
      case 'before':
        value = df.to ? `Before ${formatDate(df.to)}` : presetLabel;
        break;
      case 'after':
        value = df.from ? `After ${formatDate(df.from)}` : presetLabel;
        break;
      case 'between':
        if (df.from && df.to) {
          value = `${formatDate(df.from)} – ${formatDate(df.to)}`;
        } else if (df.from) {
          value = `After ${formatDate(df.from)}`;
        } else if (df.to) {
          value = `Before ${formatDate(df.to)}`;
        }
        break;
      case 'specific':
        value = df.from ? formatDate(df.from) : '';
        break;
      default:
        value = presetLabel;
    }

    if (!value) return '';
    return `${fieldLabel}: ${value}`;
  }

  private _getFilterIcon(key: AnyFilterKey): string {
    return ALL_FILTER_ITEMS.find((i) => i.key === key)?.icon || 'filter';
  }

  private _getMetadataLabel(fieldKey: string): string {
    // fieldKey is prefixed (e.g. "text_description"), so strip prefix to match field.key
    const strippedKey = this._stripMetadataPrefix(fieldKey);
    const field = this.metadataFields.find((f) => f.key === strippedKey);
    return field?.label || strippedKey;
  }

  private _getMetadataIcon(fieldKey: string): string {
    const strippedKey = this._stripMetadataPrefix(fieldKey);
    const field = this.metadataFields.find((f) => f.key === strippedKey);
    return (field && METADATA_FIELD_TYPE_ICONS[field.type]) || 'file-text';
  }

  private _stripMetadataPrefix(key: string): string {
    for (const p of METADATA_PREFIXES) {
      if (key.startsWith(p)) return key.slice(p.length);
    }
    return key;
  }

  private _removeFilter(key: AnyFilterKey) {
    this.dispatchEvent(new CustomEvent('filter-remove', {
      detail: { key },
      bubbles: true,
      composed: true,
    }));
  }

  private _removeMetadataFilter(fieldKey: string) {
    this.dispatchEvent(new CustomEvent('metadata-filter-remove', {
      detail: { fieldKey },
      bubbles: true,
      composed: true,
    }));
  }

  private _clearAll() {
    this.dispatchEvent(new CustomEvent('filters-clear-all', {
      bubbles: true,
      composed: true,
    }));
  }

  private _openFilter(key: AnyFilterKey, e: Event) {
    const chip = e.currentTarget as HTMLElement;
    const rect = chip.getBoundingClientRect();
    this.dispatchEvent(new CustomEvent('filter-open', {
      detail: { key, chipRect: { left: rect.left, right: rect.right, bottom: rect.bottom, width: rect.width } },
      bubbles: true,
      composed: true,
    }));
  }

  private _openMetadataFilter(fieldKey: string, e: Event) {
    const chip = e.currentTarget as HTMLElement;
    const rect = chip.getBoundingClientRect();
    this.dispatchEvent(new CustomEvent('metadata-filter-open', {
      detail: { fieldKey, chipRect: { left: rect.left, right: rect.right, bottom: rect.bottom, width: rect.width } },
      bubbles: true,
      composed: true,
    }));
  }

  private _renderForcedChip(key: AnyFilterKey, filter: AnyFilter) {
    const summary = this._getFilterSummary(filter, key);
    const isDate = filter.type === 'date';
    return html`
      <span class="chip forced">
        ${(isDate || key === FILTER_KEYS.TYPE || key === FILTER_KEYS.SIZE) && summary
          ? html`<span class="chip-label">${summary}</span>`
          : html`
              <span class="chip-label">${FILTER_LABELS[key] || key}</span>
              ${summary ? html`<span class="chip-summary">${summary}</span>` : nothing}
            `}
        <span class="chip-lock">
          <ap-icon name="lock" .size=${12}></ap-icon>
        </span>
      </span>
    `;
  }

  private _renderFilterChip(key: AnyFilterKey, filter: AnyFilter | undefined) {
    if (!filter) {
      // Empty pinned chip
      return html`
        <span class="chip pinned-empty ${key === this.activeFilter ? 'active' : ''}" @click=${(e: Event) => this._openFilter(key, e)}>
          <span class="chip-icon"><ap-icon name=${this._getFilterIcon(key)} .size=${16}></ap-icon></span>
          <span class="chip-label">${FILTER_LABELS[key] || key}</span>
          <span class="chip-chevron"><ap-icon name="chevron-down" .size=${14}></ap-icon></span>
        </span>
      `;
    }
    // Applied chip
    const summary = this._getFilterSummary(filter, key);
    const isDate = filter.type === 'date';
    return html`
      <span class="chip ${key === this.activeFilter ? 'active' : ''}" @click=${(e: Event) => this._openFilter(key, e)}>
        ${(isDate || key === FILTER_KEYS.TYPE || key === FILTER_KEYS.SIZE) && summary
          ? html`
              <span class="chip-icon"><ap-icon name=${this._getFilterIcon(key)} .size=${16}></ap-icon></span>
              <span class="chip-label">${summary}</span>`
          : html`
              <span class="chip-label">${FILTER_LABELS[key] || key}</span>
              ${summary ? html`<span class="chip-summary">${summary}</span>` : nothing}
            `}
        <button class="chip-remove" @click=${(e: Event) => { e.stopPropagation(); this._removeFilter(key); }} title="Remove filter">
          <ap-icon name="close" .size=${12}></ap-icon>
        </button>
      </span>
    `;
  }

  private _renderMetadataChip(fieldKey: string, filter: AnyFilter | undefined) {
    if (!filter) {
      // Empty pinned chip
      const label = this._getMetadataLabel(fieldKey);
      const icon = this._getMetadataIcon(fieldKey);
      return html`
        <span class="chip pinned-empty ${fieldKey === this.activeMetadataField ? 'active' : ''}" @click=${(e: Event) => this._openMetadataFilter(fieldKey, e)}>
          <span class="chip-icon"><ap-icon name=${icon} .size=${16}></ap-icon></span>
          <span class="chip-label">${label}</span>
          <span class="chip-chevron"><ap-icon name="chevron-down" .size=${14}></ap-icon></span>
        </span>
      `;
    }
    // Applied chip
    const summary = this._getFilterSummary(filter);
    const label = this._getMetadataLabel(fieldKey);
    const icon = this._getMetadataIcon(fieldKey);
    return html`
      <span class="chip ${fieldKey === this.activeMetadataField ? 'active' : ''}" @click=${(e: Event) => this._openMetadataFilter(fieldKey, e)}>
        <span class="chip-icon"><ap-icon name=${icon} .size=${16}></ap-icon></span>
        <span class="chip-label">${label}</span>
        ${summary ? html`<span class="chip-summary">${summary}</span>` : nothing}
        <button class="chip-remove" @click=${(e: Event) => { e.stopPropagation(); this._removeMetadataFilter(fieldKey); }} title="Remove filter">
          <ap-icon name="close" .size=${12}></ap-icon>
        </button>
      </span>
    `;
  }

  render() {
    const normalizedForced = normalizeFilters(this.forcedFilters);
    const forcedKeys = new Set(Object.keys(normalizedForced) as AnyFilterKey[]);
    const appliedKeys = (Object.keys(this.appliedFilters) as AnyFilterKey[]).filter((k) => !forcedKeys.has(k));
    const appliedMetaKeys = Object.keys(this.appliedMetadata);

    // Build ordered list: forced chips first, then pinned filters,
    // then non-pinned applied filters, then pending chip
    const pinnedSet = new Set(this.pinnedFilters);
    const pinnedMetaSet = new Set(this.pinnedMetadataFields);

    // Exclude forced keys from pinned rendering
    const pinnedFiltersFiltered = this.pinnedFilters.filter((k) => !forcedKeys.has(k));

    // Non-pinned applied filters (appear after all pinned)
    const nonPinnedApplied = appliedKeys.filter((k) => !pinnedSet.has(k));
    const nonPinnedMetaApplied = appliedMetaKeys.filter((k) => !pinnedMetaSet.has(k));

    // Include pending filter as a temporary empty chip (if not already shown)
    const hasPending = this.pendingFilter
      && !pinnedSet.has(this.pendingFilter as AnyFilterKey)
      && !(this.pendingFilter in this.appliedFilters);
    const hasPendingMeta = this.pendingMetadataField
      && !pinnedMetaSet.has(this.pendingMetadataField)
      && !(this.pendingMetadataField in this.appliedMetadata);

    const hasApplied = appliedKeys.length + appliedMetaKeys.length > 0;
    const totalCount = forcedKeys.size + pinnedFiltersFiltered.length + this.pinnedMetadataFields.length
      + nonPinnedApplied.length + nonPinnedMetaApplied.length
      + (hasPending ? 1 : 0) + (hasPendingMeta ? 1 : 0);

    if (totalCount === 0) return nothing;

    return html`
      <div class="chips-row">
        <div class="chips">
          ${[...forcedKeys].map((key) =>
            this._renderForcedChip(key, normalizedForced[key]!)
          )}
          ${pinnedFiltersFiltered.map((key) =>
            this._renderFilterChip(key, this.appliedFilters[key])
          )}
          ${this.pinnedMetadataFields.map((fieldKey) =>
            this._renderMetadataChip(fieldKey, this.appliedMetadata[fieldKey])
          )}
          ${nonPinnedApplied.map((key) =>
            this._renderFilterChip(key, this.appliedFilters[key])
          )}
          ${hasPending ? html`
            <span class="chip pinned-empty active pending" @click=${(e: Event) => this._openFilter(this.pendingFilter!, e)}>
              <span class="chip-icon"><ap-icon name=${this._getFilterIcon(this.pendingFilter!)} .size=${16}></ap-icon></span>
              <span class="chip-label">${FILTER_LABELS[this.pendingFilter!] || this.pendingFilter}</span>
              <span class="chip-chevron"><ap-icon name="chevron-down" .size=${14}></ap-icon></span>
            </span>
          ` : nothing}
          ${nonPinnedMetaApplied.map((fieldKey) =>
            this._renderMetadataChip(fieldKey, this.appliedMetadata[fieldKey])
          )}
          ${hasPendingMeta ? html`
            <span class="chip pinned-empty active pending" @click=${(e: Event) => this._openMetadataFilter(this.pendingMetadataField!, e)}>
              <span class="chip-icon"><ap-icon name=${this._getMetadataIcon(this.pendingMetadataField!)} .size=${16}></ap-icon></span>
              <span class="chip-label">${this._getMetadataLabel(this.pendingMetadataField!)}</span>
              <span class="chip-chevron"><ap-icon name="chevron-down" .size=${14}></ap-icon></span>
            </span>
          ` : nothing}
          ${hasApplied
            ? html`<button class="clear-all" @click=${this._clearAll}>Clear filters</button>`
            : nothing}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ap-filters-bar': ApFiltersBar;
  }
}
