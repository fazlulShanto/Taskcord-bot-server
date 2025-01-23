import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
  entryPoints: ["src/index.ts"],
  outDir: "../../build/api",
  clean: true,
  silent: true,
  format: ["cjs"],
  ...options,
}));
