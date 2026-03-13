import { css } from 'lit';

/**
 * Shared CSS for filter popovers.
 * Matches js-admin filter UI patterns:
 * - Clear all button (absolute top-right)
 * - Section labels
 * - Separator lines
 * - Info alert
 */
export const filterPopoverStyles = css`
  :host {
    display: block;
  }

  .filter-content {
    position: relative;
    padding: 0;
  }

  /* ── Clear all button ── */
  .clear-btn {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0;
    border: none;
    background: none;
    font-size: var(--ap-font-size-sm, 0.875rem);
    font-family: inherit;
    color: var(--ap-primary, oklch(0.65 0.19 258));
    cursor: pointer;
    opacity: 0.9;
  }
  .clear-btn:hover:not(:disabled) {
    opacity: 1;
    text-decoration: underline;
  }
  .clear-btn:disabled {
    opacity: 0.4;
    cursor: default;
  }

  /* ── Section label ── */
  .section-label {
    display: block;
    font-size: var(--ap-font-size-sm, 0.875rem);
    font-weight: 600;
    color: var(--ap-foreground, #09090b);
    margin-bottom: 8px;
    cursor: default;
  }

  /* ── Section spacing ── */
  .filter-section {
    margin-bottom: 20px;
  }
  .filter-section:last-child {
    margin-bottom: 0;
  }

  /* ── Separator ── */
  .separator {
    height: 1px;
    background: var(--ap-border, #e4e4e7);
    margin: 16px 0;
  }

  /* ── Info alert ── */
  .info-alert {
    display: flex;
    gap: 8px;
    padding: 10px 12px;
    background: var(--ap-muted, #f4f4f5);
    border-radius: var(--ap-radius-sm, 6px);
    font-size: 0.8125rem;
    color: var(--ap-muted-foreground, #71717a);
    line-height: 1.4;
    margin-top: 16px;
  }
  .info-alert ap-icon {
    flex-shrink: 0;
    margin-top: 1px;
  }

  /* ── Text/Number inputs ── */
  .filter-input {
    width: 100%;
    height: 36px;
    padding: 0 10px;
    border: 1px solid var(--ap-border, #e4e4e7);
    border-radius: var(--ap-radius-sm, 6px);
    font-size: var(--ap-font-size-sm, 0.875rem);
    font-family: inherit;
    color: var(--ap-foreground, #09090b);
    background: var(--ap-background, #fff);
    box-sizing: border-box;
    outline: none;
    transition: border-color 150ms;
  }
  .filter-input:focus {
    border-color: var(--ap-primary, oklch(0.65 0.19 258));
  }
  .filter-input:disabled {
    opacity: 0.5;
    cursor: default;
  }
  .filter-input::placeholder {
    color: var(--ap-muted-foreground, #71717a);
  }

  textarea.filter-input {
    min-height: 60px;
    resize: vertical;
  }

  /* ── Input label ── */
  .input-label {
    display: block;
    font-size: var(--ap-font-size-sm, 0.875rem);
    font-weight: 500;
    color: var(--ap-foreground, #09090b);
    margin-bottom: 4px;
  }
  .input-label[aria-disabled="true"] {
    opacity: 0.5;
  }

  /* ── Grid layouts ── */
  .grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }
  .grid-3 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 12px;
  }

  /* ── Removable chip ── */
  .chip {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    border: 1px solid var(--ap-border, #e4e4e7);
    border-radius: 9999px;
    font-size: 0.8125rem;
    color: var(--ap-foreground, #09090b);
    background: var(--ap-background, #fff);
    max-width: 200px;
  }
  .chip-label {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .chip-remove {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 14px;
    height: 14px;
    border: none;
    background: none;
    color: var(--ap-muted-foreground, #71717a);
    cursor: pointer;
    padding: 0;
    flex-shrink: 0;
  }
  .chip-remove:hover {
    color: var(--ap-foreground, #09090b);
  }
  .chips-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  /* ── Error text ── */
  .error-text {
    font-size: 0.8125rem;
    color: var(--ap-destructive, #ef4444);
    margin-top: 4px;
  }

  /* ── Search input ── */
  .search-wrapper {
    position: relative;
    margin-bottom: 12px;
  }
  .search-input {
    width: 100%;
    padding: 8px 32px 8px 10px;
    border: 1px solid var(--ap-border, #e4e4e7);
    border-radius: var(--ap-radius-sm, 6px);
    font-size: var(--ap-font-size-sm, 0.875rem);
    font-family: inherit;
    color: var(--ap-foreground, #09090b);
    background: var(--ap-background, #fff);
    box-sizing: border-box;
    outline: none;
  }
  .search-input:focus {
    border-color: var(--ap-primary, oklch(0.65 0.19 258));
  }
  .search-input::placeholder {
    color: var(--ap-muted-foreground, #71717a);
  }
  .search-clear {
    position: absolute;
    right: 6px;
    top: 50%;
    transform: translateY(-50%);
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
  }
  .search-clear:hover {
    color: var(--ap-foreground, #09090b);
  }

  /* ── Options list (checkbox-based) ── */
  .options-list {
    display: flex;
    flex-direction: column;
    gap: 4px;
    max-height: 250px;
    overflow-y: auto;
    overscroll-behavior: contain;
  }
  .options-list.short {
    max-height: none;
  }
  .no-results {
    padding: 12px;
    text-align: center;
    font-size: var(--ap-font-size-sm, 0.875rem);
    color: var(--ap-muted-foreground, #71717a);
  }
`;
