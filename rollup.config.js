const typescript = require('@rollup/plugin-typescript');

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [typescript()],
  external: ['react', 'react-dom'],
}