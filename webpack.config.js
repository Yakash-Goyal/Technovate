const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "views"), 
    clean: true, // Removes old files before building
  },
  mode: "development",
  devServer: {
    static: "./views", // Serve HTML from views folder
    hot: true,
    open: true,
    port: 8080, // Ensure the correct port is used
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader, 
          "css-loader", 
          "postcss-loader"
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./views/index.html",
      inject: "body",
    }),
    new MiniCssExtractPlugin({ 
      filename: "src/css/output.css" // Ensures correct CSS path
    }),
  ],
};
