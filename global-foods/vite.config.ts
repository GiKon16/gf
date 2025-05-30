import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';

let currentDate = new Date();

// https://vite.dev/config/
export default defineConfig({
	plugins: [svelte()],
	build: {
		outDir: `gastreet_build_${currentDate.getDate()}.${
			currentDate.getMonth() + 1
		}.${currentDate.getFullYear()}_${currentDate.getHours()}-${currentDate.getMinutes()}`,
	},
});
