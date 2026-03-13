import { LitElement, html, css, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { filterPopoverStyles } from './shared/filter-styles';
import {
  COLOR_PALETTE,
  COLOR_DIFFERENCE_OPTIONS,
  DEFAULT_COLOR_COVERAGE,
  DEFAULT_COLOR_TOLERANCE,
} from './filters.constants';

interface ColorEntry {
  hex: string;
  tolerance: string;
  coverage: string;
}

const MAX_COLORS = 3;

@customElement('ap-filter-color')
export class ApFilterColor extends LitElement {
  static styles = [filterPopoverStyles, css`
    .header-row {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 12px;
    }

    .advanced-toggle {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      margin-left: auto;
      margin-right: 60px;
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, #09090b);
      cursor: pointer;
      user-select: none;
    }

    .advanced-toggle input {
      accent-color: var(--ap-primary, oklch(0.65 0.19 258));
      width: 14px;
      height: 14px;
      cursor: pointer;
    }

    .palette {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 8px;
      justify-items: center;
    }

    .swatch {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      border: 2px solid transparent;
      cursor: pointer;
      transition: transform 100ms;
      padding: 0;
    }

    .swatch:hover {
      transform: scale(1.15);
    }

    .swatch.selected {
      border-color: var(--ap-primary, oklch(0.65 0.19 258));
      box-shadow: 0 0 0 2px var(--ap-primary-10, oklch(0.65 0.19 258 / 0.1));
    }

    .swatch.disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .swatch.disabled:hover {
      transform: none;
    }

    /* ── Selected colors list ── */
    .selected-colors {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .color-entry {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .color-swatch-small {
      width: 24px;
      height: 24px;
      border-radius: 4px;
      border: 1px solid var(--ap-border, #e4e4e7);
      flex-shrink: 0;
    }

    .color-hex {
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, #09090b);
      font-family: var(--ap-font-family, system-ui, sans-serif);
    }

    .remove-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      border: none;
      background: none;
      color: var(--ap-muted-foreground, #71717a);
      cursor: pointer;
      padding: 0;
      margin-left: auto;
      border-radius: 4px;
    }

    .remove-btn:hover {
      color: var(--ap-destructive, #ef4444);
      background: var(--ap-muted, #f4f4f5);
    }

    /* ── Advanced mode grid ── */
    .color-entry-advanced {
      display: grid;
      grid-template-columns: auto 1fr auto auto;
      align-items: center;
      gap: 8px;
    }

    .field-label {
      font-size: 0.75rem;
      color: var(--ap-muted-foreground, #71717a);
      margin-bottom: 2px;
    }

    .coverage-input {
      width: 64px;
      padding: 6px 8px;
      border: 1px solid var(--ap-border, #e4e4e7);
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, #09090b);
      font-family: var(--ap-font-family, system-ui, sans-serif);
      background: var(--ap-background, #fff);
      box-sizing: border-box;
    }

    .coverage-input:focus {
      outline: none;
      border-color: var(--ap-primary, oklch(0.65 0.19 258));
    }

    .coverage-wrap {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .coverage-unit {
      font-size: 0.8125rem;
      color: var(--ap-muted-foreground, #71717a);
    }

    /* ── Add color button ── */
    .add-color-btn {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 6px 12px;
      border: 1px dashed var(--ap-border, #e4e4e7);
      border-radius: var(--ap-radius-sm, 6px);
      background: none;
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-family: inherit;
      color: var(--ap-muted-foreground, #71717a);
      cursor: pointer;
      transition: border-color 150ms, color 150ms;
    }

    .add-color-btn:hover {
      border-color: var(--ap-primary, oklch(0.65 0.19 258));
      color: var(--ap-primary, oklch(0.65 0.19 258));
    }
  `];

  @state() colors: ColorEntry[] = [];
  @state() private _advanced = false;
  @state() private _showPalette = false;

  private get _hasSelection(): boolean {
    return this.colors.length > 0;
  }

  private get _selectedHexes(): Set<string> {
    return new Set(this.colors.map((c) => c.hex));
  }

  private static _HEX_RE = /^#[0-9A-Fa-f]{6}$/;

  private _selectColor(hex: string) {
    if (!ApFilterColor._HEX_RE.test(hex)) return;

    // If already selected, remove it
    const existing = this.colors.findIndex((c) => c.hex === hex);
    if (existing >= 0) {
      this._removeColor(existing);
      return;
    }

    // If at max, ignore
    if (this.colors.length >= MAX_COLORS) return;

    this.colors = [
      ...this.colors,
      {
        hex,
        tolerance: DEFAULT_COLOR_TOLERANCE,
        coverage: DEFAULT_COLOR_COVERAGE,
      },
    ];
    this._showPalette = false;
    this._dispatchChange();
  }

  private _removeColor(index: number) {
    this.colors = this.colors.filter((_, i) => i !== index);
    this._dispatchChange();
  }

  private _clearAll() {
    this.colors = [];
    this._showPalette = false;
    this._dispatchChange();
  }

  private _toggleAdvanced() {
    this._advanced = !this._advanced;
    // Re-dispatch so values reflect current mode defaults
    if (this.colors.length > 0) {
      this._dispatchChange();
    }
  }

  private _handleToleranceChange(index: number, e: CustomEvent<{ value: string }>) {
    const updated = [...this.colors];
    updated[index] = { ...updated[index], tolerance: e.detail.value };
    this.colors = updated;
    this._dispatchChange();
  }

  private _handleCoverageInput(index: number, e: Event) {
    const value = (e.target as HTMLInputElement).value;
    const num = parseInt(value, 10);
    if (!isNaN(num) && num >= 1 && num <= 100) {
      const updated = [...this.colors];
      updated[index] = { ...updated[index], coverage: String(num) };
      this.colors = updated;
      this._dispatchChange();
    }
  }

  private _showAddPalette() {
    this._showPalette = true;
  }

  private _dispatchChange() {
    if (this.colors.length === 0) {
      this.dispatchEvent(
        new CustomEvent('filter-change', {
          detail: { key: 'color', values: '', operator: ':' },
          bubbles: true,
          composed: true,
        }),
      );
      return;
    }

    const values = this.colors.map((c) => {
      const tolerance = this._advanced ? c.tolerance : DEFAULT_COLOR_TOLERANCE;
      const coverage = this._advanced ? c.coverage : DEFAULT_COLOR_COVERAGE;
      return `${c.hex} ${tolerance} ${tolerance} ${coverage}`;
    });

    this.dispatchEvent(
      new CustomEvent('filter-change', {
        detail: { key: 'color', values, operator: ':' },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _renderPalette() {
    const selectedHexes = this._selectedHexes;
    const atMax = this.colors.length >= MAX_COLORS;

    return html`
      <div class="palette">
        ${COLOR_PALETTE.map(
          (color) => {
            const isSelected = selectedHexes.has(color);
            const isDisabled = atMax && !isSelected;
            return html`
              <button
                class="swatch ${isSelected ? 'selected' : ''} ${isDisabled ? 'disabled' : ''}"
                style="background:${color};${color === '#ffffff' ? ' border: 1px solid #e4e4e7;' : ''}"
                @click=${() => !isDisabled && this._selectColor(color)}
                title=${color}
                ?disabled=${isDisabled}
              ></button>
            `;
          },
        )}
      </div>
    `;
  }

  private _renderNormalColorEntry(entry: ColorEntry, index: number) {
    return html`
      <div class="color-entry">
        <div
          class="color-swatch-small"
          style="background:${entry.hex}"
        ></div>
        <span class="color-hex">${entry.hex}</span>
        <button
          class="remove-btn"
          title="Remove color"
          @click=${() => this._removeColor(index)}
        >
          <ap-icon name="close" .size=${14}></ap-icon>
        </button>
      </div>
    `;
  }

  private _renderAdvancedColorEntry(entry: ColorEntry, index: number) {
    return html`
      <div class="color-entry-advanced">
        <div
          class="color-swatch-small"
          style="background:${entry.hex}"
          title=${entry.hex}
        ></div>
        <ap-dropdown
          .value=${entry.tolerance}
          .options=${COLOR_DIFFERENCE_OPTIONS}
          @ap-change=${(e: CustomEvent<{ value: string }>) =>
            this._handleToleranceChange(index, e)}
        ></ap-dropdown>
        <div class="coverage-wrap">
          <input
            type="number"
            class="coverage-input"
            min="1"
            max="100"
            .value=${entry.coverage}
            @change=${(e: Event) => this._handleCoverageInput(index, e)}
          />
          <span class="coverage-unit">%</span>
        </div>
        <button
          class="remove-btn"
          title="Remove color"
          @click=${() => this._removeColor(index)}
        >
          <ap-icon name="close" .size=${14}></ap-icon>
        </button>
      </div>
    `;
  }

  render() {
    const showPalette = this.colors.length === 0 || this._showPalette;
    const canAdd = this.colors.length < MAX_COLORS && !this._showPalette;

    return html`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!this._hasSelection}
          @click=${this._clearAll}
        >Clear all</button>

        <div class="header-row">
          <span class="section-label">Color</span>
          <label class="advanced-toggle">
            <input
              type="checkbox"
              .checked=${this._advanced}
              @change=${this._toggleAdvanced}
            />
            Advanced
          </label>
        </div>

        <div class="filter-section">
          ${showPalette ? this._renderPalette() : nothing}
        </div>

        ${this.colors.length > 0 ? html`
          <div class="filter-section">
            ${this._advanced ? html`
              <div class="selected-colors">
                ${this.colors.map((entry, i) =>
                  this._renderAdvancedColorEntry(entry, i),
                )}
              </div>
            ` : html`
              <div class="selected-colors">
                ${this.colors.map((entry, i) =>
                  this._renderNormalColorEntry(entry, i),
                )}
              </div>
            `}
          </div>
        ` : nothing}

        ${canAdd ? html`
          <div class="filter-section">
            <button class="add-color-btn" @click=${this._showAddPalette}>
              <ap-icon name="plus" .size=${14}></ap-icon>
              Add Color
            </button>
          </div>
        ` : nothing}

        <div class="info-alert">
          <ap-icon name="info" .size=${14}></ap-icon>
          <span>Requires image processing to be enabled.</span>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ap-filter-color': ApFilterColor;
  }
}
