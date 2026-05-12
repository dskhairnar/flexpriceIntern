import type { Preview } from '@storybook/react';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import '../src/index.css';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		layout: 'padded',
		options: {
			storySort: {
				order: ['Design System', ['Atoms', 'Molecules', 'Organisms', 'Advanced']],
			},
		},
	},
	decorators: [
		(Story) => (
			<TooltipProvider delayDuration={300}>
				<Story />
			</TooltipProvider>
		),
	],
};

export default preview;
