import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';
import type { SortBy, SortDirection } from '../../types/config.types';
import type {
  FiltersState,
  FilterKey,
  AnyFilterKey,
  StringFilter,
  DateFilter,
  MetadataModelField,
  FilterItemConfig,
} from '../../types/filter.types';
import type { Label } from '../../types/label.types';
import {
  FILTER_LABELS,
  ALL_FILTER_ITEMS,
} from '../filters/filters.constants';
import { MAIN_SORT_OPTIONS, type SortOption } from './sort.constants';

import '../filters/ap-filter-popover';
import '../filters/ap-filter-type';
import '../filters/ap-filter-date';
import '../filters/ap-filter-tags';
import '../filters/ap-filter-labels';
import '../filters/ap-filter-color';
import '../filters/ap-filter-size';
import '../filters/ap-filter-image';
import '../filters/ap-filter-metadata';
import '../filters/ap-filter-approval';

@customElement('ap-content-toolbar')
export class ApContentToolbar extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 8px 20px 0;
    }
    .toolbar-row {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .count {
      font-size: 0.8125rem;
      color: var(--ap-muted-foreground, #71717a);
      white-space: nowrap;
    }
    .count-skeleton {
      display: inline-block;
      width: 80px;
      height: 14px;
      border-radius: 4px;
      background: linear-gradient(90deg, var(--ap-muted, #f4f4f5) 25%, #e8e8ea 50%, var(--ap-muted, #f4f4f5) 75%);
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
    }
    @keyframes shimmer {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
    @media (prefers-reduced-motion: reduce) {
      .count-skeleton { animation: none; }
    }
    .spacer {
      flex: 1;
    }
    .controls {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    /* Filter dropdown trigger */
    .filter-dropdown {
      position: relative;
      display: inline-block;
    }
    .add-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 14px;
      border: none;
      border-radius: 6px;
      font-size: 0.875rem;
      font-weight: 500;
      background: none;
      color: var(--ap-primary, oklch(0.65 0.19 258));
      cursor: pointer;
      white-space: nowrap;
      transition: background 150ms;
    }
    .add-btn:hover {
      background: var(--ap-primary-10, oklch(0.65 0.19 258 / 0.08));
    }
    .add-btn ap-icon {
      transition: transform 200ms;
    }
    .add-btn.open ap-icon:last-child {
      transform: rotate(180deg);
    }
    .add-btn .filter-count {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 18px;
      height: 18px;
      padding: 0 5px;
      border-radius: 9px;
      background: var(--ap-primary, oklch(0.65 0.19 258));
      color: var(--ap-primary-foreground, #fff);
      font-size: 0.6875rem;
      font-weight: 600;
      line-height: 1;
    }
    .dropdown-menu {
      position: absolute;
      top: calc(100% + 4px);
      right: 0;
      z-index: 50;
      min-width: 480px;
      background: var(--ap-card, #fff);
      border: 1px solid var(--ap-border, #e4e4e7);
      border-radius: var(--ap-radius, 8px);
      box-shadow: 0 10px 25px -5px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
      padding: 16px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }

    /* Filter button in dropdown */
    .filter-btn {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 12px;
      border: 1px solid var(--ap-border, #e4e4e7);
      border-radius: var(--ap-radius, 8px);
      background: var(--ap-background, #fff);
      color: var(--ap-foreground, #09090b);
      font-size: 0.9375rem;
      cursor: pointer;
      transition: all 150ms;
      min-height: 40px;
      box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    }
    .filter-btn:hover {
      background: var(--ap-muted, #f4f4f5);
      border-color: var(--ap-muted-foreground, #a1a1aa);
    }
    .filter-btn.active {
      background: var(--ap-primary-10, oklch(0.65 0.19 258 / 0.08));
      border-color: var(--ap-primary-20, oklch(0.65 0.19 258 / 0.25));
      color: var(--ap-foreground, #09090b);
    }
    .filter-btn.active:hover {
      background: var(--ap-primary-10, oklch(0.65 0.19 258 / 0.12));
    }
    .filter-btn-icon {
      display: flex;
      align-items: center;
      color: var(--ap-muted-foreground, #71717a);
      flex-shrink: 0;
    }
    .filter-btn.active .filter-btn-icon {
      color: var(--ap-primary, oklch(0.65 0.19 258));
    }
    .filter-btn-label {
      display: flex;
      align-items: center;
      gap: 4px;
      flex: 1;
      min-width: 0;
    }
    .filter-btn-label ap-icon {
      color: var(--ap-muted-foreground, #71717a);
    }

    .divider {
      width: 1px;
      height: 24px;
      background: var(--ap-border, #e4e4e7);
    }
    .icon-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      border: 1px solid transparent;
      border-radius: var(--ap-radius-sm, 6px);
      background: none;
      color: var(--ap-muted-foreground, #71717a);
      cursor: pointer;
    }
    .icon-btn:hover {
      background: var(--ap-muted, #f4f4f5);
      color: var(--ap-foreground, #09090b);
    }
    .icon-btn:focus-visible {
      outline: 2px solid var(--ap-ring, oklch(0.65 0.19 258));
      outline-offset: -2px;
    }

    .popover-wrapper {
      position: relative;
    }
  `;

  @property({ type: Number }) totalCount = 0;
  @property({ type: Number }) totalFolderCount = 0;
  @property({ type: Boolean }) isLoading = false;
  @property() sortBy: SortBy = 'created_at';
  @property() sortDirection: SortDirection = 'desc';
  @property({ type: Array }) sortOptions: SortOption[] = MAIN_SORT_OPTIONS;
  @property({ type: Object }) filters: FiltersState = {
    metadata: { pinned: [], visible: [], applied: {} },
    pinned: [],
    visible: [],
    applied: {},
  };
  @property({ type: Array }) labels: Label[] = [];
  @property({ type: Array }) metadataFields: MetadataModelField[] = [];

  @query('ap-dropdown') private _sortDropdown?: import('../shared/ap-dropdown').ApDropdown;
  @query('.filter-dropdown') private _filterDropdownEl?: HTMLElement;
  @state() private _showDropdown = false;
  @state() private _openFilter: FilterKey | null = null;

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('click', this._handleOutsideClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('click', this._handleOutsideClick);
  }

  private _handleOutsideClick = (e: Event) => {
    const path = e.composedPath();
    if (this._showDropdown && this._filterDropdownEl && !path.includes(this._filterDropdownEl)) {
      this._showDropdown = false;
    }
    if (this._openFilter && !path.includes(this)) {
      this._openFilter = null;
    }
  };

  private _closeAllDropdowns() {
    this._showDropdown = false;
    this._openFilter = null;
    this._sortDropdown?.close();
  }

  private _toggleDropdown() {
    const wasOpen = this._showDropdown;
    this._closeAllDropdowns();
    this._showDropdown = !wasOpen;
  }

  private _selectFilterKey(key: FilterKey) {
    this._closeAllDropdowns();
    this._openFilter = key;
  }

  private _handleSortOpen() {
    this._showDropdown = false;
    this._openFilter = null;
  }

  private _handleSort(e: CustomEvent) {
    this.dispatchEvent(new CustomEvent('sort-change', { detail: e.detail, bubbles: true, composed: true }));
  }

  private _toggleSortDirection() {
    const newDir = this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.dispatchEvent(new CustomEvent('sort-direction-change', { detail: { value: newDir }, bubbles: true, composed: true }));
  }

  private _isFilterActive(key: AnyFilterKey): boolean {
    return key in this.filters.applied && this.filters.applied[key] !== undefined;
  }

  private _handleFilterChange(e: CustomEvent) {
    e.stopPropagation();
    const { key, values, operator } = e.detail;
    this.dispatchEvent(new CustomEvent('filter-update', {
      detail: { key, values, operator },
      bubbles: true,
      composed: true,
    }));
  }

  private _handleMetadataFilterChange(e: CustomEvent) {
    e.stopPropagation();
    this.dispatchEvent(new CustomEvent('metadata-filter-change', {
      detail: e.detail,
      bubbles: true,
      composed: true,
    }));
  }

  private _handleMetadataFieldToggle(e: CustomEvent) {
    e.stopPropagation();
    this.dispatchEvent(new CustomEvent('metadata-field-toggle', {
      detail: e.detail,
      bubbles: true,
      composed: true,
    }));
  }

  private _renderFilterContent(key: FilterKey) {
    const applied = this.filters.applied;

    switch (key) {
      case 'type': {
        const f = applied.type as StringFilter | undefined;
        return html`<ap-filter-type
          .selected=${f?.values || []}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-type>`;
      }
      case 'tags': {
        const f = applied.tags as StringFilter | undefined;
        return html`<ap-filter-tags
          .selected=${f?.values || []}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-tags>`;
      }
      case 'labels': {
        const f = applied.labels as StringFilter | undefined;
        return html`<ap-filter-labels
          .labels=${this.labels}
          .selected=${f?.values || []}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-labels>`;
      }
      case 'color': {
        const f = applied.color as StringFilter | undefined;
        const colorStr = f?.values?.[0] || '';
        const colorParts = colorStr.split(' ');
        return html`<ap-filter-color
          .selected=${colorParts[0] || ''}
          .tolerance=${colorParts[1] || '1'}
          .coverage=${colorParts[3] || '20'}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-color>`;
      }
      case 'date': {
        const f = applied.date as DateFilter | undefined;
        return html`<ap-filter-date
          .filterKey=${'date'}
          .field=${f?.field || 'created'}
          .kind=${f?.kind || null}
          .from=${f?.from || ''}
          .to=${f?.to || ''}
          .preset=${f?.preset || ''}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-date>`;
      }
      case 'asset_expiration': {
        const f = applied.asset_expiration as DateFilter | undefined;
        return html`<ap-filter-date
          .filterKey=${'asset_expiration'}
          .field=${f?.field || 'created'}
          .kind=${f?.kind || null}
          .from=${f?.from || ''}
          .to=${f?.to || ''}
          .preset=${f?.preset || ''}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-date>`;
      }
      case 'size': {
        const f = applied.size as StringFilter | undefined;
        const rangeStr = f?.values?.[0] || '';
        const [minStr, maxStr] = rangeStr.split('..');
        const min = minStr ? parseFloat(minStr) / 1_000_000 : 0;
        const max = maxStr ? parseFloat(maxStr) / 1_000_000 : 0;
        return html`<ap-filter-size
          .min=${min}
          .max=${max}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-size>`;
      }
      case 'image': {
        // Image filter stores values as { resolution: string[], orientation: string[], faces: string[] }
        // or as a StringFilter with indexed values
        const f = applied.image;
        const imgVals = f && 'resolution' in f ? f as unknown as { resolution: string[]; orientation: string[]; faces: string[] } : null;
        return html`<ap-filter-image
          .selectedResolution=${imgVals?.resolution || []}
          .selectedOrientation=${imgVals?.orientation || []}
          .selectedFaces=${imgVals?.faces || []}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-image>`;
      }
      case 'approval': {
        const statusFilter = applied.approval_status as StringFilter | undefined;
        const approverFilter = applied.task_approver as StringFilter | undefined;
        const requesterFilter = applied.task_requester as StringFilter | undefined;
        const dueDateFilter = applied.task_duedate as DateFilter | undefined;
        return html`<ap-filter-approval
          .selectedStatus=${statusFilter?.values || []}
          .statusOperator=${statusFilter?.operator || ':'}
          .approverValue=${approverFilter?.values?.[0] || ''}
          .approverOperator=${approverFilter?.operator || ':'}
          .requesterValue=${requesterFilter?.values?.[0] || ''}
          .requesterOperator=${requesterFilter?.operator || ':'}
          .dueDatePreset=${dueDateFilter?.preset || ''}
          .dueDateFrom=${dueDateFilter?.from || ''}
          .dueDateTo=${dueDateFilter?.to || ''}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-approval>`;
      }
      case 'metadata':
        return html`<ap-filter-metadata
          .fields=${this.metadataFields}
          .appliedMetadata=${this.filters.metadata.applied}
          .visibleFields=${this.filters.metadata.visible}
          @metadata-filter-change=${this._handleMetadataFilterChange}
          @metadata-field-toggle=${this._handleMetadataFieldToggle}
        ></ap-filter-metadata>`;
      case 'product_ref': {
        const f = applied.product_ref as StringFilter | undefined;
        return html`<ap-filter-tags
          .selected=${f?.values || []}
          .filterKey=${'product_ref'}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-tags>`;
      }
      default:
        return nothing;
    }
  }

  private _renderFilterButton(item: FilterItemConfig) {
    const active = this._isFilterActive(item.key as AnyFilterKey);

    return html`
      <button
        class="filter-btn ${active ? 'active' : ''}"
        @click=${() => this._selectFilterKey(item.key)}
      >
        <span class="filter-btn-icon">
          <ap-icon name=${item.icon} .size=${18}></ap-icon>
        </span>
        <span class="filter-btn-label">
          ${item.label}
        </span>
      </button>
    `;
  }

  render() {
    const filterCount = Object.keys(this.filters.applied).length
      + Object.keys(this.filters.metadata.applied).length;

    return html`
      <div class="toolbar-row">
        ${this.isLoading
          ? html`<span class="count-skeleton"></span>`
          : this.totalCount > 0 || this.totalFolderCount > 0
            ? html`<span class="count">${this.totalFolderCount > 0
                ? `${this.totalFolderCount.toLocaleString()} folder${this.totalFolderCount !== 1 ? 's' : ''}${this.totalCount > 0 ? ', ' : ''}`
                : ''}${this.totalCount > 0
                ? `${this.totalCount.toLocaleString()} asset${this.totalCount !== 1 ? 's' : ''}`
                : ''}</span>`
            : html`<span class="count"></span>`}
        <span class="spacer"></span>
        <div class="controls">
          <div class="filter-dropdown">
            <button class="add-btn ${this._showDropdown ? 'open' : ''}" @click=${this._toggleDropdown}>
              <ap-icon name="filter" .size=${16}></ap-icon>
              Filters
              ${filterCount > 0
                ? html`<span class="filter-count">${filterCount}</span>`
                : html`<ap-icon name="chevron-down" .size=${16}></ap-icon>`}
            </button>
            ${this._showDropdown ? html`
              <div class="dropdown-menu">
                ${ALL_FILTER_ITEMS.map((item) => this._renderFilterButton(item))}
              </div>
            ` : nothing}
          </div>
          <div class="divider"></div>
          <ap-dropdown
            variant="borderless"
            label="Sort"
            .value=${this.sortBy}
            .options=${this.sortOptions}
            @ap-change=${this._handleSort}
            @dropdown-open=${this._handleSortOpen}
          ></ap-dropdown>
          <button
            class="icon-btn"
            @click=${this._toggleSortDirection}
            aria-label=${this.sortDirection === 'asc' ? 'Sort ascending' : 'Sort descending'}
            title=${this.sortDirection === 'asc' ? 'Ascending' : 'Descending'}
          >
            <ap-icon name=${this.sortDirection === 'asc' ? 'sort-asc' : 'sort-desc'} .size=${18}></ap-icon>
          </button>
        </div>
      </div>
      ${this._openFilter ? html`
        <div class="popover-wrapper">
          <ap-filter-popover .open=${true} .title=${FILTER_LABELS[this._openFilter] || this._openFilter}>
            ${this._renderFilterContent(this._openFilter)}
          </ap-filter-popover>
        </div>
      ` : nothing}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ap-content-toolbar': ApContentToolbar;
  }
}
