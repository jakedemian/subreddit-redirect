// webpack.config.js

const path = require("path");

module.exports = {
  entry: "./src/shared/background.ts",
  output: {
    filename: "background.js",
    path: path.resolve(__dirname, "builds/temp"),
    // For Chrome extension service worker in MV3
    chunkFormat: "module",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  experiments: {
    outputModule: true, // Allows outputting ES modules
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  target: "webworker", // Targets web workers (service workers)
};
