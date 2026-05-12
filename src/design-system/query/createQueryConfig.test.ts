import { describe, expect, it } from 'vitest';
import { createQueryConfig, QUERY_PRESET_DEFAULT, QUERY_PRESET_REALTIME, QUERY_PRESET_STATIC, QUERY_PRESETS } from './createQueryConfig';

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
});
