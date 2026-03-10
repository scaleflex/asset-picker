import { AnyFilterKey } from '../types/filter.types';
export declare function loadPinnedFilters(projectId: string | null): {
    pinnedFilters: AnyFilterKey[];
    pinnedMetadata: string[];
};
export declare function savePinnedFilters(projectId: string | null, pinned: AnyFilterKey[]): void;
export declare function savePinnedMetadata(projectId: string | null, pinned: string[]): void;
//# sourceMappingURL=filter-pin-storage.d.ts.map