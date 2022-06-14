const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./src/app.js"),
    form: path.resolve(__dirname, "./src/pages/form/form.js"),
    table: path.resolve(__dirname, "./src/pages/table/table.js"),
    tabs: path.resolve(__dirname, "./src/pages/tabs/tabs.js"),
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "./dist"),
    },
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Addapptation Granite",
    }),
    new HtmlWebpackPlugin({
      filename: "form.html",
      inject: "body",
      template: "./src/pages/form/form.html",
      chunks: ["main", "form"],
    }),
    new HtmlWebpackPlugin({
      filename: "table.html",
      inject: "body",
      template: "./src/pages/table/table.html",
      chunks: ["main", "table"],
    }),
    new HtmlWebpackPlugin({
      filename: "tabs.html",
      inject: "body",
      template: "./src/pages/tabs/tabs.html",
      chunks: ["main", "tabs"],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_module/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(gif|png|jpg|jpeg|svg)$/i,
        type: "assets/resources",
      },
    ],
  },
};
