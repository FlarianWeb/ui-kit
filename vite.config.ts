import { defineConfig } from 'vite';
import pugPlugin from 'vite-plugin-pug';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
	plugins: [vue(), pugPlugin({})],
	build: {
		lib: {
			entry: 'src/index.ts',
			name: 'FlarianUI',
			fileName: format => `flarian-ui.${format}.js`,
			cssFileName: 'styles',
		},
		rollupOptions: {
			external: ['vue'],
			output: {
				globals: {
					vue: 'Vue',
				},
			},
		},
	},
});
