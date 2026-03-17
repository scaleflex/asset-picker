import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import {
  FILTER_KEYS,
  METADATA_PREFIXES,
  type Filters,
  type MetadataFilters,
  type AnyFilterKey,
  type AnyFilter,
  type StringFilter,
  type DateFilter,
  type MetadataModelField,
} from '../../types/filter.types';
import type { TagWithLabel } from '../../types/tag.types';
import type { Label } from '../../types/label.types';
import { FILTER_LABELS, DATE_FIELD_OPTIONS, DATE_RANGE_OPTIONS, LICENSE_DATE_RANGE_OPTIONS, ASSET_TYPE_OPTIONS } from './filters.constants';

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
      padding: 0 20px 8px;
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
      padding: 4px 12px;
      border: 1px solid var(--ap-primary-20, oklch(0.65 0.19 258 / 0.25));
      border-radius: 9999px;
      font-size: 0.8125rem;
      background: var(--ap-primary-10, oklch(0.65 0.19 258 / 0.1));
      color: var(--ap-primary, oklch(0.65 0.19 258));
      cursor: pointer;
      white-space: nowrap;
      transition: all 150ms;
    }
    .chip:hover {
      background: var(--ap-primary-10, oklch(0.65 0.19 258 / 0.15));
    }
    .chip.active {
      background: var(--ap-primary-20, oklch(0.65 0.19 258 / 0.2));
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
      padding: 4px 10px;
      border: none;
      border-radius: 6px;
      font-size: 0.8125rem;
      background: none;
      color: var(--ap-muted-foreground, #71717a);
      cursor: pointer;
      white-space: nowrap;
      transition: all 150ms;
    }
    .clear-all:hover {
      background: var(--ap-muted, #f4f4f5);
      color: var(--ap-foreground, #09090b);
    }
    .chip.pinned-empty {
      border-style: dashed;
      background: transparent;
      color: var(--ap-muted-foreground, #71717a);
      border-color: var(--ap-border, #e4e4e7);
    }
    .chip.pinned-empty:hover {
      background: var(--ap-muted, #f4f4f5);
      color: var(--ap-foreground, #09090b);
      border-color: var(--ap-muted-foreground, #a1a1aa);
    }
    .chip.pinned-empty.active {
      border-style: solid;
      background: var(--ap-primary-10, oklch(0.65 0.19 258 / 0.1));
      color: var(--ap-primary, oklch(0.65 0.19 258));
      border-color: var(--ap-primary-20, oklch(0.65 0.19 258 / 0.25));
    }
  `;

  @property({ type: Object }) appliedFilters: Filters = {};
  @property({ type: Object }) appliedMetadata: MetadataFilters = {};
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

  private _getMetadataLabel(fieldKey: string): string {
    // fieldKey is prefixed (e.g. "text_description"), so strip prefix to match field.key
    const strippedKey = this._stripMetadataPrefix(fieldKey);
    const field = this.metadataFields.find((f) => f.key === strippedKey);
    return field?.label || strippedKey;
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

  private _renderFilterChip(key: AnyFilterKey, filter: AnyFilter | undefined) {
    if (!filter) {
      // Empty pinned chip
      return html`
        <span class="chip pinned-empty ${key === this.activeFilter ? 'active' : ''}" @click=${(e: Event) => this._openFilter(key, e)}>
          <span class="chip-label">${FILTER_LABELS[key] || key}</span>
        </span>
      `;
    }
    // Applied chip
    const summary = this._getFilterSummary(filter, key);
    const isDate = filter.type === 'date';
    return html`
      <span class="chip ${key === this.activeFilter ? 'active' : ''}" @click=${(e: Event) => this._openFilter(key, e)}>
        ${(isDate || key === FILTER_KEYS.TYPE || key === FILTER_KEYS.SIZE) && summary
          ? html`<span class="chip-label">${summary}</span>`
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
      return html`
        <span class="chip pinned-empty ${fieldKey === this.activeMetadataField ? 'active' : ''}" @click=${(e: Event) => this._openMetadataFilter(fieldKey, e)}>
          <span class="chip-label">${label}</span>
        </span>
      `;
    }
    // Applied chip
    const summary = this._getFilterSummary(filter);
    const label = this._getMetadataLabel(fieldKey);
    return html`
      <span class="chip ${fieldKey === this.activeMetadataField ? 'active' : ''}" @click=${(e: Event) => this._openMetadataFilter(fieldKey, e)}>
        <span class="chip-label">${label}</span>
        ${summary ? html`<span class="chip-summary">${summary}</span>` : nothing}
        <button class="chip-remove" @click=${(e: Event) => { e.stopPropagation(); this._removeMetadataFilter(fieldKey); }} title="Remove filter">
          <ap-icon name="close" .size=${12}></ap-icon>
        </button>
      </span>
    `;
  }

  render() {
    const appliedKeys = Object.keys(this.appliedFilters) as AnyFilterKey[];
    const appliedMetaKeys = Object.keys(this.appliedMetadata);

    // Build ordered list: pinned filters first (preserving their position),
    // then non-pinned applied filters, then pending chip
    const pinnedSet = new Set(this.pinnedFilters);
    const pinnedMetaSet = new Set(this.pinnedMetadataFields);

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
    const totalCount = this.pinnedFilters.length + this.pinnedMetadataFields.length
      + nonPinnedApplied.length + nonPinnedMetaApplied.length
      + (hasPending ? 1 : 0) + (hasPendingMeta ? 1 : 0);

    if (totalCount === 0) return nothing;

    return html`
      <div class="chips-row">
        <div class="chips">
          ${this.pinnedFilters.map((key) =>
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
              <span class="chip-label">${FILTER_LABELS[this.pendingFilter!] || this.pendingFilter}</span>
            </span>
          ` : nothing}
          ${nonPinnedMetaApplied.map((fieldKey) =>
            this._renderMetadataChip(fieldKey, this.appliedMetadata[fieldKey])
          )}
          ${hasPendingMeta ? html`
            <span class="chip pinned-empty active pending" @click=${(e: Event) => this._openMetadataFilter(this.pendingMetadataField!, e)}>
              <span class="chip-label">${this._getMetadataLabel(this.pendingMetadataField!)}</span>
            </span>
          ` : nothing}
        </div>
        ${hasApplied
          ? html`<button class="clear-all" @click=${this._clearAll}>Clear filters</button>`
          : nothing}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ap-filters-bar': ApFiltersBar;
  }
}
