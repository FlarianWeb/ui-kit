import { all } from '@flarian/frontend-preset/eslint';

export default [
	...all.withVue,

	{
		ignores: ['dist/**', 'node_modules/**', 'pnpm-lock.yaml'],
	},
];
