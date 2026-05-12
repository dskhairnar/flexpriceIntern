import { act, renderHook } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { filterRootStore, useFilterStore } from './useFilterStore';

describe('useFilterStore', () => {
	afterEach(() => {
		window.sessionStorage.clear();
		window.history.replaceState({}, '', '/');
		filterRootStore.setState({ byRoute: {}, hydrated: {} });
	});

	it('returns the same empty filters snapshot across rerenders before a route is populated', () => {
		const { result, rerender } = renderHook(() => useFilterStore('empty-route'));
		const firstFilters = result.current.filters;

		rerender();

		expect(result.current.filters).toBe(firstFilters);
		expect(result.current.filters).toEqual({});
	});

	it('stores and resets route filters', () => {
		const { result } = renderHook(() => useFilterStore('customers'));

		act(() => result.current.setFilter('status', 'active'));

		expect(result.current.filters).toEqual({ status: 'active' });
		expect(window.sessionStorage.getItem('filters:customers')).toBe('{"status":"active"}');

		act(() => result.current.resetFilters());

		expect(result.current.filters).toEqual({});
	});
});
