// rollup.config.js
import typescript from 'rollup-plugin-typescript2';
import uglify from 'rollup-plugin-uglify';

export default {
  input: 'src/ts/main.ts',
  output: [
    {
      file: 'dist/rollup-bundles/bundle.iife.js',
      format: 'iife',
      sourcemap: true
    }
  ],
  plugins: [
    typescript(),
    uglify()
  ]
}
