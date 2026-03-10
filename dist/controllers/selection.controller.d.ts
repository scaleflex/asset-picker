import { ReactiveController, ReactiveControllerHost } from 'lit';
import { Store } from '../store/store';
import { AppState } from '../store/store.types';
import { Asset } from '../types/asset.types';
export declare class SelectionController implements ReactiveController {
    private host;
    private store;
    private lastClickedIndex;
    constructor(host: ReactiveControllerHost, store: Store<AppState>);
    hostConnected(): void;
    hostDisconnected(): void;
    handleSelect(asset: Asset, index: number, event: MouseEvent): void;
    isSelected(uuid: string): boolean;
    resetRange(): void;
    clearSelection(): void;
    getSelectedAssets(): Asset[];
}
//# sourceMappingURL=selection.controller.d.ts.map