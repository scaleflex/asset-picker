import { AuthConfig } from '../types/config.types';
export declare class ApiClient {
    private baseUrl;
    private auth;
    private sassKey?;
    constructor(auth: AuthConfig, apiBase?: string);
    setSassKey(key: string): void;
    getSecurityTemplateKey(): string | undefined;
    private _applyAuthHeaders;
    request<T>(path: string, params?: Record<string, unknown>): Promise<T>;
    post<T>(path: string, body: unknown): Promise<T>;
}
//# sourceMappingURL=api-client.d.ts.map