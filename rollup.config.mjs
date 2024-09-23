import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";

export default {
    input: './index.js',
    output: {
      file: './build/bundle.js',
      format: 'cjs'
    },

    plugins: [
        serve({
            open: true,
            port: 3000

        }),

        livereload({
            watch: 'build'
        })
    ]
};