import path from 'path';
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		vite: {
			plugins: [vanillaExtractPlugin()],
			resolve: {
				alias: {
					'~/styles': path.resolve('./src/styles'),
					'~/components': path.resolve('./src/components'),
					'~/stores': path.resolve('./src/stores')
				}
			}
		}
	}
};

export default config;
