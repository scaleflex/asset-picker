/**
 * Sort persistence utilities.
 * Stores and retrieves sort preferences from localStorage.
 */

import type { SortBy, SortDirection } from '../types/config.types';

const SORT_BY_KEY = 'sort-by';
const SORT_ORDER_KEY = 'sort-order';

export function saveSortPreference(sortBy: SortBy, sortDirection: SortDirection): void {
  try {
    localStorage.setItem(SORT_BY_KEY, sortBy);
    localStorage.setItem(SORT_ORDER_KEY, sortDirection);
  } catch {
    // localStorage may be unavailable (e.g. private browsing quota exceeded)
  }
}

export function loadSortPreference(): { sortBy: SortBy | null; sortDirection: SortDirection | null } {
  try {
    const sortBy = localStorage.getItem(SORT_BY_KEY) as SortBy | null;
    const sortDirection = localStorage.getItem(SORT_ORDER_KEY) as SortDirection | null;
    return { sortBy, sortDirection };
  } catch {
    return { sortBy: null, sortDirection: null };
  }
}
