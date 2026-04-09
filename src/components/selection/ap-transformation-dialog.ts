import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { resetStyles } from '../../styles/shared-styles';
import type { Asset } from '../../types/asset.types';
import type { TransformFormat, TransformQuality, TransformationParams } from '../../types/transformation.types';
import { FORMAT_OPTIONS, QUALITY_OPTIONS, SIZE_PRESETS } from '../../types/transformation.types';
import { getAssetWidth, getAssetHeight, isImage } from '../../utils/asset-helpers';
import '../shared/ap-radio-group';
import '../shared/ap-dropdown';
import '../shared/ap-icon';

const SUPPORTED_FORMATS: TransformFormat[] = ['webp', 'jpeg', 'png', 'gif'];

function getDefaultFormat(extension?: string): TransformFormat {
  const ext = (extension ?? '').toLowerCase();
  if (SUPPORTED_FORMATS.includes(ext as TransformFormat)) return ext as TransformFormat;
  return 'jpeg';
}

@customElement('ap-transformation-dialog')
export class ApTransformationDialog extends LitElement {
  static styles = [resetStyles, css`
    :host {
      display: block;
    }
    .backdrop {
      position: fixed;
      inset: 0;
      z-index: 100;
      background: oklch(0 0 0 / 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .dialog {
      background: var(--ap-background, oklch(1 0 0));
      border-radius: var(--ap-radius-lg, 12px);
      padding: 28px 32px;
      max-width: 520px;
      width: 90%;
      box-shadow: 0 16px 48px oklch(0 0 0 / 0.16);
    }
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 16px;
      margin-bottom: 20px;
      margin-left: -32px;
      margin-right: -32px;
      padding-left: 32px;
      padding-right: 32px;
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
    }
    .title {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 600;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    .close-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      border: none;
      background: none;
      cursor: pointer;
      border-radius: var(--ap-radius-sm, 6px);
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      transition: color 100ms, background 100ms;
    }
    .close-btn:hover {
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    .section {
      margin-bottom: 16px;
    }
    .section-label {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      margin-bottom: 8px;
      display: block;
    }
    .dimensions-row {
      display: flex;
      align-items: flex-end;
      gap: 8px;
    }
    .input-group {
      flex: 1;
      min-width: 0;
    }
    .input-group.half-width {
      flex: none;
      width: 50%;
    }
    .input-label {
      font-size: var(--ap-font-size-xs, 0.75rem);
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      margin-bottom: 4px;
      display: block;
    }
    .input-wrapper {
      display: flex;
      align-items: center;
      border: 1px solid var(--ap-input, oklch(0.871 0.016 241.798));
      border-radius: var(--ap-radius-sm, 6px);
      overflow: hidden;
      background: var(--ap-background, oklch(1 0 0));
    }
    .input-wrapper input {
      flex: 1;
      min-width: 0;
      border: none;
      outline: none;
      padding: 8px 12px;
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-family: inherit;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      background: transparent;
      -moz-appearance: textfield;
    }
    .input-wrapper input::-webkit-inner-spin-button,
    .input-wrapper input::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    .input-wrapper input::placeholder {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }
    .input-suffix {
      padding: 0 10px;
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      user-select: none;
    }
    .lock-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 36px;
      border: none;
      background: none;
      cursor: pointer;
      border-radius: var(--ap-radius-sm, 6px);
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      flex-shrink: 0;
      transition: color 100ms;
    }
    .lock-btn:hover {
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    .lock-btn.locked {
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .presets-row {
      display: flex;
      align-items: center;
      gap: 4px;
      margin-top: 10px;
      flex-wrap: wrap;
    }
    .preset-btn {
      padding: 4px 10px;
      border: none;
      background: none;
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-family: inherit;
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      cursor: pointer;
      border-radius: var(--ap-radius-sm, 6px);
      transition: color 100ms, background 100ms;
    }
    .preset-btn:hover {
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .preset-btn.active {
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
      font-weight: 600;
    }
    .actions {
      display: flex;
      justify-content: flex-end;
      gap: 12px;
      margin-top: 24px;
      margin-left: -32px;
      margin-right: -32px;
      padding: 20px 32px 0;
      border-top: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
    }
    .btn {
      padding: 8px 20px;
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      cursor: pointer;
      transition: background 100ms, opacity 100ms;
      font-family: var(--ap-font-family, system-ui, sans-serif);
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      background: var(--ap-background, oklch(1 0 0));
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    .btn:not(.btn-primary):hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    .btn-primary {
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
      color: var(--ap-primary-foreground, oklch(1 0 0));
      border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .btn-primary:hover {
      opacity: 0.9;
    }
    .btn:disabled {
      opacity: 0.5;
      cursor: default;
    }
    ap-dropdown {
      display: block;
      width: 100%;
    }
  `];

  @property({ type: Array }) assets: Asset[] = [];
  @property({ type: Boolean }) isMultiSelect = false;

  @state() private _format: TransformFormat = 'jpeg';
  @state() private _quality: TransformQuality = 'excellent';
  @state() private _width: number | undefined;
  @state() private _height: number | undefined;
  @state() private _lockAspect = true;
  @state() private _activePreset = 'original';

  // Defaults to compare against for dirty tracking
  private _defaultFormat: TransformFormat = 'jpeg';
  private _defaultWidth: number | undefined;
  private _defaultHeight: number | undefined;

  private get _ratio(): number {
    const first = this.assets.find((a) => isImage(a));
    if (!first) return 1.5;
    const w = getAssetWidth(first);
    const h = getAssetHeight(first);
    return w && h ? w / h : 1.5;
  }

  private get _isDirty(): boolean {
    return (
      this._format !== this._defaultFormat ||
      this._quality !== 'excellent' ||
      this._width !== this._defaultWidth ||
      this._height !== this._defaultHeight
    );
  }

  willUpdate(changed: Map<string, unknown>) {
    if (changed.has('assets')) {
      this._initDefaults();
    }
  }

  private _initDefaults() {
    const first = this.assets.find((a) => isImage(a));
    this._defaultFormat = getDefaultFormat(first?.extension);
    this._format = this._defaultFormat;
    this._quality = 'excellent';
    this._lockAspect = true;
    this._activePreset = 'original';

    if (this.isMultiSelect) {
      this._defaultWidth = undefined;
      this._defaultHeight = undefined;
    } else if (first) {
      const w = getAssetWidth(first);
      const h = getAssetHeight(first);
      this._defaultWidth = w || undefined;
      this._defaultHeight = h || undefined;
    } else {
      this._defaultWidth = undefined;
      this._defaultHeight = undefined;
    }
    this._width = this._defaultWidth;
    this._height = this._defaultHeight;
  }

  private _handleFormatChange(e: CustomEvent) {
    this._format = e.detail.value as TransformFormat;
  }

  private _handleQualityChange(e: CustomEvent) {
    this._quality = e.detail.value as TransformQuality;
  }

  private _handleWidthInput(e: Event) {
    const val = (e.target as HTMLInputElement).value;
    const parsed = parseInt(val, 10);
    const num = val === '' || isNaN(parsed) || parsed <= 0 ? undefined : parsed;
    this._width = num;
    this._activePreset = '';

    if (this._lockAspect && num) {
      this._height = Math.round(num / this._ratio);
    }
  }

  private _handleHeightInput(e: Event) {
    const val = (e.target as HTMLInputElement).value;
    const parsed = parseInt(val, 10);
    const num = val === '' || isNaN(parsed) || parsed <= 0 ? undefined : parsed;
    this._height = num;
    this._activePreset = '';

    if (this._lockAspect && num) {
      this._width = Math.round(num * this._ratio);
    }
  }

  private _handleMaxSizeInput(e: Event) {
    const val = (e.target as HTMLInputElement).value;
    const parsed = parseInt(val, 10);
    const num = val === '' || isNaN(parsed) || parsed <= 0 ? undefined : parsed;
    this._width = num;
    this._height = num;
    this._activePreset = '';
  }

  private _toggleLock() {
    this._lockAspect = !this._lockAspect;
  }

  private _handlePreset(preset: typeof SIZE_PRESETS[number]) {
    this._activePreset = preset.value;
    if (preset.value === 'original') {
      this._width = this._defaultWidth;
      this._height = this._defaultHeight;
    } else if (preset.width) {
      this._width = preset.width;
      this._height = Math.round(preset.width / this._ratio);
    }
  }

  private _handleApply() {
    const params: TransformationParams = {
      format: this._format,
      quality: this._format !== 'png' ? this._quality : undefined,
      width: this._width,
      height: this._height,
    };
    this.dispatchEvent(new CustomEvent('transform-confirm', {
      detail: { params, isAspectLocked: this._lockAspect },
      bubbles: true,
      composed: true,
    }));
  }

  private _handleSkip() {
    this.dispatchEvent(new CustomEvent('transform-skip', {
      bubbles: true,
      composed: true,
    }));
  }

  private _handleClose() {
    this.dispatchEvent(new CustomEvent('transform-cancel', {
      bubbles: true,
      composed: true,
    }));
  }

  private _handleBackdropClick(e: MouseEvent) {
    if (e.target === e.currentTarget) {
      this._handleClose();
    }
  }

  render() {
    const isPng = this._format === 'png';

    return html`
      <div class="backdrop" @click=${this._handleBackdropClick}>
        <div class="dialog">
          <div class="header">
            <div class="title">Export Options</div>
            <button class="close-btn" @click=${this._handleClose} title="Close">
              <ap-icon name="close" .size=${16}></ap-icon>
            </button>
          </div>

          <div class="section">
            <span class="section-label">Format</span>
            <ap-radio-group
              direction="horizontal"
              .value=${this._format}
              .options=${FORMAT_OPTIONS}
              @ap-change=${this._handleFormatChange}
            ></ap-radio-group>
          </div>

          ${!isPng ? html`
            <div class="section">
              <span class="section-label">Quality</span>
              <ap-dropdown
                .value=${this._quality}
                .options=${QUALITY_OPTIONS}
                @ap-change=${this._handleQualityChange}
              ></ap-dropdown>
            </div>
          ` : nothing}

          <div class="section">
            <span class="section-label">Size</span>
            ${this.isMultiSelect ? html`
              <div class="input-group half-width">
                <span class="input-label">Max Size</span>
                <div class="input-wrapper">
                  <input
                    type="number"
                    min="1"
                    .value=${this._width != null ? String(this._width) : ''}
                    placeholder="Original"
                    @input=${this._handleMaxSizeInput}
                  />
                  <span class="input-suffix">px</span>
                </div>
              </div>
            ` : html`
              <div class="dimensions-row">
                <div class="input-group">
                  <span class="input-label">Width</span>
                  <div class="input-wrapper">
                    <input
                      type="number"
                      min="1"
                      .value=${this._width != null ? String(this._width) : ''}
                      @input=${this._handleWidthInput}
                    />
                    <span class="input-suffix">px</span>
                  </div>
                </div>
                <button
                  class="lock-btn ${this._lockAspect ? 'locked' : ''}"
                  @click=${this._toggleLock}
                  title=${this._lockAspect ? 'Unlock aspect ratio' : 'Lock aspect ratio'}
                >
                  <ap-icon name=${this._lockAspect ? 'lock' : 'link-2'} .size=${16}></ap-icon>
                </button>
                <div class="input-group">
                  <span class="input-label">Height</span>
                  <div class="input-wrapper">
                    <input
                      type="number"
                      min="1"
                      .value=${this._height != null ? String(this._height) : ''}
                      @input=${this._handleHeightInput}
                    />
                    <span class="input-suffix">px</span>
                  </div>
                </div>
              </div>
            `}
            <div class="presets-row">
              ${SIZE_PRESETS.map((p) => html`
                <button
                  class="preset-btn ${this._activePreset === p.value ? 'active' : ''}"
                  @click=${() => this._handlePreset(p)}
                >${p.label}</button>
              `)}
            </div>
          </div>

          <div class="actions">
            <button class="btn" @click=${this._handleSkip}>Export Original</button>
            <button class="btn btn-primary" @click=${this._handleApply} ?disabled=${!this._isDirty}>Apply & Export</button>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ap-transformation-dialog': ApTransformationDialog;
  }
}
