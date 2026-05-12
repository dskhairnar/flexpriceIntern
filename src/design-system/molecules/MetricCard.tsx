import { ArrowDownRight, ArrowUpRight, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

export type MetricCardProps = {
	label: string;
	value: string;
	/** Percentage delta vs previous period; `0` is flat */
	trend?: number;
	className?: string;
};

/**
 * Dashboard KPI tile with optional trend glyph, matching FlexPrice revenue and usage summaries.
 */
export function MetricCard({ label, value, trend, className }: MetricCardProps) {
	const tone =
		trend === undefined || trend === 0 ? 'muted' : trend > 0 ? 'positive' : ('negative' as const);
	const Icon = trend === undefined || trend === 0 ? Minus : trend > 0 ? ArrowUpRight : ArrowDownRight;
	return (
		<div className={cn('rounded-[6px] border border-border bg-card p-4 shadow-sm', className)}>
			<div className='text-sm text-muted-foreground'>{label}</div>
			<div className='mt-1 flex items-end justify-between gap-2'>
				<div className='text-2xl font-semibold tracking-tight'>{value}</div>
				{trend !== undefined ? (
					<div
						className={cn(
							'flex items-center gap-0.5 text-xs font-medium',
							tone === 'positive' && 'text-emerald-600',
							tone === 'negative' && 'text-red-600',
							tone === 'muted' && 'text-muted-foreground',
						)}
					>
						<Icon className='size-4' />
						{trend === 0 ? '0%' : `${trend > 0 ? '+' : ''}${trend.toFixed(1)}%`}
					</div>
				) : null}
			</div>
		</div>
	);
}
