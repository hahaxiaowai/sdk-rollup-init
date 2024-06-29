// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import { uglify } from 'rollup-plugin-uglify';
import { obfuscator } from 'rollup-obfuscator';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.js',
  output: {
    file: 'package.umd.js',
    format: 'umd',
    name: 'package',
  },
  plugins: [
    commonjs(),
    resolve(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'runtime',
    }),
    obfuscator(),
    uglify(),
    terser(),
  ],
};
