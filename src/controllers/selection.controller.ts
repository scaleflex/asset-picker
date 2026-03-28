import type { ReactiveController, ReactiveControllerHost } from 'lit';
import type { Store } from '../store/store';
import type { AppState } from '../store/store.types';
import type { Asset } from '../types/asset.types';
import type { Folder } from '../types/folder.types';

type SelectableItem = Asset | Folder;

function isAsset(item: SelectableItem): item is Asset {
  return 'extension' in item && !('path' in item);
}

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

  private get _folderSelectionEnabled(): boolean {
    return this.store.getState().config?.folderSelection === true;
  }

  /**
   * Build a combined list matching the visual render order: folders first, then assets.
   * Only used when folder selection is enabled for shift+click ranges.
   */
  private _getCombinedList(): SelectableItem[] {
    const state = this.store.getState();
    if (!this._folderSelectionEnabled) return state.assets;
    return [...state.folders, ...state.assets];
  }

  private _applyRangeSelection(
    start: number,
    end: number,
    selectedAssets: Map<string, Asset>,
    selectedFolders: Map<string, Folder>,
  ): void {
    const combined = this._getCombinedList();
    for (let i = start; i <= end; i++) {
      const item = combined[i];
      if (!item) continue;
      if (isAsset(item)) {
        selectedAssets.set(item.uuid, item);
      } else {
        selectedFolders.set(item.uuid, item);
      }
    }
  }

  handleSelect(asset: Asset, index: number, event: MouseEvent): void {
    const state = this.store.getState();
    const selected = new Map(state.selectedAssets);
    const multiSelect = state.config?.multiSelect ?? true;

    if (!multiSelect) {
      selected.clear();
      selected.set(asset.uuid, asset);
      this.store.setState({ selectedAssets: selected, selectedFolders: new Map() });
      this.lastClickedIndex = index;
      return;
    }

    // When folder selection is enabled, the caller (view component) already passes a
    // combined index (offset by folders.length). For shift+click range selection we use
    // this index directly against the combined [folders, assets] list.
    if (event.shiftKey && this.lastClickedIndex >= 0) {
      if (this._folderSelectionEnabled) {
        const start = Math.min(this.lastClickedIndex, index);
        const end = Math.max(this.lastClickedIndex, index);
        const selectedFolders = new Map(state.selectedFolders);
        this._applyRangeSelection(start, end, selected, selectedFolders);
        const max = state.config?.maxSelections;
        if (max && selected.size + selectedFolders.size > max) return;
        this.store.setState({ selectedAssets: selected, selectedFolders: selectedFolders });
      } else {
        const start = Math.min(this.lastClickedIndex, index);
        const end = Math.max(this.lastClickedIndex, index);
        const assets = state.assets;
        for (let i = start; i <= end; i++) {
          if (assets[i]) {
            selected.set(assets[i].uuid, assets[i]);
          }
        }
        const max = state.config?.maxSelections;
        if (max && selected.size > max) return;
        this.store.setState({ selectedAssets: selected });
      }
    } else if (event.metaKey || event.ctrlKey) {
      if (selected.has(asset.uuid)) {
        selected.delete(asset.uuid);
      } else {
        selected.set(asset.uuid, asset);
      }
      const max = state.config?.maxSelections;
      const totalSize = selected.size + (this._folderSelectionEnabled ? state.selectedFolders.size : 0);
      if (max && totalSize > max) return;
      this.store.setState({ selectedAssets: selected });
    } else {
      selected.clear();
      selected.set(asset.uuid, asset);
      this.store.setState({ selectedAssets: selected, selectedFolders: new Map() });
    }

    this.lastClickedIndex = index;
  }

  handleFolderSelect(folder: Folder, index: number, event: MouseEvent): void {
    if (!this._folderSelectionEnabled) return;
    const state = this.store.getState();
    const selected = new Map(state.selectedFolders);
    const multiSelect = state.config?.multiSelect ?? true;

    if (!multiSelect) {
      selected.clear();
      selected.set(folder.uuid, folder);
      this.store.setState({ selectedFolders: selected, selectedAssets: new Map() });
      this.lastClickedIndex = index;
      return;
    }

    // index here is already the combined index (folder position in the folders array)
    if (event.shiftKey && this.lastClickedIndex >= 0) {
      const start = Math.min(this.lastClickedIndex, index);
      const end = Math.max(this.lastClickedIndex, index);
      const selectedAssets = new Map(state.selectedAssets);
      this._applyRangeSelection(start, end, selectedAssets, selected);
      const max = state.config?.maxSelections;
      if (max && selectedAssets.size + selected.size > max) return;
      this.store.setState({ selectedAssets: selectedAssets, selectedFolders: selected });
    } else if (event.metaKey || event.ctrlKey) {
      if (selected.has(folder.uuid)) {
        selected.delete(folder.uuid);
      } else {
        selected.set(folder.uuid, folder);
      }
      const max = state.config?.maxSelections;
      const totalSize = selected.size + state.selectedAssets.size;
      if (max && totalSize > max) return;
      this.store.setState({ selectedFolders: selected });
    } else {
      selected.clear();
      selected.set(folder.uuid, folder);
      this.store.setState({ selectedFolders: selected, selectedAssets: new Map() });
    }

    this.lastClickedIndex = index;
  }

  isSelected(uuid: string): boolean {
    return this.store.getState().selectedAssets.has(uuid);
  }

  isFolderSelected(uuid: string): boolean {
    return this.store.getState().selectedFolders.has(uuid);
  }

  resetRange(): void {
    this.lastClickedIndex = -1;
  }

  selectAll(assets: Asset[]): number {
    const state = this.store.getState();
    const max = state.config?.maxSelections;
    const folderCount = this._folderSelectionEnabled ? state.selectedFolders.size : 0;
    const selected = new Map<string, Asset>();
    const limit = max ? Math.max(0, Math.min(assets.length, max - folderCount)) : assets.length;
    for (let i = 0; i < limit; i++) {
      selected.set(assets[i].uuid, assets[i]);
    }
    this.store.setState({ selectedAssets: selected });
    this.lastClickedIndex = -1;
    return selected.size;
  }

  selectAllFolders(folders: Folder[]): void {
    if (!this._folderSelectionEnabled) return;
    const state = this.store.getState();
    const max = state.config?.maxSelections;
    const selected = new Map<string, Folder>();
    const limit = max ? Math.max(0, Math.min(folders.length, max - state.selectedAssets.size)) : folders.length;
    for (let i = 0; i < limit; i++) {
      selected.set(folders[i].uuid, folders[i]);
    }
    this.store.setState({ selectedFolders: selected });
  }

  clearSelection(): void {
    this.store.setState({ selectedAssets: new Map(), selectedFolders: new Map() });
    this.lastClickedIndex = -1;
  }

  getSelectedAssets(): Asset[] {
    return Array.from(this.store.getState().selectedAssets.values());
  }

  getSelectedFolders(): Folder[] {
    return Array.from(this.store.getState().selectedFolders.values());
  }
}
