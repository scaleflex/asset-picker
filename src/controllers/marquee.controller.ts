import type { ReactiveController, ReactiveControllerHost } from 'lit';
import type { Store } from '../store/store';
import type { AppState } from '../store/store.types';
import type { Asset } from '../types/asset.types';
import type { Folder } from '../types/folder.types';

export interface MarqueeRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

const DRAG_THRESHOLD = 5;
const SCROLL_EDGE_SIZE = 40;
const SCROLL_SPEED = 15;

export class MarqueeController implements ReactiveController {
  private host: ReactiveControllerHost;
  private store: Store<AppState>;
  private container?: HTMLElement;
  private startX = 0;
  private startY = 0;
  private startClientX = 0;
  private startClientY = 0;
  private preMarqueeSelection = new Map<string, Asset>();
  private preMarqueeFolderSelection = new Map<string, Folder>();
  private _dragging = false;
  private _scrollRAF: number | null = null;
  private _lastMouseEvent: MouseEvent | null = null;
  isActive = false;
  rect: MarqueeRect = { x: 0, y: 0, width: 0, height: 0 };

  private handleMouseDown = (e: MouseEvent) => this.onMouseDown(e);
  private handleMouseMove = (e: MouseEvent) => this.onMouseMove(e);
  private handleMouseUp = () => this.onMouseUp();
  private preventSelect = (e: Event) => e.preventDefault();

  constructor(host: ReactiveControllerHost, store: Store<AppState>) {
    this.host = host;
    this.store = store;
    host.addController(this);
  }

  hostConnected(): void {}
  hostDisconnected(): void {
    this.detach();
  }

  attach(container: HTMLElement): void {
    this.detach();
    this.container = container;
    container.addEventListener('mousedown', this.handleMouseDown);
  }

  detach(): void {
    if (this.container) {
      this.container.removeEventListener('mousedown', this.handleMouseDown);
    }
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseup', this.handleMouseUp);
    document.removeEventListener('selectstart', this.preventSelect);
    this.stopAutoScroll();
    this._lastMouseEvent = null;
  }

  private isInteractiveTarget(e: MouseEvent): boolean {
    const path = e.composedPath();
    return path.some((el) => {
      if (!(el instanceof HTMLElement)) return false;
      if (el instanceof HTMLButtonElement || el instanceof HTMLInputElement) return true;
      const tag = el.tagName.toLowerCase();
      if (tag.startsWith('ap-asset-') || tag.startsWith('ap-folder-')) return true;
      if (el.classList.contains('check') || el.classList.contains('check-box')) return true;
      return false;
    });
  }

  private onMouseDown(e: MouseEvent): void {
    if (e.button !== 0 || this.isInteractiveTarget(e)) return;
    const rect = this.container!.getBoundingClientRect();
    this.startX = e.clientX - rect.left + this.container!.scrollLeft;
    this.startY = e.clientY - rect.top + this.container!.scrollTop;
    this.startClientX = e.clientX;
    this.startClientY = e.clientY;
    this._dragging = false;
    this.isActive = false;
    document.addEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('mouseup', this.handleMouseUp);
  }

  private onMouseMove(e: MouseEvent): void {
    if (!this.container) return;

    // Check if we've passed the drag threshold
    if (!this._dragging) {
      const dx = Math.abs(e.clientX - this.startClientX);
      const dy = Math.abs(e.clientY - this.startClientY);
      if (dx < DRAG_THRESHOLD && dy < DRAG_THRESHOLD) return;
      // Threshold exceeded — activate marquee
      this._dragging = true;
      this.isActive = true;
      document.addEventListener('selectstart', this.preventSelect);
      window.getSelection()?.removeAllRanges();
      this.preMarqueeSelection = new Map(this.store.getState().selectedAssets);
      this.preMarqueeFolderSelection = new Map(this.store.getState().selectedFolders);
    }

    this._lastMouseEvent = e;
    this.updateMarqueeRect(e);
    this.startAutoScroll(e);
  }

  private updateMarqueeRect(e: MouseEvent): void {
    if (!this.container) return;
    const containerRect = this.container.getBoundingClientRect();
    const currentX = e.clientX - containerRect.left + this.container.scrollLeft;
    const currentY = e.clientY - containerRect.top + this.container.scrollTop;

    this.rect = {
      x: Math.min(this.startX, currentX),
      y: Math.min(this.startY, currentY),
      width: Math.abs(currentX - this.startX),
      height: Math.abs(currentY - this.startY),
    };
    this.host.requestUpdate();
    this.selectIntersecting();
  }

  private startAutoScroll(e: MouseEvent): void {
    if (!this.container) return;
    const containerRect = this.container.getBoundingClientRect();

    const distTop = e.clientY - containerRect.top;
    const distBottom = containerRect.bottom - e.clientY;

    const needsScroll = distTop < SCROLL_EDGE_SIZE || distBottom < SCROLL_EDGE_SIZE;

    if (needsScroll && !this._scrollRAF) {
      this._scrollRAF = requestAnimationFrame(() => this.autoScrollTick());
    } else if (!needsScroll) {
      this.stopAutoScroll();
    }
  }

  private autoScrollTick(): void {
    this._scrollRAF = null;
    if (!this.container || !this._dragging || !this._lastMouseEvent) return;

    const containerRect = this.container.getBoundingClientRect();
    const e = this._lastMouseEvent;
    const distTop = e.clientY - containerRect.top;
    const distBottom = containerRect.bottom - e.clientY;

    let scrollDelta = 0;
    if (distTop < SCROLL_EDGE_SIZE) {
      scrollDelta = -SCROLL_SPEED * (1 - distTop / SCROLL_EDGE_SIZE);
    } else if (distBottom < SCROLL_EDGE_SIZE) {
      scrollDelta = SCROLL_SPEED * (1 - distBottom / SCROLL_EDGE_SIZE);
    }

    if (scrollDelta !== 0) {
      this.container.scrollTop += scrollDelta;
      this.updateMarqueeRect(e);
      this._scrollRAF = requestAnimationFrame(() => this.autoScrollTick());
    }
  }

  private stopAutoScroll(): void {
    if (this._scrollRAF) {
      cancelAnimationFrame(this._scrollRAF);
      this._scrollRAF = null;
    }
  }

  private onMouseUp(): void {
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseup', this.handleMouseUp);
    document.removeEventListener('selectstart', this.preventSelect);
    this.stopAutoScroll();
    this._lastMouseEvent = null;
    if (this._dragging) {
      this.isActive = false;
      this._dragging = false;
      this.rect = { x: 0, y: 0, width: 0, height: 0 };
      this.host.requestUpdate();
    }
  }

  private querySelectableElements(): { assetCards: Element[]; folderCards: Element[] } {
    const assetCards: Element[] = [];
    const folderCards: Element[] = [];
    // Cards are inside grid-view/list-view shadow DOMs, so we need to pierce shadow boundaries
    for (const child of Array.from(this.container!.children)) {
      if (child.shadowRoot) {
        const assets = child.shadowRoot.querySelectorAll('[data-asset-uuid]');
        if (assets.length > 0) assetCards.push(...Array.from(assets));
        const folders = child.shadowRoot.querySelectorAll('[data-folder-uuid]');
        if (folders.length > 0) folderCards.push(...Array.from(folders));
      }
    }
    // Fallback: try direct query (won't pierce shadow DOM but covers edge cases)
    if (assetCards.length === 0) {
      assetCards.push(...Array.from(this.container!.querySelectorAll('[data-asset-uuid]')));
    }
    if (folderCards.length === 0) {
      folderCards.push(...Array.from(this.container!.querySelectorAll('[data-folder-uuid]')));
    }
    return { assetCards, folderCards };
  }

  private getCardRelativeRect(card: Element): { x: number; y: number; width: number; height: number } {
    const cardRect = card.getBoundingClientRect();
    const containerRect = this.container!.getBoundingClientRect();
    return {
      x: cardRect.left - containerRect.left + this.container!.scrollLeft,
      y: cardRect.top - containerRect.top + this.container!.scrollTop,
      width: cardRect.width,
      height: cardRect.height,
    };
  }

  private intersectsMarquee(cardRelative: { x: number; y: number; width: number; height: number }): boolean {
    return (
      this.rect.x < cardRelative.x + cardRelative.width &&
      this.rect.x + this.rect.width > cardRelative.x &&
      this.rect.y < cardRelative.y + cardRelative.height &&
      this.rect.y + this.rect.height > cardRelative.y
    );
  }

  private selectIntersecting(): void {
    if (!this.container) return;
    const state = this.store.getState();
    const folderSelectionEnabled = state.config?.folderSelection === true;
    const { assetCards, folderCards } = this.querySelectableElements();

    const selectedAssets = new Map(this.preMarqueeSelection);
    const selectedFolders = folderSelectionEnabled ? new Map(this.preMarqueeFolderSelection) : state.selectedFolders;

    assetCards.forEach((card) => {
      const cardRelative = this.getCardRelativeRect(card);
      const uuid = (card as HTMLElement).dataset.assetUuid!;
      if (this.intersectsMarquee(cardRelative)) {
        const assetData = state.assets.find((a) => a.uuid === uuid);
        if (assetData) selectedAssets.set(uuid, assetData);
      }
    });

    if (folderSelectionEnabled) {
      folderCards.forEach((card) => {
        const cardRelative = this.getCardRelativeRect(card);
        const uuid = (card as HTMLElement).dataset.folderUuid!;
        if (this.intersectsMarquee(cardRelative)) {
          const folderData = state.folders.find((f) => f.uuid === uuid);
          if (folderData) selectedFolders.set(uuid, folderData);
        }
      });
    }

    const max = state.config?.maxSelections;
    const totalSize = selectedAssets.size + (folderSelectionEnabled ? selectedFolders.size : 0);
    if (max && totalSize > max) {
      // Trim assets first (keep all folders, trim assets)
      const assetEntries = Array.from(selectedAssets.entries()).slice(0, Math.max(0, max - selectedFolders.size));
      this.store.setState({
        selectedAssets: new Map(assetEntries),
        ...(folderSelectionEnabled ? { selectedFolders } : {}),
      });
    } else {
      this.store.setState({
        selectedAssets: selectedAssets,
        ...(folderSelectionEnabled ? { selectedFolders } : {}),
      });
    }
  }
}
