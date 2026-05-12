import type { LucideIcon } from 'lucide-react';
import { Button } from '@/design-system/atoms/Button';
import { cn } from '@/lib/utils';

export type EmptyStateProps = {
	icon: LucideIcon;
	title: string;
	description: string;
	actionLabel?: string;
	onAction?: () => void;
	className?: string;
};

/**
 * Full-width empty surface for list pages before the first record exists.
 */
export function EmptyState({ icon: Icon, title, description, actionLabel = 'Create', onAction, className }: EmptyStateProps) {
	return (
		<div className={cn('flex min-h-[360px] flex-col items-center justify-center gap-4 rounded-[6px] border border-dashed border-border bg-muted/10 px-6 py-12 text-center', className)}>
			<div className='rounded-full bg-muted p-4 text-muted-foreground'>
				<Icon className='size-10' aria-hidden />
			</div>
			<div className='max-w-md space-y-2'>
				<h2 className='text-lg font-semibold tracking-tight'>{title}</h2>
				<p className='text-sm text-muted-foreground'>{description}</p>
			</div>
			{onAction ? (
				<Button type='button' onClick={onAction}>
					{actionLabel}
				</Button>
			) : null}
		</div>
	);
}
