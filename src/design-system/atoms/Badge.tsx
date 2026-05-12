import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva('inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors', {
	variants: {
		variant: {
			default: 'border-transparent bg-primary text-primary-foreground',
			success: 'border-transparent bg-emerald-100 text-emerald-900',
			warning: 'border-transparent bg-amber-100 text-amber-900',
			danger: 'border-transparent bg-red-100 text-red-900',
			muted: 'border-transparent bg-muted text-muted-foreground',
			outline: 'border-border text-foreground',
		},
	},
	defaultVariants: {
		variant: 'default',
	},
});

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> &
	VariantProps<typeof badgeVariants> & {
		/** Optional leading icon */
		icon?: React.ReactNode;
	};

/**
 * Compact status label for plans, invoices, subscriptions, and metadata chips.
 */
export function Badge({ className, variant, icon, children, ...props }: BadgeProps) {
	return (
		<span className={cn(badgeVariants({ variant }), className)} {...props}>
			{icon}
			{children}
		</span>
	);
}
