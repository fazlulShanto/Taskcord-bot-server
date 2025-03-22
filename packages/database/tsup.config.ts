import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  target: 'es2020',
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  // This ensures all imported files are included
  noExternal: ['./src/**'],
  onSuccess: "tsc --emitDeclarationOnly --declaration"
}));
