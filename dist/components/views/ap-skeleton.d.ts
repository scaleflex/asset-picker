import { LitElement } from 'lit';
import { GridSize } from '../../types/config.types';
import { TFunction } from '../../store/store.types';
export declare class ApSkeleton extends LitElement {
    static styles: import('lit').CSSResult;
    t: TFunction;
    variant: 'grid' | 'list';
    gridSize: GridSize;
    multiSelect: boolean;
    folderCount: number;
    render(): import('lit').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-skeleton': ApSkeleton;
    }
}
//# sourceMappingURL=ap-skeleton.d.ts.map