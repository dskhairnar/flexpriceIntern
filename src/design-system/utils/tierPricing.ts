export interface PriceTier {
	upTo: number | null;
	unitPrice: number;
}

/**
 * Computes total cost for usage across graduated tiers.
 * Each tier applies to units within `(previousUpTo, upTo]`; `null` means unlimited ceiling.
 */
export function computeGraduatedTotal(usage: number, tiers: PriceTier[]): number {
	if (usage <= 0 || tiers.length === 0) return 0;

	const sorted = [...tiers].sort((a, b) => {
		const capA = a.upTo ?? Number.POSITIVE_INFINITY;
		const capB = b.upTo ?? Number.POSITIVE_INFINITY;
		return capA - capB;
	});

	let remaining = usage;
	let total = 0;
	let floor = 0;

	for (const tier of sorted) {
		const cap = tier.upTo ?? Number.POSITIVE_INFINITY;
		const span = Math.max(0, Math.min(remaining, cap - floor));
		total += span * tier.unitPrice;
		remaining -= span;
		floor = cap;
		if (remaining <= 0) break;
	}

	return total;
}
