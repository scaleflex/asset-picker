import type { ReactiveController, ReactiveControllerHost } from 'lit';
import type { Store } from '../store/store';
import type { AppState } from '../store/store.types';
import type { Asset } from '../types/asset.types';

export class SelectionController implements ReactiveController {
  private host: ReactiveControllerHost;
  private store: Store<AppState>;
  private lastClickedIndex = -1;

  constructor(host: ReactiveControllerHost, store: Store<AppState>) {
    this.host = host;
    this.store = store;
    host.addController(this);
  }

  hostConnected(): void {}
  hostDisconnected(): void {}

  handleSelect(asset: Asset, index: number, event: MouseEvent): void {
    const state = this.store.getState();
    const selected = new Map(state.selectedAssets);
    const multiSelect = state.config?.multiSelect ?? true;

    if (!multiSelect) {
      selected.clear();
      selected.set(asset.uuid, asset);
      this.store.setState({ selectedAssets: selected });
      this.lastClickedIndex = index;
      return;
    }

    if (event.shiftKey && this.lastClickedIndex >= 0) {
      const start = Math.min(this.lastClickedIndex, index);
      const end = Math.max(this.lastClickedIndex, index);
      const assets = state.assets;
      for (let i = start; i <= end; i++) {
        if (assets[i]) {
          selected.set(assets[i].uuid, assets[i]);
        }
      }
    } else if (event.metaKey || event.ctrlKey) {
      if (selected.has(asset.uuid)) {
        selected.delete(asset.uuid);
      } else {
        selected.set(asset.uuid, asset);
      }
    } else {
      selected.clear();
      selected.set(asset.uuid, asset);
    }

    const max = state.config?.maxSelections;
    if (max && selected.size > max) {
      return; // Don't allow selecting more
    }

    this.lastClickedIndex = index;
    this.store.setState({ selectedAssets: selected });
  }

  isSelected(uuid: string): boolean {
    return this.store.getState().selectedAssets.has(uuid);
  }

  resetRange(): void {
    this.lastClickedIndex = -1;
  }

  selectAll(assets: Asset[]): number {
    const state = this.store.getState();
    const max = state.config?.maxSelections;
    const selected = new Map<string, Asset>();
    const limit = max ? Math.min(assets.length, max) : assets.length;
    for (let i = 0; i < limit; i++) {
      selected.set(assets[i].uuid, assets[i]);
    }
    this.store.setState({ selectedAssets: selected });
    this.lastClickedIndex = -1;
    return selected.size;
  }

  clearSelection(): void {
    this.store.setState({ selectedAssets: new Map() });
    this.lastClickedIndex = -1;
  }

  getSelectedAssets(): Asset[] {
    return Array.from(this.store.getState().selectedAssets.values());
  }
}
