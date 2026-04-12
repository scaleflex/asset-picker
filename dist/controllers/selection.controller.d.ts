import { ReactiveController, ReactiveControllerHost } from 'lit';
import { Store } from '../store/store';
import { AppState } from '../store/store.types';
import { Asset } from '../types/asset.types';
import { Folder } from '../types/folder.types';
export declare class SelectionController implements ReactiveController {
    private host;
    private store;
    private lastClickedIndex;
    constructor(host: ReactiveControllerHost, store: Store<AppState>);
    hostConnected(): void;
    hostDisconnected(): void;
    private get _folderSelectionEnabled();
    /**
     * Build a combined list matching the visual render order: folders first, then assets.
     * Only used when folder selection is enabled for shift+click ranges.
     */
    private _getCombinedList;
    private _applyRangeSelection;
    handleSelect(asset: Asset, index: number, event: MouseEvent): void;
    handleFolderSelect(folder: Folder, index: number, event: MouseEvent): void;
    isSelected(uuid: string): boolean;
    isFolderSelected(uuid: string): boolean;
    resetRange(): void;
    selectAll(assets: Asset[]): number;
    selectAllFolders(folders: Folder[]): void;
    clearSelection(): void;
    getSelectedAssets(): Asset[];
    getSelectedFolders(): Folder[];
}
//# sourceMappingURL=selection.controller.d.ts.map