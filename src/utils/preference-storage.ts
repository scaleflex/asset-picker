import type { ViewMode } from '../types/config.types';

const LAST_FOLDER_KEY = 'ap-last-folder';
const LAST_VIEW_KEY = 'ap-last-view';

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
