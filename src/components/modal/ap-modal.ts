import { LitElement, html, css } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

@customElement('ap-modal')
export class ApModal extends LitElement {
  static styles = css`
    :host {
      display: contents;
    }
    dialog:not([open]) {
      display: none;
    }
    dialog {
      position: fixed;
      inset: 0;
      width: 100%;
      max-width: var(--ap-modal-max-width, 1200px);
      height: var(--ap-modal-height, 85vh);
      max-height: var(--ap-modal-max-height, 85vh);
      margin: auto;
      padding: 0;
      border: none;
      border-radius: var(--ap-modal-radius, 12px);
      box-shadow: var(--ap-modal-shadow, 0 25px 50px -12px rgb(0 0 0 / 0.25));
      background: var(--ap-background, oklch(1 0 0));
      overflow: hidden;
      display: flex;
      flex-direction: column;
      font-family: var(--ap-font-family, system-ui, -apple-system, sans-serif);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    dialog[open] {
      animation: ap-modal-in 200ms ease-out;
    }
    dialog.closing {
      animation: ap-modal-out 150ms ease-in forwards;
    }
    dialog::backdrop {
      background: var(--ap-modal-backdrop, rgba(0, 0, 0, 0.5));
      animation: ap-backdrop-in 200ms ease-out;
    }
    @keyframes ap-modal-in {
      from { opacity: 0; transform: scale(0.95); }
      to { opacity: 1; transform: scale(1); }
    }
    @keyframes ap-modal-out {
      from { opacity: 1; transform: scale(1); }
      to { opacity: 0; transform: scale(0.95); }
    }
    @keyframes ap-backdrop-in {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    .modal-body {
      display: flex;
      flex-direction: column;
      height: 100%;
      height: 100%;
      max-height: var(--ap-modal-max-height, 85vh);
    }
    .modal-header {
      flex-shrink: 0;
    }
    .modal-content {
      flex: 1;
      overflow: hidden;
      position: relative;
      display: flex;
      flex-direction: column;
    }
    .modal-footer {
      flex-shrink: 0;
    }
    @media (prefers-reduced-motion: reduce) {
      dialog[open], dialog::backdrop, dialog.closing {
        animation: none;
      }
    }
  `;

  @property({ type: Boolean }) open = false;
  @query('dialog') private dialog!: HTMLDialogElement;

  updated(changed: Map<string, unknown>) {
    super.updated(changed);
    if (changed.has('open')) {
      if (this.open) {
        if (this.dialog && !this.dialog.open) {
          this.dialog.showModal();
        }
      } else if (this.dialog?.open) {
        this._animateClose();
      }
    }
  }

  private _animateClose() {
    const dialog = this.dialog;
    if (!dialog) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      dialog.close();
      return;
    }

    dialog.classList.add('closing');
    dialog.addEventListener('animationend', () => {
      dialog.classList.remove('closing');
      dialog.close();
    }, { once: true });
  }

  private _handleBackdropClick(e: MouseEvent) {
    if (e.target === this.dialog) {
      this.dispatchEvent(new CustomEvent('ap-cancel', { detail: { reason: 'backdrop' }, bubbles: true, composed: true }));
    }
  }

  private _handleCancel(e: Event) {
    e.preventDefault();
    this.dispatchEvent(new CustomEvent('ap-cancel', { detail: { reason: 'escape' }, bubbles: true, composed: true }));
  }

  render() {
    return html`
      <dialog
        @click=${this._handleBackdropClick}
        @cancel=${this._handleCancel}
      >
        <div class="modal-body">
          <div class="modal-header">
            <slot name="header"></slot>
          </div>
          <div class="modal-content">
            <slot></slot>
          </div>
          <div class="modal-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </dialog>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ap-modal': ApModal;
  }
}
