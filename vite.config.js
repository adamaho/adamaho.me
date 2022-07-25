import path from 'path';

import { sveltekit } from '@sveltejs/kit/vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), vanillaExtractPlugin()],
	resolve: {
		alias: {
			'~/styles': path.resolve('./src/styles'),
			'~/components': path.resolve('./src/components'),
			'~/stores': path.resolve('./src/stores'),
			'~/lib': path.resolve('./src/lib'),
			'~/constants': path.resolve('./src/constants'),
			'~/snippets': path.resolve('./src/snippets')
		}
	}
};

export default config;
