import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

export default {
    input: "./src/index.js",
    output: {
      file: "./build/presentation-components.js",
      format: "es",
      name: "presentation-components"
    },
    external: [
      "presentation-mediator",
      "presentation-decorator"
    ],
    plugins: [
        babel({
          exclude: "node_modules/**"
        }),
        resolve(),
        commonjs({
          include: 'node_modules/**'
        }),
    ]
}
