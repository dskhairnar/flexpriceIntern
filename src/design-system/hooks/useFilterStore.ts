import { create } from 'zustand';
import { useEffect, useRef } from 'react';
import { filterFingerprint } from '@/design-system/utils/filterFingerprint';

export { filterFingerprint };

const EMPTY_FILTERS: Record<string, unknown> = Object.freeze({});

function readSession(routeKey: string): Record<string, unknown> {
	if (typeof window === 'undefined') return {};
	try {
		const url = new URL(window.location.href);
		const fp = url.searchParams.get('fp');
		if (fp) {
			const snap = window.sessionStorage.getItem(`filters:fp:${fp}`);
			if (snap) return JSON.parse(snap) as Record<string, unknown>;
		}
		const raw = window.sessionStorage.getItem(`filters:${routeKey}`);
		if (raw) return JSON.parse(raw) as Record<string, unknown>;
	} catch {
		/* ignore */
	}
	return {};
}

function persist(routeKey: string, filters: Record<string, unknown>) {
	if (typeof window === 'undefined') return;
	try {
		window.sessionStorage.setItem(`filters:${routeKey}`, JSON.stringify(filters));
		const fp = filterFingerprint(filters);
		window.sessionStorage.setItem(`filters:fp:${fp}`, JSON.stringify(filters));
		const url = new URL(window.location.href);
		url.searchParams.set('fp', fp);
		window.history.replaceState({}, '', url);
	} catch {
		/* ignore */
	}
}

type RootState = {
	byRoute: Record<string, Record<string, unknown>>;
	hydrated: Record<string, boolean>;
	setFilter: (routeKey: string, key: string, value: unknown) => void;
	resetFilters: (routeKey: string) => void;
	getFilters: (routeKey: string) => Record<string, unknown>;
	replaceRoute: (routeKey: string, filters: Record<string, unknown>) => void;
	markHydrated: (routeKey: string) => void;
};

export const filterRootStore = create<RootState>((set, get) => ({
	byRoute: {},
	hydrated: {},
	setFilter: (routeKey, key, value) => {
		const prev = get().byRoute[routeKey] ?? {};
		const next = { ...prev, [key]: value };
		persist(routeKey, next);
		set((s) => ({
			byRoute: { ...s.byRoute, [routeKey]: next },
		}));
	},
	resetFilters: (routeKey) => {
		persist(routeKey, {});
		set((s) => ({
			byRoute: { ...s.byRoute, [routeKey]: {} },
		}));
	},
	getFilters: (routeKey) => get().byRoute[routeKey] ?? {},
	replaceRoute: (routeKey, filters) => {
		persist(routeKey, filters);
		set((s) => ({
			byRoute: { ...s.byRoute, [routeKey]: filters },
		}));
	},
	markHydrated: (routeKey) =>
		set((s) => ({
			hydrated: { ...s.hydrated, [routeKey]: true },
		})),
}));

/**
 * Persists table and page filters per route in `sessionStorage`, mirrors a compact `fp`
 * fingerprint into the query string, and exposes a small imperative API.
 *
 * @param routeKey - Stable key for the page, e.g. `"invoices"` or `"customers"`.
 * @returns `filters`, `setFilter`, `resetFilters`, `getFilters`, and `fingerprint` for the current snapshot.
 */
export function useFilterStore(routeKey: string) {
	const filters = filterRootStore((s) => s.byRoute[routeKey] ?? EMPTY_FILTERS);
	const setFilter = filterRootStore((s) => s.setFilter);
	const resetFilters = filterRootStore((s) => s.resetFilters);
	const getFilters = filterRootStore((s) => s.getFilters);
	const replaceRoute = filterRootStore((s) => s.replaceRoute);
	const markHydrated = filterRootStore((s) => s.markHydrated);
	const hydrated = filterRootStore((s) => s.hydrated[routeKey]);

	const initRef = useRef<Record<string, boolean>>({});

	useEffect(() => {
		if (initRef.current[routeKey]) return;
		initRef.current[routeKey] = true;
		if (!hydrated) {
			const fromSession = readSession(routeKey);
			if (Object.keys(fromSession).length > 0) {
				replaceRoute(routeKey, fromSession);
			}
			markHydrated(routeKey);
		}
	}, [routeKey, hydrated, replaceRoute, markHydrated]);

	return {
		filters,
		fingerprint: filterFingerprint(filters),
		setFilter: (key: string, value: unknown) => setFilter(routeKey, key, value),
		resetFilters: () => resetFilters(routeKey),
		getFilters: () => getFilters(routeKey),
	};
}
