import type { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import { createQueryConfig, QUERY_PRESETS } from './createQueryConfig';
import { StoryQueryClientProvider } from './QueryClientDecorator';

function QueryTimingDemo() {
	const staticQuery = useQuery<{ updatedAt: string }>({
		queryKey: ['docs-static'],
		queryFn: async () => ({ updatedAt: new Date().toISOString() }),
		...createQueryConfig('STATIC'),
	});

	const overrideQuery = useQuery<{ tick: number }>({
		queryKey: ['docs-override'],
		queryFn: async () => ({ tick: Math.random() }),
		...createQueryConfig('DEFAULT', { staleTime: 0 }),
	});

	return (
		<div className='max-w-xl space-y-4 text-sm'>
			<p className='text-muted-foreground'>
				Global-style defaults live in <code className='rounded bg-muted px-1'>createQueryConfig</code>. Presets:{' '}
				<code>REALTIME</code> ({QUERY_PRESETS.REALTIME.staleTime} ms stale), <code>DEFAULT</code> (5 min),{' '}
				<code>STATIC</code> (30 min).
			</p>
			<div className='rounded-[6px] border border-border p-3'>
				<div className='font-medium'>STATIC preset</div>
				<div className='text-muted-foreground'>staleTime: {String(staticQuery.dataUpdatedAt)}</div>
				<pre className='mt-2 overflow-x-auto rounded bg-muted p-2 text-xs'>{JSON.stringify(staticQuery.data, null, 2)}</pre>
			</div>
			<div className='rounded-[6px] border border-border p-3'>
				<div className='font-medium'>DEFAULT + override staleTime 0</div>
				<pre className='mt-2 overflow-x-auto rounded bg-muted p-2 text-xs'>{JSON.stringify(overrideQuery.data, null, 2)}</pre>
			</div>
		</div>
	);
}

const meta = {
	title: 'Design System/Advanced/createQueryConfig',
	component: QueryTimingDemo,
	tags: ['autodocs'],
	args: {},
	decorators: [
		(Story) => (
			<StoryQueryClientProvider>
				<Story />
			</StoryQueryClientProvider>
		),
	],
} satisfies Meta<typeof QueryTimingDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PresetsAndOverrides: Story = {
	render: () => <QueryTimingDemo />,
};
