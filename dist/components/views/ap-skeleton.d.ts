import { LitElement } from 'lit';
import { GridSize } from '../../types/config.types';
export declare class ApSkeleton extends LitElement {
    static styles: import('lit').CSSResult;
    variant: 'grid' | 'list';
    gridSize: GridSize;
    multiSelect: boolean;
    folderCount: number;
    render(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-skeleton': ApSkeleton;
    }
}
//# sourceMappingURL=ap-skeleton.d.ts.map