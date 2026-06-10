declare class AssetPickerMissingKeysHelper {
    private enabled;
    private _missingKeys;
    private _timer;
    private readonly debounceDelay;
    constructor();
    handleMissingKey(key: string, value?: string, ns?: string): void;
    private _renderCurl;
}
export declare const missingKeysHelper: AssetPickerMissingKeysHelper;
export {};
//# sourceMappingURL=missing-keys-helper.d.ts.map