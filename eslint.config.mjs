import { baseRules, importSortRules, jsonRules } from '@flarian/frontend-preset/eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
	...baseRules,
	...importSortRules,
	...jsonRules,

	{
		ignores: [
			'node_modules/**',
			'pnpm-lock.yaml',
		],
	},
];
