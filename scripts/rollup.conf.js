// rollup.config.js
import typescript from 'rollup-plugin-typescript2';

export default {
  entry: 'src/ts/main.ts',
  sourcemap: true,
  output: [
    {
      file: 'dist/rollup-bundles/bundle.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/rollup-bundles/bundle.es.js',
      format: 'es'
    }
  ],
  plugins: [
    typescript()
  ]
}
