
/** Fresh data — refetch on mount/focus; use for live dashboards. */
export const QUERY_PRESET_REALTIME = {
	staleTime: 0,
	gcTime: 5 * 60 * 1000,
} as const;

/** Default FlexPrice-style cache window. */
export const QUERY_PRESET_DEFAULT = {
	staleTime: 5 * 60 * 1000,
	gcTime: 10 * 60 * 1000,
} as const;

/** Rarely changing reference data (plans, tax codes). */
export const QUERY_PRESET_STATIC = {
	staleTime: 30 * 60 * 1000,
	gcTime: 60 * 60 * 1000,
} as const;

export type QueryPresetKey = 'REALTIME' | 'DEFAULT' | 'STATIC';

export const QUERY_PRESETS: Record<QueryPresetKey, { staleTime: number; gcTime: number }> = {
	REALTIME: QUERY_PRESET_REALTIME,
	DEFAULT: QUERY_PRESET_DEFAULT,
	STATIC: QUERY_PRESET_STATIC,
};

export type QueryTimingOverrides = { staleTime?: number; gcTime?: number };

/**
 * Merges a named preset with optional per-hook overrides.
 * Use with `useQuery({ queryKey, queryFn, ...createQueryConfig('DEFAULT', { staleTime: 0 }) })`.
 */
export function createQueryConfig(preset: QueryPresetKey = 'DEFAULT', overrides?: QueryTimingOverrides): { staleTime: number; gcTime: number } {
	const base = QUERY_PRESETS[preset];
	return {
		staleTime: overrides?.staleTime ?? base.staleTime,
		gcTime: overrides?.gcTime ?? base.gcTime,
	};
}
