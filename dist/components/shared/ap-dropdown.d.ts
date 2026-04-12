import { LitElement } from 'lit';
export interface DropdownOption {
    value: string;
    label: string;
    icon?: string;
}
export declare class ApDropdown extends LitElement {
    static styles: import('lit').CSSResult[];
    value: string;
    label: string;
    variant: 'default' | 'borderless';
    clearable: boolean;
    options: DropdownOption[];
    private _open;
    private _focusedIndex;
    private _menuPosition;
    private _menuAlign;
    private _menuTop;
    private _menuBottom;
    private _menuLeft;
    private _menuRight;
    private _menuWidth;
    close(): void;
    render(): import('lit-html').TemplateResult<1>;
    private _toggle;
    private _clear;
    private _select;
    private _updateMenuPosition;
    private _handleTriggerKeydown;
    private _handleMenuKeydown;
    private _focusCurrentOption;
    disconnectedCallback(): void;
    private _handleOutsideClick;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-dropdown': ApDropdown;
    }
}
//# sourceMappingURL=ap-dropdown.d.ts.map