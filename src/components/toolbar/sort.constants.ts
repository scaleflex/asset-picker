/**
 * Per-view sort option sets.
 * Each option maps a SortBy value to a human-readable label.
 */

import type { SortBy } from '../../types/config.types';

export interface SortOption {
  value: SortBy;
  label: string;
}

export const MAIN_SORT_OPTIONS: SortOption[] = [
  { value: 'name', label: 'Name' },
  { value: 'created_at', label: 'Uploaded' },
  { value: 'modified_at', label: 'Modified' },
  { value: 'size', label: 'Size' },
  { value: 'type', label: 'Format' },
];

export const SEARCH_SORT_OPTIONS: SortOption[] = [
  { value: 'relevance', label: 'Relevance' },
  ...MAIN_SORT_OPTIONS,
];

export const FOLDERS_SORT_OPTIONS: SortOption[] = [
  { value: 'name', label: 'Name' },
  { value: 'created_at', label: 'Uploaded' },
  { value: 'modified_at', label: 'Modified' },
  { value: 'files_count_recursive', label: 'Assets count' },
  { value: 'files_size_recursive', label: 'Assets size' },
];

export const LABELS_SORT_OPTIONS: SortOption[] = [
  { value: 'name', label: 'Name' },
];

export const COLLECTIONS_SORT_OPTIONS: SortOption[] = [
  { value: 'name', label: 'Name' },
  { value: 'created_at', label: 'Uploaded' },
  { value: 'updated_at', label: 'Modified' },
];

export const COLLECTION_FOLDERS_SORT_OPTIONS: SortOption[] = [
  { value: 'name', label: 'Name' },
];
