import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
	stories: ['../src/design-system/**/*.mdx', '../src/design-system/**/*.stories.@(ts|tsx)'],
	addons: [
		'@storybook/addon-onboarding',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
	],
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
	async viteFinal(config) {
		const { mergeConfig } = await import('vite');
		const path = await import('node:path');
		const { fileURLToPath } = await import('node:url');
		const dirname = path.dirname(fileURLToPath(import.meta.url));
		return mergeConfig(config, {
			resolve: {
				alias: {
					'@': path.resolve(dirname, '../src'),
				},
			},
		});
	},
};

export default config;
