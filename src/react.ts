import {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react';
import { createElement } from 'react';
import type { AssetPickerConfig } from './types/config.types';
import type { Asset } from './types/asset.types';
import type { Folder } from './types/folder.types';
import type { AssetPicker as AssetPickerElement } from './asset-picker';

// Conditionally import define for SSR safety
if (typeof customElements !== 'undefined') {
  import('./define');
}

export interface AssetPickerRef {
  open(): void;
  close(): void;
}

export interface AssetPickerProps {
  config: AssetPickerConfig;
  open?: boolean;
  onSelect?: (assets: Asset[], folders?: Folder[]) => void;
  onSelectWithFolders?: (result: { assets: Asset[]; folders: Folder[] }) => void;
  onCancel?: () => void;
  className?: string;
  style?: CSSProperties;
}

export const AssetPicker = forwardRef<AssetPickerRef, AssetPickerProps>(
  function AssetPicker({ config, open, onSelect, onSelectWithFolders, onCancel, className, style }, ref) {
    const elRef = useRef<AssetPickerElement>(null);
    const onSelectRef = useRef(onSelect);
    const onSelectWithFoldersRef = useRef(onSelectWithFolders);
    const onCancelRef = useRef(onCancel);

    // Keep callback refs current
    useLayoutEffect(() => {
      onSelectRef.current = onSelect;
      onSelectWithFoldersRef.current = onSelectWithFolders;
      onCancelRef.current = onCancel;
    });

    useImperativeHandle(ref, () => ({
      open() {
        elRef.current?.open();
      },
      close() {
        elRef.current?.close();
      },
    }));

    // Sync config property
    useLayoutEffect(() => {
      const el = elRef.current;
      if (!el) return;
      el.config = config;
    }, [config]);

    // Sync open state — only act on explicit boolean values
    useEffect(() => {
      const el = elRef.current;
      if (!el) return;
      if (open === true) {
        el.open();
      } else if (open === false) {
        el.close();
      }
    }, [open]);

    // Stable event listeners using refs
    useEffect(() => {
      const el = elRef.current;
      if (!el) return;

      const handleSelect = (e: Event) => {
        const detail = (e as CustomEvent).detail;
        onSelectRef.current?.(detail.assets, detail.folders);
        if (detail.folders?.length > 0) {
          onSelectWithFoldersRef.current?.({ assets: detail.assets, folders: detail.folders });
        }
      };

      const handleCancel = () => {
        onCancelRef.current?.();
      };

      el.addEventListener('ap-select', handleSelect);
      el.addEventListener('ap-cancel', handleCancel);

      return () => {
        el.removeEventListener('ap-select', handleSelect);
        el.removeEventListener('ap-cancel', handleCancel);
      };
    }, []);

    return createElement('sfx-asset-picker', {
      ref: elRef,
      className,
      style,
    });
  }
);

// ---------------------------------------------------------------------------
// Provider + Hook — singleton modal pattern
// ---------------------------------------------------------------------------

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

const PickerContext = createContext<PickerContextValue | null>(null);

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
export function AssetPickerProvider({ config, children }: AssetPickerProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeConfig, setActiveConfig] = useState<AssetPickerConfig>(config);
  const resolveRef = useRef<((assets: Asset[]) => void) | null>(null);
  const rejectRef = useRef<((reason: unknown) => void) | null>(null);
  const callbackSelectRef = useRef<((assets: Asset[], folders?: Folder[]) => void) | null>(null);
  const callbackCancelRef = useRef<(() => void) | null>(null);

  const open = useCallback((overrides?: OpenOptions): Promise<Asset[]> => {
    // Reject any pending promise from a previous open() call
    if (rejectRef.current) {
      rejectRef.current('cancelled');
      resolveRef.current = null;
      rejectRef.current = null;
    }

    const { onSelect, onCancel, ...configOverrides } = overrides ?? {};
    setActiveConfig({ ...config, ...configOverrides });
    setIsOpen(true);

    callbackSelectRef.current = onSelect ?? null;
    callbackCancelRef.current = onCancel ?? null;

    // If caller provided onSelect, resolve the promise immediately
    // (they're using callback mode). Otherwise return a proper promise.
    if (onSelect) {
      return Promise.resolve([]);
    }

    return new Promise<Asset[]>((resolve, reject) => {
      resolveRef.current = resolve;
      rejectRef.current = reject;
    });
  }, [config]);

  const close = useCallback(() => {
    if (rejectRef.current) {
      rejectRef.current('cancelled');
    }
    resolveRef.current = null;
    rejectRef.current = null;
    callbackSelectRef.current = null;
    callbackCancelRef.current = null;
    setIsOpen(false);
  }, []);

  const handleSelect = useCallback((assets: Asset[], folders?: Folder[]) => {
    try {
      if (callbackSelectRef.current) {
        callbackSelectRef.current(assets, folders);
      } else if (resolveRef.current) {
        resolveRef.current(assets);
      }
    } finally {
      resolveRef.current = null;
      rejectRef.current = null;
      callbackSelectRef.current = null;
      callbackCancelRef.current = null;
      setIsOpen(false);
    }
  }, []);

  const handleCancel = useCallback(() => {
    try {
      if (callbackCancelRef.current) {
        callbackCancelRef.current();
      } else if (rejectRef.current) {
        rejectRef.current('cancelled');
      }
    } finally {
      resolveRef.current = null;
      rejectRef.current = null;
      callbackSelectRef.current = null;
      callbackCancelRef.current = null;
      setIsOpen(false);
    }
  }, []);

  const ctx = useMemo<PickerContextValue>(() => ({ open, close, isOpen }), [open, close, isOpen]);

  return createElement(
    PickerContext.Provider,
    { value: ctx },
    children,
    createElement(AssetPicker, {
      config: activeConfig,
      open: isOpen,
      onSelect: handleSelect,
      onCancel: handleCancel,
    }),
  );
}

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
export function useAssetPicker(): UseAssetPickerReturn {
  const ctx = useContext(PickerContext);
  if (!ctx) {
    throw new Error(
      'useAssetPicker() must be used inside <AssetPickerProvider>. ' +
      'Wrap your app (or layout) with <AssetPickerProvider config={...}>.',
    );
  }
  return ctx;
}
