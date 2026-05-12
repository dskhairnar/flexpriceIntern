import { cn } from '@/lib/utils';

export type PricingTierRow = {
	tier: string;
	from: number;
	to: number | null;
	unitPrice: string;
	flatFee?: string;
};

export type PricingTierTableProps = {
	title?: string;
	tiers: PricingTierRow[];
	className?: string;
};

/**
 * Read-only graduated or volume tier matrix for plan builder previews and docs.
 */
export function PricingTierTable({ title = 'Graduated pricing', tiers, className }: PricingTierTableProps) {
	return (
		<div className={cn('overflow-hidden rounded-[6px] border border-border', className)}>
			<div className='border-b border-border bg-muted/50 px-4 py-2 text-sm font-semibold'>{title}</div>
			<table className='w-full border-collapse text-sm'>
				<thead>
					<tr className='border-b border-border text-left text-xs uppercase text-muted-foreground'>
						<th className='px-4 py-2'>Tier</th>
						<th className='px-4 py-2'>From</th>
						<th className='px-4 py-2'>To</th>
						<th className='px-4 py-2'>Per unit</th>
						<th className='px-4 py-2'>Flat</th>
					</tr>
				</thead>
				<tbody>
					{tiers.map((t) => (
						<tr key={t.tier} className='border-b border-border last:border-0 hover:bg-muted/30'>
							<td className='px-4 py-2 font-medium'>{t.tier}</td>
							<td className='px-4 py-2 tabular-nums'>{t.from.toLocaleString()}</td>
							<td className='px-4 py-2 tabular-nums'>{t.to === null ? '∞' : t.to.toLocaleString()}</td>
							<td className='px-4 py-2 tabular-nums'>{t.unitPrice}</td>
							<td className='px-4 py-2 tabular-nums text-muted-foreground'>{t.flatFee ?? '—'}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
