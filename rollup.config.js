import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import json from '@rollup/plugin-json';

export default {
    input: './index.js',
    output:{
            file: 'dist/index.esm.js',
            format: 'cjs',
            sourcemap: true
    },
    external: ['react'],
    plugins: [
        peerDepsExternal(),
        resolve({
            extensions: ['.js', '.jsx'], // 파일 확장자 설정
        }),
        babel({
            exclude: 'node_modules/**',
            babelHelpers: 'bundled',
            presets: ['@babel/preset-env', '@babel/preset-react']
        }),
        commonjs(),
        terser(),
        json()
    ]
};