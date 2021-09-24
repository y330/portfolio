import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'
import makeAttractionsImporter from 'attractions/importer.js'
import('path')

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		svelte({
			preprocess: sveltePreprocess({
				scss: {
					importer: makeAttractionsImporter({
						// specify the path to your theme file, relative to this file
						themeFile: path.join(
							__dirname,
							'./static/css/theme.scss'
						),
					}),

					// not mandatory but nice to have for concise imports
					includePaths: [path.join(__dirname, './static/css')],
				},
			}),
		}),
	],
})
