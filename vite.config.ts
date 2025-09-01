/// <reference types="histoire" />

import { defineConfig } from 'vite';
import { HstVue } from '@histoire/plugin-vue';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
	plugins: [vue()],

	histoire: {
		plugins: [HstVue()],
	},

	build: {
		lib: {
			entry: 'src/main.ts',
			name: 'FlarianUI',
			fileName: 'flarian-ui',
		},
		rollupOptions: {
			external: ['vue'],
			output: {
				globals: { vue: 'Vue' },
			},
		},
	},
});
