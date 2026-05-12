import { describe, expect, it } from 'vitest';
import { computeGraduatedTotal } from './tierPricing';

describe('computeGraduatedTotal', () => {
	it('sums a simple two-tier ladder', () => {
		const tiers = [
			{ upTo: 100, unitPrice: 0.1 },
			{ upTo: null, unitPrice: 0.05 },
		];
		// 100 @ 0.1 = 10, 50 @ 0.05 = 2.5
		expect(computeGraduatedTotal(150, tiers)).toBeCloseTo(12.5);
	});

	it('returns 0 for non-positive usage', () => {
		expect(computeGraduatedTotal(0, [{ upTo: 10, unitPrice: 1 }])).toBe(0);
	});
});
