import { describe, expect, it } from 'vitest';
import { createQueryConfig, DEFAULT, QUERY_PRESET_DEFAULT, QUERY_PRESET_REALTIME, QUERY_PRESET_STATIC, QUERY_PRESETS, REALTIME, STATIC } from './createQueryConfig';

describe('createQueryConfig', () => {
	it('applies preset defaults', () => {
		expect(createQueryConfig('REALTIME')).toMatchObject(QUERY_PRESET_REALTIME);
		expect(createQueryConfig('STATIC')).toMatchObject(QUERY_PRESET_STATIC);
		expect(createQueryConfig('DEFAULT')).toMatchObject(QUERY_PRESET_DEFAULT);
	});

	it('allows per-call overrides', () => {
		const merged = createQueryConfig('DEFAULT', { staleTime: 0 });
		expect(merged.staleTime).toBe(0);
		expect(merged.gcTime).toBe(QUERY_PRESETS.DEFAULT.gcTime);
	});

	it('exports named presets for call sites and providers', () => {
		expect(REALTIME).toBe(QUERY_PRESET_REALTIME);
		expect(DEFAULT).toBe(QUERY_PRESET_DEFAULT);
		expect(STATIC).toBe(QUERY_PRESET_STATIC);
	});
});
