const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "index.js"),
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
    }),
  ],

  module: {
    rules: [
     {
       test: /.(png|svg|jpg|jpeg|gif)$/i,
       type: 'asset/resource',
     },
     {
        test: /.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  devServer: {
    port: 8080,
    open: true,
  },
};
