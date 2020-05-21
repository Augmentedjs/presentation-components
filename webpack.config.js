const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  context: __dirname,
  target: "web",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "presentation-components.js",
    publicPath: "/dist/",
    library: "presentation-components",
    globalObject: "this",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  externals: {
    "presentation-decorator": {
      commonjs: "presentation-decorator",
      commonjs2: "presentation-decorator",
      amd: "presentation-decorator",
      root: "presentation-decorator"
    },
    "presentation-mediator": {
      commonjs: "presentation-mediator",
      commonjs2: "presentation-mediator",
      amd: "presentation-mediator",
      root: "presentation-mediator"
    }
  },
  stats: "errors-only",
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(require("./package.json").version)
    })
  ]
};
