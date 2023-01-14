import fs from "fs";
import esbuild from "esbuild";
import esbuildSvelte from "esbuild-svelte";
import sveltePreprocess from "svelte-preprocess";

//make sure the directoy exists before stuff gets put into it
if (!fs.existsSync("./dist/")) {
    fs.mkdirSync("./dist/");
}
esbuild
    .build({
        entryPoints: [`./src/index.ts`],
        bundle: true,
        outdir: `./dist`,
        mainFields: ["svelte", "browser", "module", "main"],
        minify: process.argv.includes(`--prod`),
        sourcemap: !process.argv.includes(`--prod`),
        splitting: true,
        write: true,
        format: `esm`,
        watch: process.argv.includes(`--watch`),
        plugins: [
            esbuildSvelte({
                preprocess: sveltePreprocess(),
            }),
        ],
    })
    .catch((error, location) => {
        console.warn(`Errors: `, error, location);
        process.exit(1);
    });

//use a basic html file to test with
fs.cpSync("./static", "./dist", {recursive: true});

// maybe incorporate svelte-check or tsc too?
// https://github.com/EMH333/esbuild-svelte/blob/main/build.js
