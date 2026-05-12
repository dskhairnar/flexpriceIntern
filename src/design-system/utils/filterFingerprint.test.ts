import { describe, expect, it } from 'vitest';
import { filterFingerprint } from './filterFingerprint';

describe('filterFingerprint', () => {
	it('is stable for key order permutations', () => {
		const a = filterFingerprint({ z: 1, a: 2 });
		const b = filterFingerprint({ a: 2, z: 1 });
		expect(a).toBe(b);
	});

	it('changes when values change', () => {
		expect(filterFingerprint({ q: '1' })).not.toBe(filterFingerprint({ q: '2' }));
	});
});
