import type { TabKey, ViewMode } from '../types/config.types';

const LAST_FOLDER_KEY = 'ap-last-folder';
const LAST_VIEW_KEY = 'ap-last-view';
const LAST_TAB_KEY = 'ap-last-tab';

export function saveLastFolder(path: string): void {
  try {
    localStorage.setItem(LAST_FOLDER_KEY, path);
  } catch { /* ignore */ }
}

export function loadLastFolder(): string | null {
  try {
    return localStorage.getItem(LAST_FOLDER_KEY);
  } catch {
    return null;
  }
}

export function saveLastView(mode: ViewMode): void {
  try {
    localStorage.setItem(LAST_VIEW_KEY, mode);
  } catch { /* ignore */ }
}

export function loadLastView(): ViewMode | null {
  try {
    return localStorage.getItem(LAST_VIEW_KEY) as ViewMode | null;
  } catch {
    return null;
  }
}

export function saveLastTab(tab: TabKey): void {
  try {
    localStorage.setItem(LAST_TAB_KEY, tab);
  } catch { /* ignore */ }
}

export function loadLastTab(): TabKey | null {
  try {
    const value = localStorage.getItem(LAST_TAB_KEY);
    if (value === 'assets' || value === 'folders') return value;
    return null;
  } catch {
    return null;
  }
}
