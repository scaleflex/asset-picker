import type { TabKey, ViewMode } from '../types/config.types';

const LAST_FOLDER_KEY = 'ap-last-folder';
const LAST_VIEW_KEY = 'ap-last-view';
const LAST_TAB_KEY = 'ap-last-tab';

/** Scope a key by project token so each project remembers its own state. */
function scopedKey(base: string, projectToken?: string): string {
  return projectToken ? `${base}:${projectToken}` : base;
}

export function saveLastFolder(path: string, projectToken?: string): void {
  try {
    localStorage.setItem(scopedKey(LAST_FOLDER_KEY, projectToken), path);
  } catch { /* ignore */ }
}

export function loadLastFolder(projectToken?: string): string | null {
  try {
    return localStorage.getItem(scopedKey(LAST_FOLDER_KEY, projectToken));
  } catch {
    return null;
  }
}

export function saveLastView(mode: ViewMode, projectToken?: string): void {
  try {
    localStorage.setItem(scopedKey(LAST_VIEW_KEY, projectToken), mode);
  } catch { /* ignore */ }
}

export function loadLastView(projectToken?: string): ViewMode | null {
  try {
    return localStorage.getItem(scopedKey(LAST_VIEW_KEY, projectToken)) as ViewMode | null;
  } catch {
    return null;
  }
}

export function saveLastTab(tab: TabKey, projectToken?: string): void {
  try {
    localStorage.setItem(scopedKey(LAST_TAB_KEY, projectToken), tab);
  } catch { /* ignore */ }
}

export function loadLastTab(projectToken?: string): TabKey | null {
  try {
    const value = localStorage.getItem(scopedKey(LAST_TAB_KEY, projectToken));
    if (value === 'assets' || value === 'folders' || value === 'labels' || value === 'collections') return value;
    return null;
  } catch {
    return null;
  }
}
