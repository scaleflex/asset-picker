/**
 * Asset helper utilities.
 *
 * Pure functions that extract commonly-needed data from `Asset` objects,
 * eliminating boilerplate in every consumer project.
 */

import type { Asset } from '../types/asset.types';
import { getHlsUrl } from './video';

// ---------------------------------------------------------------------------
// Type checks
// ---------------------------------------------------------------------------

/** Check if the asset is an image (type starts with "image"). */
export function isImage(asset: Asset): boolean {
  return (asset.type ?? '').startsWith('image');
}

/** Check if the asset is a video (type starts with "video"). */
export function isVideo(asset: Asset): boolean {
  return (asset.type ?? '').startsWith('video');
}

/** Check if the asset is audio (type starts with "audio"). */
export function isAudio(asset: Asset): boolean {
  return (asset.type ?? '').startsWith('audio');
}

// ---------------------------------------------------------------------------
// URLs
// ---------------------------------------------------------------------------

/**
 * Get the CDN URL for an asset, falling back to the public URL.
 *
 * @example
 * ```ts
 * const url = getCdnUrl(asset);
 * // "https://token.filerobot.com/path/to/image.jpg"
 * ```
 */
export function getCdnUrl(asset: Asset): string {
  return asset.url?.cdn ?? asset.url?.public ?? '';
}

// ---------------------------------------------------------------------------
// Alt text
// ---------------------------------------------------------------------------

/**
 * Derive a human-readable alt text from asset metadata.
 *
 * Priority: `meta.alt` > `meta.title` (string or localized record) > filename
 * (without extension).
 *
 * @param asset - The asset to extract alt text from.
 * @param lang  - Preferred language code for localized titles (e.g. "en").
 *                Falls back to the first available language.
 *
 * @example
 * ```ts
 * const alt = getAltText(asset);        // uses first available language
 * const alt = getAltText(asset, 'fr');  // prefers French title
 * ```
 */
export function getAltText(asset: Asset, lang?: string): string {
  const { meta, name } = asset;

  // Explicit alt text
  if (meta?.alt) return meta.alt;

  // Title — may be a plain string or a localized Record<string, string>
  const title = meta?.title;
  if (typeof title === 'string' && title) return title;
  if (title && typeof title === 'object') {
    if (lang) {
      const inLang = title[lang];
      if (inLang) return inLang;
    }
    const firstKey = Object.keys(title)[0];
    if (firstKey) {
      const firstValue = title[firstKey];
      if (firstValue) return firstValue;
    }
  }

  // Fallback: filename without extension
  return name.split('.')[0];
}

// ---------------------------------------------------------------------------
// Dimensions
// ---------------------------------------------------------------------------

/**
 * Get the asset width (works for both images and videos).
 *
 * @returns Width in pixels, or `0` if unknown.
 */
export function getAssetWidth(asset: Asset): number {
  return asset.info?.img_w ?? asset.info?.video_w ?? 0;
}

/**
 * Get the asset height (works for both images and videos).
 *
 * @returns Height in pixels, or `0` if unknown.
 */
export function getAssetHeight(asset: Asset): number {
  return asset.info?.img_h ?? asset.info?.video_h ?? 0;
}

/**
 * Get the asset dimensions as `{ width, height }`.
 *
 * @example
 * ```ts
 * const { width, height } = getAssetDimensions(asset);
 * ```
 */
export function getAssetDimensions(asset: Asset): { width: number; height: number } {
  return {
    width: getAssetWidth(asset),
    height: getAssetHeight(asset),
  };
}

// ---------------------------------------------------------------------------
// Video transcoding
// ---------------------------------------------------------------------------

/**
 * Check whether the video asset has a transcoded (HLS) version available.
 */
export function isTranscoded(asset: Asset): boolean {
  return getHlsUrl(asset) !== null;
}

/**
 * Get the transcoded (HLS manifest) URL if available.
 *
 * @returns The HLS URL string, or `null` if not transcoded.
 */
export function getTranscodedUrl(asset: Asset): string | null {
  return getHlsUrl(asset);
}

/**
 * Get the best playback URL for a video asset.
 *
 * Priority: transcoded HLS URL > CDN URL > public URL.
 *
 * @example
 * ```ts
 * const videoSrc = getBestVideoUrl(asset);
 * ```
 */
export function getBestVideoUrl(asset: Asset): string {
  return getHlsUrl(asset) ?? getCdnUrl(asset);
}
