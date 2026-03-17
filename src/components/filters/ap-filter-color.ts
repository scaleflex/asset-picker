import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { filterPopoverStyles } from './shared/filter-styles';
import { resetStyles } from '../../styles/shared-styles';
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
const HEX_RE = /^#[0-9A-Fa-f]{6}$/;

/** Parse a stored filter value string like "#FF0000 1 1 20" into a ColorEntry */
function parseColorValue(val: string): ColorEntry | null {
  const parts = val.trim().split(/\s+/);
  if (parts.length < 1 || !HEX_RE.test(parts[0])) return null;
  return {
    hex: parts[0],
    tolerance: parts[1] || DEFAULT_COLOR_TOLERANCE,
    coverage: parts[3] || DEFAULT_COLOR_COVERAGE,
  };
}

@customElement('ap-filter-color')
export class ApFilterColor extends LitElement {
  static styles = [resetStyles, filterPopoverStyles, css`
    /* ── Palette ── */
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

    /* ── Advanced toggle (own row, pill-style) ── */
    .advanced-row {
      display: flex;
      align-items: center;
      margin-bottom: 14px;
    }

    .advanced-toggle {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, #09090b);
      cursor: pointer;
      user-select: none;
    }

    .toggle-track {
      position: relative;
      width: 32px;
      height: 18px;
      border-radius: 9px;
      background: var(--ap-border, #d4d4d8);
      transition: background 150ms;
      flex-shrink: 0;
    }

    .toggle-track.on {
      background: var(--ap-primary, oklch(0.65 0.19 258));
    }

    .toggle-thumb {
      position: absolute;
      top: 2px;
      left: 2px;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: #fff;
      transition: transform 150ms;
      box-shadow: 0 1px 2px rgb(0 0 0 / 0.15);
    }

    .toggle-track.on .toggle-thumb {
      transform: translateX(14px);
    }

    /* ── Selected colors list ── */
    .selected-colors {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    /* ── Color entry row (both modes) ── */
    .color-row {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .color-swatch-small {
      width: 36px;
      height: 36px;
      border-radius: var(--ap-radius-sm, 6px);
      border: 1px solid var(--ap-border, #e4e4e7);
      flex-shrink: 0;
    }

    .color-hex-input {
      height: 36px;
      padding: 0 8px;
      border: 1px solid var(--ap-border, #e4e4e7);
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, #09090b);
      font-family: var(--ap-font-family, system-ui, sans-serif);
      background: var(--ap-background, #fff);
      min-width: 0;
    }

    .color-hex-input:focus {
      outline: none;
      border-color: var(--ap-primary, oklch(0.65 0.19 258));
    }

    /* Normal mode: hex input takes remaining space */
    .color-row:not(.advanced) .color-hex-input {
      flex: 1;
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
      flex-shrink: 0;
      border-radius: 4px;
    }

    .remove-btn:hover {
      color: var(--ap-destructive, #ef4444);
      background: var(--ap-muted, #f4f4f5);
    }

    /* ── Advanced layout: full-width grid ── */
    .color-row.advanced {
      display: grid;
      grid-template-columns: 1.4fr 1fr 1fr auto;
      align-items: end;
      gap: 6px;
    }

    .adv-field {
      display: flex;
      flex-direction: column;
      gap: 2px;
      min-width: 0;
    }

    .adv-field-label {
      font-size: 0.6875rem;
      color: var(--ap-muted-foreground, #71717a);
      line-height: 1;
    }

    .coverage-wrap {
      display: flex;
      align-items: center;
      height: 36px;
      border: 1px solid var(--ap-border, #e4e4e7);
      border-radius: var(--ap-radius-sm, 6px);
      background: var(--ap-background, #fff);
      overflow: hidden;
    }

    .coverage-wrap:focus-within {
      border-color: var(--ap-primary, oklch(0.65 0.19 258));
    }

    .coverage-unit {
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-muted-foreground, #71717a);
      padding-left: 8px;
      flex-shrink: 0;
      line-height: 36px;
    }

    .coverage-input {
      flex: 1;
      min-width: 0;
      height: 100%;
      padding: 0 6px 0 2px;
      border: none;
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, #09090b);
      font-family: var(--ap-font-family, system-ui, sans-serif);
      background: transparent;
      outline: none;
    }

    .coverage-input::-webkit-inner-spin-button,
    .coverage-input::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    .coverage-input {
      -moz-appearance: textfield;
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

  /** Stored filter values from state, e.g. ["#FF0000 1 1 20", "#00FF00 2 2 30"] */
  @property({ type: Array }) values: string[] = [];

  @state() private _colors: ColorEntry[] = [];
  @state() private _advanced = false;
  @state() private _showPalette = false;
  @state() private _initialized = false;

  private get _hasSelection(): boolean {
    return this._colors.length > 0;
  }

  private get _selectedHexes(): Set<string> {
    return new Set(this._colors.map((c) => c.hex));
  }

  willUpdate(changed: Map<string, unknown>) {
    if (changed.has('values')) {
      const parsed: ColorEntry[] = [];
      for (const val of this.values) {
        const entry = parseColorValue(val);
        if (entry) parsed.push(entry);
      }
      // On first load, or when values are reset externally (e.g. "Clear all"),
      // sync internal state from the property.
      if (!this._initialized || (this.values.length === 0 && this._colors.length > 0)) {
        this._colors = parsed;
        if (parsed.length > 0) {
          this._advanced = parsed.some(
            (c) => c.tolerance !== DEFAULT_COLOR_TOLERANCE || c.coverage !== DEFAULT_COLOR_COVERAGE,
          );
        }
        this._initialized = true;
      }
    }
  }

  private _selectColor(hex: string) {
    if (!HEX_RE.test(hex)) return;

    const existing = this._colors.findIndex((c) => c.hex.toLowerCase() === hex.toLowerCase());
    if (existing >= 0) {
      this._removeColor(existing);
      return;
    }

    if (this._colors.length >= MAX_COLORS) return;

    this._colors = [
      ...this._colors,
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
    this._colors = this._colors.filter((_, i) => i !== index);
    this._dispatchChange();
  }

  private _clearAll() {
    this._colors = [];
    this._showPalette = false;
    this._dispatchChange();
  }

  private _toggleAdvanced() {
    this._advanced = !this._advanced;
    if (this._colors.length > 0) {
      this._dispatchChange();
    }
  }

  private _handleHexInput(index: number, e: Event) {
    const input = e.target as HTMLInputElement;
    let hex = input.value.trim();
    if (!hex.startsWith('#')) hex = '#' + hex;
    if (!HEX_RE.test(hex)) return;

    const isDuplicate = this._colors.some(
      (c, i) => i !== index && c.hex.toLowerCase() === hex.toLowerCase(),
    );
    if (isDuplicate) return;

    const updated = [...this._colors];
    updated[index] = { ...updated[index], hex };
    this._colors = updated;
    this._dispatchChange();
  }

  private _handleToleranceChange(index: number, e: CustomEvent<{ value: string }>) {
    const updated = [...this._colors];
    updated[index] = { ...updated[index], tolerance: e.detail.value };
    this._colors = updated;
    this._dispatchChange();
  }

  private _handleCoverageInput(index: number, e: Event) {
    const value = (e.target as HTMLInputElement).value;
    const num = parseInt(value, 10);
    if (!isNaN(num) && num >= 1 && num <= 100) {
      const updated = [...this._colors];
      updated[index] = { ...updated[index], coverage: String(num) };
      this._colors = updated;
      this._dispatchChange();
    }
  }

  private _showAddPalette() {
    this._showPalette = true;
  }

  private _dispatchChange() {
    if (this._colors.length === 0) {
      this.dispatchEvent(
        new CustomEvent('filter-change', {
          detail: { key: 'color', values: '', operator: ':' },
          bubbles: true,
          composed: true,
        }),
      );
      return;
    }

    const values = this._colors.map((c) => {
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
    const atMax = this._colors.length >= MAX_COLORS;

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

  private _renderColorEntry(entry: ColorEntry, index: number) {
    if (!this._advanced) {
      return html`
        <div class="color-row">
          <div class="color-swatch-small" style="background:${entry.hex}"></div>
          <input
            class="color-hex-input"
            type="text"
            .value=${entry.hex}
            maxlength="7"
            @change=${(e: Event) => this._handleHexInput(index, e)}
          />
          <button class="remove-btn" title="Remove color" @click=${() => this._removeColor(index)}>
            <ap-icon name="close" .size=${14}></ap-icon>
          </button>
        </div>
      `;
    }

    return html`
      <div class="color-row advanced">
        <div class="adv-field">
          <span class="adv-field-label">Color</span>
          <div class="color-row" style="gap: 6px;">
            <div class="color-swatch-small" style="background:${entry.hex}"></div>
            <input
              class="color-hex-input"
              type="text"
              .value=${entry.hex}
              maxlength="7"
              @change=${(e: Event) => this._handleHexInput(index, e)}
            />
          </div>
        </div>
        <div class="adv-field">
          <span class="adv-field-label">Difference</span>
          <ap-dropdown
            .value=${entry.tolerance}
            .options=${COLOR_DIFFERENCE_OPTIONS}
            @ap-change=${(e: CustomEvent<{ value: string }>) =>
              this._handleToleranceChange(index, e)}
          ></ap-dropdown>
        </div>
        <div class="adv-field">
          <span class="adv-field-label">Coverage</span>
          <div class="coverage-wrap">
            <span class="coverage-unit">%</span>
            <input
              type="number"
              class="coverage-input"
              min="1"
              max="100"
              .value=${entry.coverage}
              @change=${(e: Event) => this._handleCoverageInput(index, e)}
            />
          </div>
        </div>
        <button class="remove-btn" style="align-self: end; margin-bottom: 8px;" title="Remove color" @click=${() => this._removeColor(index)}>
          <ap-icon name="close" .size=${14}></ap-icon>
        </button>
      </div>
    `;
  }

  render() {
    const showPalette = this._colors.length === 0 || this._showPalette;
    const canAdd = this._colors.length < MAX_COLORS && !this._showPalette;

    return html`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!this._hasSelection}
          @click=${this._clearAll}
        >Clear all</button>

        <span class="section-label">Color</span>

        <div class="advanced-row">
          <label class="advanced-toggle" @click=${this._toggleAdvanced}>
            <span class="toggle-track ${this._advanced ? 'on' : ''}">
              <span class="toggle-thumb"></span>
            </span>
            Advanced
          </label>
        </div>

        <div class="filter-section">
          ${showPalette ? this._renderPalette() : nothing}
        </div>

        ${this._colors.length > 0 ? html`
          <div class="filter-section">
            <div class="selected-colors">
              ${this._colors.map((entry, i) => this._renderColorEntry(entry, i))}
            </div>
          </div>
        ` : nothing}

        ${canAdd ? html`
          <div class="filter-section">
            <button class="add-color-btn" @click=${this._showAddPalette}>
              <ap-icon name="plus" .size=${14}></ap-icon>
              Add color
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
