import { LitElement } from 'lit';
import { Asset } from '../../types/asset.types';
import { Folder, FolderPreviewImage } from '../../types/folder.types';
export declare class ApListView extends LitElement {
    static styles: import('lit').CSSResult;
    assets: Asset[];
    folders: Folder[];
    selectedIds: string[];
    selectedFolderIds: string[];
    isLoading: boolean;
    multiSelect: boolean;
    folderSelectable: boolean;
    totalCount: number;
    isSelectingAll: boolean;
    folderPreviews: Record<string, FolderPreviewImage[]>;
    private _compactLevel;
    private _resizeObserver?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _getGridColumns;
    private get _allVisibleSelected();
    private _handleHeaderCheckboxClick;
    render(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-list-view': ApListView;
    }
}
//# sourceMappingURL=ap-list-view.d.ts.map