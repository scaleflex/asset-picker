import { CSSProperties, ReactNode } from 'react';
import { AssetPickerConfig } from './types/config.types';
import { Asset } from './types/asset.types';
import { Folder } from './types/folder.types';
export interface AssetPickerRef {
    open(): void;
    close(): void;
}
export interface AssetPickerProps {
    config: AssetPickerConfig;
    open?: boolean;
    onSelect?: (assets: Asset[], folders?: Folder[]) => void;
    onSelectWithFolders?: (result: {
        assets: Asset[];
        folders: Folder[];
    }) => void;
    onCancel?: () => void;
    className?: string;
    style?: CSSProperties;
}
export declare const AssetPicker: import('react').ForwardRefExoticComponent<AssetPickerProps & import('react').RefAttributes<AssetPickerRef>>;
/**
 * Options passed to `picker.open()`. Extends the base config with optional
 * callback overrides. Any config property here merges with (and overrides)
 * the base config from the provider.
 */
export interface OpenOptions extends Partial<AssetPickerConfig> {
    /** Called when the user confirms selection. */
    onSelect?: (assets: Asset[], folders?: Folder[]) => void;
    /** Called when the user cancels / closes the picker. */
    onCancel?: () => void;
}
export interface UseAssetPickerReturn {
    /**
     * Open the asset picker.
     *
     * **Promise mode** (no `onSelect` in options):
     * ```ts
     * const assets = await picker.open({ multiSelect: true });
     * ```
     *
     * **Callback mode** (pass `onSelect`):
     * ```ts
     * picker.open({ onSelect: (assets) => console.log(assets) });
     * ```
     *
     * In promise mode the promise rejects with `'cancelled'` if the user
     * closes without selecting.
     */
    open(overrides?: OpenOptions): Promise<Asset[]>;
    /** Close the picker programmatically. */
    close(): void;
    /** Whether the picker is currently open. */
    isOpen: boolean;
}
export interface AssetPickerProviderProps {
    /** Base configuration applied to every `open()` call. */
    config: AssetPickerConfig;
    children: ReactNode;
}
interface PickerContextValue {
    open(overrides?: OpenOptions): Promise<Asset[]>;
    close(): void;
    isOpen: boolean;
}
/**
 * Mount a single `<AssetPicker>` instance at the root of your React tree.
 * All `useAssetPicker()` calls share this instance.
 *
 * @example
 * ```tsx
 * <AssetPickerProvider config={{ auth: { mode: 'sassKey', sassKey, projectToken } }}>
 *   <App />
 * </AssetPickerProvider>
 * ```
 */
export declare function AssetPickerProvider({ config, children }: AssetPickerProviderProps): import('react').FunctionComponentElement<import('react').ProviderProps<PickerContextValue | null>>;
/**
 * Access the singleton asset picker from anywhere in the React tree.
 *
 * Must be used inside an `<AssetPickerProvider>`.
 *
 * @example
 * ```tsx
 * function UploadButton() {
 *   const picker = useAssetPicker();
 *
 *   const handleClick = async () => {
 *     try {
 *       const assets = await picker.open({ multiSelect: true });
 *       console.log('Selected:', assets);
 *     } catch {
 *       console.log('User cancelled');
 *     }
 *   };
 *
 *   return <button onClick={handleClick}>Choose files</button>;
 * }
 * ```
 */
export declare function useAssetPicker(): UseAssetPickerReturn;
export {};
//# sourceMappingURL=react.d.ts.map