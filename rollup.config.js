import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';

export default {
    input: './index.js',
    output:{
            file: 'dist/index.esm.js',
            format: 'es',
            sourcemap: true
    },
    external: ['react'],
    plugins: [
        peerDepsExternal(),
        resolve(),
        babel({
            exclude: 'node_modules/**',
            babelHelpers: 'bundled',
            presets: ['@babel/preset-env', '@babel/preset-react']
        }),
        commonjs(),
        terser()
    ]
};