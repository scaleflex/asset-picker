import { Permission } from '../types/permission.types';
/**
 * Returns true if the given backend permission code is in the granted set.
 *
 * Returns false for `null`/`undefined` — that's the pre-exchange state for
 * `securityTemplate` auth, where we don't yet know what's granted. Callers
 * should explicitly OR with `auth.mode === 'sassKey'` to bypass when the
 * integrator provides the SASS key directly (no exchange happens).
 */
export declare function hasPermission(permissions: Permission[] | null | undefined, required: Permission): boolean;
//# sourceMappingURL=permissions.d.ts.map