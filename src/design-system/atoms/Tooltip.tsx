import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { cn } from '@/lib/utils';

export type DesignTooltipProps = {
	children: React.ReactNode;
	content: React.ReactNode;
	/** Radix delay before open (ms). Preview wraps `TooltipProvider`. */
	delayDuration?: number;
	side?: React.ComponentProps<typeof TooltipPrimitive.Content>['side'];
};

/**
 * Contextual hint on hover/focus. Requires `TooltipProvider` (added in Storybook preview).
 */
export function DesignTooltip({ children, content, delayDuration = 400, side = 'top' }: DesignTooltipProps) {
	const trigger = React.isValidElement(children) ? children : <span>{typeof children === 'string' || typeof children === 'number' ? children : 'More information'}</span>;
	const safeContent = React.isValidElement(content) || typeof content === 'string' || typeof content === 'number' ? content : 'No additional details.';

	return (
		<TooltipPrimitive.Root delayDuration={delayDuration}>
			<TooltipPrimitive.Trigger asChild>{trigger}</TooltipPrimitive.Trigger>
			<TooltipPrimitive.Portal>
				<TooltipPrimitive.Content
					side={side}
					sideOffset={6}
					className={cn(
						'z-50 max-w-xs rounded-[6px] border border-border bg-popover px-3 py-2 text-xs text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95',
					)}
				>
					{safeContent}
					<TooltipPrimitive.Arrow className='fill-popover' width={10} height={5} />
				</TooltipPrimitive.Content>
			</TooltipPrimitive.Portal>
		</TooltipPrimitive.Root>
	);
}
