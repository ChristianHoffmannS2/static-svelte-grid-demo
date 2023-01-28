import fs from 'fs';
import esbuild from 'esbuild';
import esbuildSvelte from 'esbuild-svelte';
import sveltePreprocess from 'svelte-preprocess';

if (fs.existsSync('./dist/')) {
	fs.rmSync('./dist/', { recursive: true, force: true });
	fs.mkdirSync('./dist/');
	fs.cpSync('./static', './dist', { recursive: true });
}

await esbuild
	.build({
		entryPoints: [`./src/index.ts`],
		bundle: true,
		outdir: `./dist`,
		mainFields: ['svelte', 'browser', 'module', 'main'],
		minify: true,
		sourcemap: true,
		splitting: true,
		write: true,
		format: `esm`,
		watch: process.argv.includes(`--watch`),
		plugins: [
			esbuildSvelte({
				preprocess: sveltePreprocess()
			})
		]
	})
	.catch((error, location) => {
		console.warn(`Errors: `, error, location);
		process.exit(1);
	});
