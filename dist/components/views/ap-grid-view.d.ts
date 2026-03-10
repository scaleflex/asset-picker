import { LitElement } from 'lit';
import { Asset } from '../../types/asset.types';
import { Folder } from '../../types/folder.types';
export declare class ApGridView extends LitElement {
    static styles: import('lit').CSSResult;
    assets: Asset[];
    folders: Folder[];
    folderPreviews: Record<string, {
        file_uri_cdn: string;
        file_type: string;
    }[]>;
    selectedIds: string[];
    isLoading: boolean;
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