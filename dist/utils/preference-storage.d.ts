import { TabKey, ViewMode } from '../types/config.types';
export declare function saveLastFolder(path: string, projectToken?: string): void;
export declare function loadLastFolder(projectToken?: string): string | null;
export declare function saveLastView(mode: ViewMode, projectToken?: string): void;
export declare function loadLastView(projectToken?: string): ViewMode | null;
export declare function saveLastTab(tab: TabKey, projectToken?: string): void;
export declare function loadLastTab(projectToken?: string): TabKey | null;
//# sourceMappingURL=preference-storage.d.ts.map