/**
 * Backend permission codes returned by the SASS key exchange endpoint.
 *
 * Internal-only — not re-exported from `src/index.ts`. Permission gating
 * is an implementation detail; consumers shouldn't need to construct
 * permission codes themselves.
 *
 * Add entries here as new UI is gated. Source of truth is
 * `@scaleflex/widget-utils/lib/constants.PERMISSIONS`; mirrored locally
 * to avoid pulling React + babel/runtime into this Lit-based library.
 */
export declare const PERMISSIONS: {
    readonly FOLDER_CREATE: "DIR_CREATE";
};
export type Permission = (typeof PERMISSIONS)[keyof typeof PERMISSIONS] | (string & {});
//# sourceMappingURL=permission.types.d.ts.map