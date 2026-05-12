import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
	'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[6px] text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0',
	{
		variants: {
			variant: {
				primary: 'bg-[#092E44] text-white shadow hover:opacity-90',
				secondary: 'bg-secondary text-secondary-foreground border border-input shadow-sm hover:bg-secondary/80',
				ghost: 'bg-transparent hover:bg-accent hover:text-accent-foreground',
				danger: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
			},
			size: {
				sm: 'h-8 px-3 text-xs',
				md: 'h-9 px-4 text-sm',
				lg: 'h-10 px-5 text-base',
			},
		},
		defaultVariants: {
			variant: 'primary',
			size: 'md',
		},
	},
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
	VariantProps<typeof buttonVariants> & {
		/** Render as child element (e.g. anchor) while keeping button styles */
		asChild?: boolean;
		/** Shows a spinner and disables pointer events */
		loading?: boolean;
	};

/**
 * Primary action control for forms and CTAs. Supports FlexPrice-like variants,
 * three sizes, loading state, and Radix `asChild` composition.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, loading = false, disabled, children, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button';
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				disabled={loading || disabled}
				aria-busy={loading || undefined}
				{...props}
			>
				{loading ? <Loader2 className='animate-spin' aria-hidden /> : null}
				{children}
			</Comp>
		);
	},
);
Button.displayName = 'Button';
