import { LitElement } from 'lit';
import { Asset } from '../../types/asset.types';
import { Folder } from '../../types/folder.types';
export declare class ApListView extends LitElement {
    static styles: import('lit').CSSResult;
    assets: Asset[];
    folders: Folder[];
    selectedIds: string[];
    isLoading: boolean;
    render(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-list-view': ApListView;
    }
}
//# sourceMappingURL=ap-list-view.d.ts.map