const rollupPluginNodeResolve = require('rollup-plugin-node-resolve');
const rollupPluginCommonJS = require('rollup-plugin-commonjs');

export default {
    input: 'node_modules/deep-equal/index.js',
    output: {
        file: 'index.js',
        format:'es'
    },
    plugins: [
        rollupPluginNodeResolve({
            preferBuiltins: false,
            browser: true
        }),
        rollupPluginCommonJS()
    ]
}
