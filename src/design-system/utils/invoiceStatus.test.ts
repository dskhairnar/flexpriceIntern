import { describe, expect, it } from 'vitest';
import { mapInvoiceStatus } from './invoiceStatus';

describe('mapInvoiceStatus', () => {
	it('maps known statuses', () => {
		expect(mapInvoiceStatus('paid').tone).toBe('success');
		expect(mapInvoiceStatus('draft').label).toBe('Draft');
	});

	it('falls back for unknown strings', () => {
		const v = mapInvoiceStatus('queued');
		expect(v.label).toBe('queued');
		expect(v.tone).toBe('neutral');
	});
});
