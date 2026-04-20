const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
try {
  require("fs").rmSync("./launcher-dist", { recursive: true });
} catch (e) {}

module.exports = {
  mode: "production",
  devServer: {
    allowedHosts: "all",
    port: (+require("process").env.PORT) || 3000,
    client: {
      overlay: {
        errors: true, // Keep displaying errors
        warnings: false, // Disable displaying warnings
        runtimeErrors: true, // Keep displaying runtime errors
      },
    },
  },
  cache: {
    type: "filesystem",
    allowCollectingMemory: true,
  },
  devtool: false,
  entry: {
    index: "./src/index.js"
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      name: "shared",
    },
    minimize: false
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].bundle.js",
  },
  performance: {
    /*hints: "warning",*/
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: "raw-loader",
            options: {
              esModule: false,
            },
          },
        ],
        type: "javascript/auto", // Fix for raw-loader
      }
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new HtmlWebpackPlugin({
      filename: `index.html`,
      title: `About Gvbvdxx`,
      template: "./src/base_html.html",
      chunks: ["index"],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./static",
          to: ".",
          noErrorOnMissing: true,
        },
      ],
    }),
  ],
};