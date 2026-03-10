import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import {
  METADATA_PREFIXES,
  type Filters,
  type MetadataFilters,
  type AnyFilterKey,
  type AnyFilter,
  type StringFilter,
  type DateFilter,
  type MetadataModelField,
} from '../../types/filter.types';
import { FILTER_LABELS } from './filters.constants';

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
    .chip-label {
      font-weight: 500;
    }
    .chip-summary {
      opacity: 0.8;
      max-width: 120px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .chip-actions {
      display: flex;
      align-items: center;
      gap: 2px;
    }
    .chip-btn {
      display: flex;
      align-items: center;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
      color: inherit;
      opacity: 0.7;
      transition: opacity 150ms;
    }
    .chip-btn:hover {
      opacity: 1;
    }
    .chip-btn.pinned {
      opacity: 1;
      color: var(--ap-primary, oklch(0.65 0.19 258));
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
  `;

  @property({ type: Object }) appliedFilters: Filters = {};
  @property({ type: Object }) appliedMetadata: MetadataFilters = {};
  @property({ type: Array }) pinnedFilters: AnyFilterKey[] = [];
  @property({ type: Array }) pinnedMetadata: string[] = [];
  @property({ type: Array }) metadataFields: MetadataModelField[] = [];

  private _getFilterSummary(filter: AnyFilter): string {
    if (filter.type === 'string') {
      const sf = filter as StringFilter;
      if (sf.values.length === 0) return '';
      if (sf.values.length === 1) return sf.values[0];
      return `${sf.values[0]} +${sf.values.length - 1}`;
    }
    if (filter.type === 'date') {
      const df = filter as DateFilter;
      if (df.preset) return df.preset;
      if (df.from && df.to) return `${df.from} - ${df.to}`;
      if (df.from) return `after ${df.from}`;
      if (df.to) return `before ${df.to}`;
      return '';
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

  private _togglePin(key: AnyFilterKey) {
    const pinned = this.pinnedFilters.includes(key);
    this.dispatchEvent(new CustomEvent('filter-pin', {
      detail: { key, pinned: !pinned },
      bubbles: true,
      composed: true,
    }));
  }

  private _toggleMetadataPin(fieldKey: string) {
    const pinned = this.pinnedMetadata.includes(fieldKey);
    this.dispatchEvent(new CustomEvent('metadata-pin', {
      detail: { fieldKey, pinned: !pinned },
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

  render() {
    const filterEntries = Object.entries(this.appliedFilters) as [AnyFilterKey, AnyFilter][];
    const metadataEntries = Object.entries(this.appliedMetadata) as [string, AnyFilter][];
    const totalCount = filterEntries.length + metadataEntries.length;

    if (totalCount === 0) return nothing;

    return html`
      <div class="chips-row">
        <div class="chips">
          ${filterEntries.map(([key, filter]) => {
            const isPinned = this.pinnedFilters.includes(key);
            const summary = this._getFilterSummary(filter);
            return html`
              <span class="chip">
                <span class="chip-label">${FILTER_LABELS[key] || key}</span>
                ${summary ? html`<span class="chip-summary">${summary}</span>` : nothing}
                <span class="chip-actions">
                  <button
                    class="chip-btn ${isPinned ? 'pinned' : ''}"
                    @click=${(e: Event) => { e.stopPropagation(); this._togglePin(key); }}
                    title=${isPinned ? 'Unpin filter' : 'Pin filter'}
                  >
                    <ap-icon name=${isPinned ? 'pin-off' : 'pin'} .size=${12}></ap-icon>
                  </button>
                  <button class="chip-btn" @click=${() => this._removeFilter(key)}>
                    <ap-icon name="close" .size=${12}></ap-icon>
                  </button>
                </span>
              </span>
            `;
          })}
          ${metadataEntries.map(([fieldKey, filter]) => {
            const isPinned = this.pinnedMetadata.includes(fieldKey);
            const summary = this._getFilterSummary(filter);
            const label = this._getMetadataLabel(fieldKey);
            return html`
              <span class="chip">
                <span class="chip-label">${label}</span>
                ${summary ? html`<span class="chip-summary">${summary}</span>` : nothing}
                <span class="chip-actions">
                  <button
                    class="chip-btn ${isPinned ? 'pinned' : ''}"
                    @click=${(e: Event) => { e.stopPropagation(); this._toggleMetadataPin(fieldKey); }}
                    title=${isPinned ? 'Unpin filter' : 'Pin filter'}
                  >
                    <ap-icon name=${isPinned ? 'pin-off' : 'pin'} .size=${12}></ap-icon>
                  </button>
                  <button class="chip-btn" @click=${() => this._removeMetadataFilter(fieldKey)}>
                    <ap-icon name="close" .size=${12}></ap-icon>
                  </button>
                </span>
              </span>
            `;
          })}
        </div>
        ${totalCount > 1
          ? html`<button class="clear-all" @click=${this._clearAll}>Clear all</button>`
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
