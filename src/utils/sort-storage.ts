/**
 * Sort persistence utilities.
 * Stores and retrieves sort preferences from localStorage.
 */

import type { SortBy, SortDirection } from '../types/config.types';

const SORT_BY_KEY = 'sort-by';
const SORT_ORDER_KEY = 'sort-order';

const DEFAULT_SORT_BY: SortBy = 'created_at';
const DEFAULT_SORT_DIRECTION: SortDirection = 'desc';

export function saveSortPreference(sortBy: SortBy, sortDirection: SortDirection): void {
  try {
    localStorage.setItem(SORT_BY_KEY, sortBy);
    localStorage.setItem(SORT_ORDER_KEY, sortDirection);
  } catch {
    // localStorage may be unavailable (e.g. private browsing quota exceeded)
  }
}

export function loadSortPreference(): { sortBy: SortBy; sortDirection: SortDirection } {
  try {
    const sortBy = (localStorage.getItem(SORT_BY_KEY) as SortBy) || DEFAULT_SORT_BY;
    const sortDirection = (localStorage.getItem(SORT_ORDER_KEY) as SortDirection) || DEFAULT_SORT_DIRECTION;
    return { sortBy, sortDirection };
  } catch {
    return { sortBy: DEFAULT_SORT_BY, sortDirection: DEFAULT_SORT_DIRECTION };
  }
}
