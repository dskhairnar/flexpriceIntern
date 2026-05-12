/** Deterministic short fingerprint for filter objects (URL + sessionStorage index). */
export function filterFingerprint(filters: Record<string, unknown>): string {
	const keys = Object.keys(filters).sort();
	const normalized: Record<string, unknown> = {};
	for (const k of keys) {
		normalized[k] = filters[k];
	}
	const s = JSON.stringify(normalized);
	let h = 2166136261;
	for (let i = 0; i < s.length; i++) {
		h ^= s.charCodeAt(i);
		h = Math.imul(h, 16777619);
	}
	return (h >>> 0).toString(36);
}
