import type { ComponentProps } from 'react';
import { Badge } from '@/design-system/atoms/Badge';
import { mapInvoiceStatus } from '@/design-system/utils/invoiceStatus';
import { cn } from '@/lib/utils';

export type InvoiceStatusBadgeProps = {
	status: string;
	className?: string;
};

const toneToVariant: Record<string, ComponentProps<typeof Badge>['variant']> = {
	success: 'success',
	neutral: 'outline',
	warning: 'warning',
	danger: 'danger',
	muted: 'muted',
};

/**
 * Maps raw invoice status strings to coloured chips with icons for tables and drawers.
 */
export function InvoiceStatusBadge({ status, className }: InvoiceStatusBadgeProps) {
	const { label, tone, icon: Icon } = mapInvoiceStatus(status);
	const variant = toneToVariant[tone] ?? 'outline';
	return (
		<Badge variant={variant} className={cn('capitalize', className)} icon={<Icon className='size-3.5' aria-hidden />}>
			{label}
		</Badge>
	);
}
