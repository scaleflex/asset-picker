import { LitElement } from 'lit';
import { Asset } from '../../types/asset.types';
import { Folder } from '../../types/folder.types';
import { GridSize } from '../../types/config.types';
export declare class ApGridView extends LitElement {
    static styles: import('lit').CSSResult;
    assets: Asset[];
    folders: Folder[];
    folderPreviews: Record<string, {
        file_uri_cdn: string;
        file_type: string;
    }[]>;
    selectedIds: string[];
    selectedFolderIds: string[];
    isLoading: boolean;
    multiSelect: boolean;
    folderSelectable: boolean;
    gridSize: GridSize;
    /** Track how many items existed before the latest batch for stagger offset */
    private _prevCount;
    willUpdate(changed: Map<string, unknown>): void;
    render(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-grid-view': ApGridView;
    }
}
//# sourceMappingURL=ap-grid-view.d.ts.map