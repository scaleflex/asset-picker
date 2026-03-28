import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  type CSSProperties,
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
