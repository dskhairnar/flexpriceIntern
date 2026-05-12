import { cn } from '@/lib/utils';

export type UsageBarProps = {
	label: string;
	used: number;
	entitled: number;
	className?: string;
};

/**
 * Linear meter comparing consumed usage to entitled quantity (seats, API units, credits).
 */
export function UsageBar({ label, used, entitled, className }: UsageBarProps) {
	const pct = entitled <= 0 ? 0 : Math.min(100, Math.round((used / entitled) * 100));
	return (
		<div className={cn('w-full max-w-md space-y-1', className)}>
			<div className='flex justify-between text-sm'>
				<span className='font-medium'>{label}</span>
				<span className='tabular-nums text-muted-foreground'>
					{used.toLocaleString()} / {entitled.toLocaleString()}
				</span>
			</div>
			<div className='h-2 w-full overflow-hidden rounded-full bg-muted'>
				<div
					className={cn('h-full rounded-full transition-all', pct > 90 ? 'bg-destructive' : 'bg-blue')}
					style={{ width: `${pct}%` }}
					role='progressbar'
					aria-valuenow={used}
					aria-valuemin={0}
					aria-valuemax={entitled}
				/>
			</div>
		</div>
	);
}
