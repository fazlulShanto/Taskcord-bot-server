import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
  entryPoints: ["src/index.ts"],
  format: ["cjs", "esm"],
  outDir: "dist",
  target: "es2020",
  dts: true,
  sourcemap: true,
  clean: true,
  // This ensures all imported files are included
  noExternal: ["./src/**"],
  ...options,
}));
