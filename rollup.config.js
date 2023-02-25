/*
 * @Author: hahaxiaowai
 * @Date: 2023-01-18 09:37:38
 * @LastEditors: hahaxiaowai
 * @LastEditTime: 2023-02-25 10:43:07
 * @Description:
 * @Optimization:
 */
// rollup.config.js
import resolve from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";
import { uglify } from "rollup-plugin-uglify";
import { obfuscator } from "rollup-obfuscator";
import commonjs from "@rollup/plugin-commonjs";
export default {
  input: "index.js",
  output: {
    file: "package.umd.js",
    format: "umd",
    name: "package",
  },
  plugins: [
    commonjs(),
    resolve(),
    babel({
      exclude: "node_modules/**",
      babelHelpers: "runtime",
    }),
    obfuscator(),
    uglify(),
    terser(),
  ],
};
