import { SecurityTemplateAuth } from '../types/config.types';
import { Permission } from '../types/permission.types';
/**
 * Exchange a security-template key for a short-lived SASS key, capturing the
 * permission set the backend returns alongside it (asset-picker gates
 * folder-create on these permissions).
 *
 * dam-core's `DamClient` / `resolveAuth` perform the same exchange but discard
 * the permissions, so asset-picker keeps this thin, permission-aware exchange and
 * then hands the resolved key to `DamClient` in sass-key mode. The request URL
 * (`{apiBase}/key/{securityTemplateKey}`) and the `X-Filerobot-Key` header match
 * the previous `ApiClient`-based call exactly, so behavior is unchanged.
 */
export declare function exchangeSecurityTemplate(auth: SecurityTemplateAuth, apiBase: string): Promise<{
    key: string;
    permissions: Permission[];
}>;
//# sourceMappingURL=auth.service.d.ts.map