// import { copyFile } from "node:fs/promises";
// import path from "node:path";
import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
  entryPoints: ["src/index.ts"],
  outDir: "build",
  clean: true,
  silent: true,
  sourcemap: true,
  format: ["cjs"],
  ...options,
}));
