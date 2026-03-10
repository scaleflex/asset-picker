import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { FILTER_KEYS, FILTER_OPERATORS } from '../../types/filter.types';
import { SELECTED_TAGS_LIMIT } from './filters.constants';

@customElement('ap-filter-tags')
export class ApFilterTags extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .search-input {
      width: 100%;
      padding: 6px 10px;
      border: 1px solid var(--ap-border, #e4e4e7);
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      margin-bottom: 8px;
      box-sizing: border-box;
      color: var(--ap-foreground, #09090b);
      background: var(--ap-background, #fff);
      outline: none;
      transition: border-color 150ms;
    }

    .search-input:focus {
      border-color: var(--ap-primary, #3b82f6);
    }

    .search-input::placeholder {
      color: var(--ap-muted-foreground, #71717a);
    }

    .limit-indicator {
      font-size: 0.75rem;
      color: var(--ap-muted-foreground, #71717a);
      margin-bottom: 8px;
      text-align: right;
    }

    .limit-indicator.at-limit {
      color: var(--ap-destructive, #ef4444);
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }

    .tag {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 3px 10px;
      border-radius: 9999px;
      font-size: 0.8125rem;
      cursor: pointer;
      border: 1px solid var(--ap-border, #e4e4e7);
      background: none;
      color: var(--ap-foreground, #09090b);
      transition: all 150ms;
      font-family: inherit;
    }

    .tag:hover:not(.disabled) {
      border-color: var(--ap-primary, #3b82f6);
    }

    .tag.selected {
      background: var(--ap-primary-10, oklch(0.623 0.214 259.1 / 0.1));
      border-color: var(--ap-primary, #3b82f6);
      color: var(--ap-primary, #3b82f6);
    }

    .tag.disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .empty-message {
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-muted-foreground, #71717a);
      padding: 8px 0;
    }
  `;

  @property({ type: Array }) available: string[] = [];
  @property({ type: Array }) selected: string[] = [];
  @property() filterKey: string = FILTER_KEYS.TAGS;
  @state() private _search = '';

  private get _atLimit(): boolean {
    return this.selected.length >= SELECTED_TAGS_LIMIT;
  }

  private _toggle(tag: string) {
    const isSelected = this.selected.includes(tag);

    if (!isSelected && this._atLimit) return;

    const newSelected = isSelected
      ? this.selected.filter((t) => t !== tag)
      : [...this.selected, tag];

    this.dispatchEvent(
      new CustomEvent('filter-change', {
        detail: {
          key: this.filterKey,
          values: newSelected,
          operator: FILTER_OPERATORS.IS,
        },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _onSearchInput(e: Event) {
    this._search = (e.target as HTMLInputElement).value;
  }

  render() {
    const filtered = this.available.filter((t) =>
      t.toLowerCase().includes(this._search.toLowerCase()),
    );

    return html`
      <input
        class="search-input"
        type="text"
        placeholder="Search tags..."
        .value=${this._search}
        @input=${this._onSearchInput}
      />

      ${this.selected.length > 0
        ? html`
            <div class="limit-indicator ${this._atLimit ? 'at-limit' : ''}">
              ${this.selected.length} / ${SELECTED_TAGS_LIMIT} selected
            </div>
          `
        : ''}

      <div class="tags">
        ${filtered.length === 0
          ? html`<span class="empty-message">No tags found</span>`
          : filtered.map((tag) => {
              const isSelected = this.selected.includes(tag);
              const isDisabled = !isSelected && this._atLimit;
              return html`
                <button
                  class="tag ${isSelected ? 'selected' : ''} ${isDisabled ? 'disabled' : ''}"
                  ?disabled=${isDisabled}
                  @click=${() => this._toggle(tag)}
                >
                  ${tag}
                </button>
              `;
            })}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ap-filter-tags': ApFilterTags;
  }
}
