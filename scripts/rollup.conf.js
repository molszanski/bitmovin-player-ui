// rollup.config.js
import typescript from 'rollup-plugin-typescript2';
import uglify from 'rollup-plugin-uglify';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
// import Visualizer from 'rollup-plugin-visualizer';

// resolve({ jsnext: true })
export default {
  input: 'src/ts/main.ts',
  output: [
    {
      file: 'dist/js/bitmovinplayer-ui.min.iife.js',
      format: 'iife',
      sourcemap: true,
    },
  ],
  plugins: [
    nodeResolve({
      jsnext: true,
      main: true,
    }),
    commonjs({
      namedExports: { 'mobx-preact': [] },
    }),
    typescript(),
    uglify(),
    // Visualizer({ filename: 'dist/stats.html' }),
  ],
};
