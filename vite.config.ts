import { vite as vidstack } from 'vidstack/plugins';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		vidstack(),
		sveltekit(),
		viteStaticCopy({
			targets: [
				{
					src: 'node_modules/webtorrent/dist/sw.min.js',
					dest: ''
				}
			]
		})
	]
});
