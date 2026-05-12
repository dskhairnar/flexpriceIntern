import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export type SpinnerProps = {
	className?: string;
	/** Accessible label for screen readers */
	label?: string;
	size?: 'sm' | 'md' | 'lg';
};

const sizeClass = { sm: 'size-4', md: 'size-8', lg: 'size-12' };

/**
 * Inline loading indicator; pair with skeletons or full-page overlays as needed.
 */
export function Spinner({ className, label = 'Loading', size = 'md' }: SpinnerProps) {
	return <Loader2 className={cn('animate-spin text-muted-foreground', sizeClass[size], className)} role='status' aria-label={label} />;
}
