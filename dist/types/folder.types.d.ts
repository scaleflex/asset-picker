export interface FolderPreviewImage {
    file_uri_cdn: string;
    file_type: string;
}
export interface FolderOwner {
    uuid: string;
    name: string;
    email: string;
    photo?: string | null;
}
export interface Folder {
    uuid: string;
    name: string;
    path: string;
    owner?: FolderOwner;
    size?: {
        total_recursive_bytes?: number;
        total_recursive_pretty?: string;
    };
    count?: {
        files_recursive?: number;
        files_direct?: number;
    };
    created_at: string;
    modified_at?: string;
    updated_at?: string;
    visibility?: {
        in_cdn?: {
            actual: string;
            set: string;
        };
        in_dam?: {
            actual: string;
            set: string;
        };
    };
    meta?: Record<string, unknown>;
    decoration?: {
        highlight_color?: string | null;
        has_custom_preview?: boolean | null;
    };
}
//# sourceMappingURL=folder.types.d.ts.map