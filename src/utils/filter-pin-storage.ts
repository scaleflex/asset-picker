/**
 * Pin persistence utilities.
 * Stores and retrieves pinned filter/metadata selections from localStorage.
 */

import type { AnyFilterKey } from '../types/filter.types';

import {
  FILTERS_PINNED_PREFIX,
  METADATA_PINNED_PREFIX,
  DEFAULT_PINNED_FILTERS,
} from '../components/filters/filters.constants';

// ── Public API ──────────────────────────────────────────────────────

export function loadPinnedFilters(
  projectId: string | null,
): { pinnedFilters: AnyFilterKey[]; pinnedMetadata: string[] } {
  const filtersRaw = localStorage.getItem(FILTERS_PINNED_PREFIX + projectId);
  const metadataRaw = localStorage.getItem(METADATA_PINNED_PREFIX + projectId);

  let pinnedFilters: AnyFilterKey[];
  try {
    pinnedFilters = filtersRaw ? JSON.parse(filtersRaw) : [...DEFAULT_PINNED_FILTERS];
  } catch {
    pinnedFilters = [...DEFAULT_PINNED_FILTERS];
  }

  let pinnedMetadata: string[];
  try {
    pinnedMetadata = metadataRaw ? JSON.parse(metadataRaw) : [];
  } catch {
    pinnedMetadata = [];
  }

  return { pinnedFilters, pinnedMetadata };
}

export function savePinnedFilters(
  projectId: string | null,
  pinned: AnyFilterKey[],
): void {
  localStorage.setItem(FILTERS_PINNED_PREFIX + projectId, JSON.stringify(pinned));
}

export function savePinnedMetadata(
  projectId: string | null,
  pinned: string[],
): void {
  localStorage.setItem(METADATA_PINNED_PREFIX + projectId, JSON.stringify(pinned));
}
