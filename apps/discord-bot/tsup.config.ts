import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
    entryPoints: ["src/index.ts"],
    outDir: "../../build/bot",
    silent: true,
    clean: true,
    format: ["cjs"],
    ...options,
}));
