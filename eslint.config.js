import { defineConfig } from "eslint/config";
import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

export default defineConfig([
	{
		ignores: ["dist/", ".astro/", "node_modules/", "scripts/"],
	},
	...eslintPluginAstro.configs.recommended,
	{
		languageOptions: {
			parserOptions: {
				parser: tseslint.parser,
				extraFileExtensions: [".astro"],
			},
		},
	},
]);
