const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  minify: false,
  sourcemap: true,
  outfile: 'dist/index.js',
  platform: 'node',
  target: 'node12',
  format: 'cjs'
}).catch(() => process.exit(1));

esbuild.build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  minify: false,
  sourcemap: true,
  outfile: 'dist/index.esm.js',
  platform: 'node',
  target: 'node12',
  format: 'esm'
}).catch(() => process.exit(1));
