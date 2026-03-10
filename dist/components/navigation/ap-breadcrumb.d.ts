import { LitElement } from 'lit';
import { BreadcrumbItem } from '../../store/store.types';
export declare class ApBreadcrumb extends LitElement {
    static styles: import('lit').CSSResult;
    items: BreadcrumbItem[];
    private _navigate;
    render(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-breadcrumb': ApBreadcrumb;
    }
}
//# sourceMappingURL=ap-breadcrumb.d.ts.map