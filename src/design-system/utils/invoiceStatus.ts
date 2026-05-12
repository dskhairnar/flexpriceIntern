import type { LucideIcon } from 'lucide-react';
import { CheckCircle2, FileEdit, Ban, Clock, AlertCircle } from 'lucide-react';

export type InvoiceStatus = 'paid' | 'draft' | 'void' | 'open' | 'uncollectible';

export type InvoiceStatusVisual = {
	label: string;
	tone: 'success' | 'neutral' | 'warning' | 'danger' | 'muted';
	icon: LucideIcon;
};

const STATUS_MAP: Record<InvoiceStatus, InvoiceStatusVisual> = {
	paid: { label: 'Paid', tone: 'success', icon: CheckCircle2 },
	draft: { label: 'Draft', tone: 'muted', icon: FileEdit },
	void: { label: 'Void', tone: 'danger', icon: Ban },
	open: { label: 'Open', tone: 'warning', icon: Clock },
	uncollectible: { label: 'Uncollectible', tone: 'danger', icon: AlertCircle },
};

export function mapInvoiceStatus(status: string): InvoiceStatusVisual {
	const key = status.toLowerCase() as InvoiceStatus;
	if (key in STATUS_MAP) {
		return STATUS_MAP[key];
	}
	return { label: status, tone: 'neutral', icon: FileEdit };
}
