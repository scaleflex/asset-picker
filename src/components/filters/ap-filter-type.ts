import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { FILTER_KEYS, FILTER_OPERATORS, type FilterFileType } from '../../types/filter.types';
import { ASSET_TYPE_OPTIONS } from './filters.constants';

interface FileTypeGroup {
  key: string;
  label: string;
  icon: string;
  extensions: { value: string; label: string; count: number }[];
  totalCount: number;
}

function buildGroups(fileTypes: FilterFileType[]): FileTypeGroup[] {
  const map = new Map<string, FileTypeGroup>();

  for (const ft of fileTypes) {
    const cat = ft.category || ft.value.split('_')[0];
    if (!map.has(cat)) {
      const opt = ASSET_TYPE_OPTIONS.find((o) => o.value === cat);
      map.set(cat, {
        key: cat,
        label: opt?.label || cat.charAt(0).toUpperCase() + cat.slice(1),
        icon: opt?.icon || 'file',
        extensions: [],
        totalCount: 0,
      });
    }
    const group = map.get(cat)!;
    group.extensions.push({
      value: ft.value,
      label: ft.label || ft.value.split('_').pop()?.toUpperCase() || ft.value,
      count: ft.count,
    });
    group.totalCount += ft.count;
  }

  // Sort groups by ASSET_TYPE_OPTIONS order, unknowns at end
  const order = ASSET_TYPE_OPTIONS.map((o) => o.value as string);
  return [...map.values()].sort((a, b) => {
    const ai = order.indexOf(a.key);
    const bi = order.indexOf(b.key);
    return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
  });
}

@customElement('ap-filter-type')
export class ApFilterType extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .header-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 8px;
    }

    .section-label {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 400;
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      cursor: default;
    }

    .clear-btn {
      background: none;
      border: none;
      font-size: 0.75rem;
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
      cursor: pointer;
      padding: 2px 4px;
      border-radius: var(--ap-radius-sm, 6px);
    }
    .clear-btn:hover {
      text-decoration: underline;
    }

    .search-input {
      width: 100%;
      box-sizing: border-box;
      padding: 6px 10px;
      margin-bottom: 8px;
      border: 1px solid var(--ap-input, oklch(0.871 0.016 241.798));
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      background: var(--ap-background, oklch(1 0 0));
      outline: none;
    }
    .search-input:focus {
      border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .search-input::placeholder {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }

    .groups {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .group-header {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 8px;
      border-radius: var(--ap-radius-sm, 6px);
      cursor: pointer;
      transition: background 150ms;
      user-select: none;
    }
    .group-header:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }

    .group-chevron {
      flex-shrink: 0;
      width: 14px;
      height: 14px;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      transition: transform 150ms;
    }
    .group-chevron.expanded {
      transform: rotate(90deg);
    }

    ap-icon {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      flex-shrink: 0;
    }
    .group-header.selected ap-icon {
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }

    .group-label {
      flex: 1;
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }

    .extensions {
      display: flex;
      flex-direction: column;
      gap: 1px;
      padding-left: 22px;
    }

    .ext-row {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 4px 8px;
      border-radius: var(--ap-radius-sm, 6px);
      cursor: pointer;
      transition: background 150ms;
    }
    .ext-row:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }

    .ext-label {
      flex: 1;
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }

    /* Fallback flat list (no API data) */
    .options {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .option {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 6px 8px;
      border-radius: var(--ap-radius-sm, 6px);
      cursor: pointer;
      transition: background 150ms;
    }
    .option:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    .option-label {
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    .option.selected ap-icon {
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
  `;

  @property({ type: Array }) selected: string[] = [];
  @property({ type: Array }) fileTypes: FilterFileType[] = [];

  @state() private _search = '';
  @state() private _expanded = new Set<string>();

  // ── Selection helpers ───────────────────────────────────────────

  private _extValues(group: FileTypeGroup): string[] {
    return group.extensions.map((e) => e.value);
  }

  private _isGroupFullySelected(group: FileTypeGroup): boolean {
    if (this.selected.includes(group.key)) return true;
    const evs = this._extValues(group);
    return evs.length > 0 && evs.every((v) => this.selected.includes(v));
  }

  private _isGroupPartial(group: FileTypeGroup): boolean {
    if (this.selected.includes(group.key)) return false;
    const evs = this._extValues(group);
    const count = evs.filter((v) => this.selected.includes(v)).length;
    return count > 0 && count < evs.length;
  }

  private _isExtSelected(extValue: string, groupKey: string): boolean {
    return this.selected.includes(groupKey) || this.selected.includes(extValue);
  }

  // ── Toggle handlers ─────────────────────────────────────────────

  private _toggleGroup(group: FileTypeGroup) {
    const evs = this._extValues(group);
    const isFullySelected = this._isGroupFullySelected(group);

    let next: string[];
    if (isFullySelected) {
      // Deselect: remove group key and all its extension values
      const remove = new Set([group.key, ...evs]);
      next = this.selected.filter((v) => !remove.has(v));
    } else {
      // Select all: remove any individual extension values, add group key
      const remove = new Set(evs);
      next = this.selected.filter((v) => !remove.has(v));
      next.push(group.key);
    }
    this._emit(next);
  }

  private _toggleExt(extValue: string, group: FileTypeGroup) {
    const evs = this._extValues(group);
    let working = [...this.selected];

    // If the group key was selected (all), explode it into individual extensions
    if (working.includes(group.key)) {
      working = working.filter((v) => v !== group.key);
      working.push(...evs);
    }

    if (working.includes(extValue)) {
      // Deselect this extension
      working = working.filter((v) => v !== extValue);
    } else {
      // Select this extension
      working.push(extValue);
      // If all extensions are now selected, collapse to group key
      if (evs.every((v) => working.includes(v))) {
        working = working.filter((v) => !evs.includes(v));
        working.push(group.key);
      }
    }
    this._emit(working);
  }

  private _clearAll() {
    this._emit([]);
  }

  private _emit(values: string[]) {
    this.dispatchEvent(
      new CustomEvent('filter-change', {
        detail: {
          key: FILTER_KEYS.TYPE,
          values,
          operator: FILTER_OPERATORS.IS,
        },
        bubbles: true,
        composed: true,
      }),
    );
  }

  // ── Expand/collapse ─────────────────────────────────────────────

  private _toggleExpand(key: string) {
    const next = new Set(this._expanded);
    if (next.has(key)) next.delete(key);
    else next.add(key);
    this._expanded = next;
  }

  // ── Search filtering ────────────────────────────────────────────

  private _filteredGroups(groups: FileTypeGroup[]): FileTypeGroup[] {
    const q = this._search.toLowerCase().trim();
    if (!q) return groups;

    return groups
      .map((g) => {
        const groupMatch = g.label.toLowerCase().includes(q) || g.key.toLowerCase().includes(q);
        if (groupMatch) return g; // show all extensions if group name matches
        const filtered = g.extensions.filter(
          (e) => e.label.toLowerCase().includes(q) || e.value.toLowerCase().includes(q),
        );
        if (filtered.length === 0) return null;
        return { ...g, extensions: filtered };
      })
      .filter((g): g is FileTypeGroup => g !== null);
  }

  // ── Fallback: flat category toggle (same as old behavior) ──────

  private _toggleCategory(value: string) {
    const next = this.selected.includes(value)
      ? this.selected.filter((v) => v !== value)
      : [...this.selected, value];
    this._emit(next);
  }

  // ── Auto-expand groups with selections ─────────────────────────

  updated(changed: Map<string, unknown>) {
    // Only auto-expand on initial data load, not on every selection change
    if (changed.has('fileTypes') && this.fileTypes.length > 0) {
      const groups = buildGroups(this.fileTypes);
      const next = new Set(this._expanded);
      for (const g of groups) {
        if (this._isGroupFullySelected(g) || this._isGroupPartial(g)) {
          next.add(g.key);
        }
      }
      this._expanded = next;
    }
  }

  // ── Render ──────────────────────────────────────────────────────

  render() {
    // Fallback to flat list when no API data
    if (this.fileTypes.length === 0) {
      return this._renderFallback();
    }

    const allGroups = buildGroups(this.fileTypes);
    const groups = this._filteredGroups(allGroups);
    const hasSelection = this.selected.length > 0;

    return html`
      <input
        class="search-input"
        type="text"
        placeholder="Search formats..."
        .value=${this._search}
        @input=${(e: InputEvent) => { this._search = (e.target as HTMLInputElement).value; }}
      />
      <div class="header-row">
        <span class="section-label">Formats</span>
        ${hasSelection
          ? html`<button class="clear-btn" @click=${this._clearAll}>Clear all</button>`
          : nothing}
      </div>
      <div class="groups">
        ${groups.map((g) => this._renderGroup(g))}
      </div>
    `;
  }

  private _renderGroup(group: FileTypeGroup) {
    const isExpanded = this._expanded.has(group.key) || this._search.trim().length > 0;
    const isFullySelected = this._isGroupFullySelected(group);
    const isPartial = this._isGroupPartial(group);

    return html`
      <div
        class="group-header ${isFullySelected || isPartial ? 'selected' : ''}"
        @click=${() => this._toggleExpand(group.key)}
      >
        <svg class="group-chevron ${isExpanded ? 'expanded' : ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m9 18 6-6-6-6"/>
        </svg>
        <ap-icon name=${group.icon} size="16"></ap-icon>
        <span class="group-label">${group.label}</span>
        <ap-checkbox
          ?checked=${isFullySelected}
          ?indeterminate=${isPartial}
          @click=${(e: Event) => e.stopPropagation()}
          @ap-toggle=${() => this._toggleGroup(group)}
        ></ap-checkbox>
      </div>
      ${isExpanded
        ? html`
          <div class="extensions">
            ${group.extensions.map((ext) => html`
              <div
                class="ext-row"
                @click=${() => this._toggleExt(ext.value, group)}
              >
                <ap-checkbox
                  ?checked=${this._isExtSelected(ext.value, group.key)}
                  @click=${(e: Event) => e.stopPropagation()}
                  @ap-toggle=${() => this._toggleExt(ext.value, group)}
                ></ap-checkbox>
                <span class="ext-label">${ext.label}</span>
              </div>
            `)}
          </div>
        `
        : nothing}
    `;
  }

  private _renderFallback() {
    return html`
      <div class="options">
        <span class="section-label">Formats</span>
        ${ASSET_TYPE_OPTIONS.map(
          (opt) => html`
            <div
              class="option ${this.selected.includes(opt.value) ? 'selected' : ''}"
              @click=${() => this._toggleCategory(opt.value)}
            >
              <ap-checkbox ?checked=${this.selected.includes(opt.value)}></ap-checkbox>
              <ap-icon name=${opt.icon} size="16"></ap-icon>
              <span class="option-label">${opt.label}</span>
            </div>
          `,
        )}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ap-filter-type': ApFilterType;
  }
}
