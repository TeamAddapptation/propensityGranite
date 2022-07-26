const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./src/app.js"),
    form: path.resolve(__dirname, "./src/pages/form/form.js"),
    table: path.resolve(__dirname, "./src/pages/table/table.js"),
    tabs: path.resolve(__dirname, "./src/pages/tabs/tabs.js"),
    // PLATFORM
    dataConnections: path.resolve(__dirname, "./src/platform/dataConnections/dataConnections.js"),
    profile: path.resolve(__dirname, "./src/platform/profile/profile.js"),
    passwordReset: path.resolve(__dirname, "./src/platform/passwordReset/passwordReset.js"),
    // APPS
    top100: path.resolve(__dirname, "./src/apps/top100/top100.js"),
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
    // PLATFORM
    new HtmlWebpackPlugin({
      filename: "dataConnections.html",
      inject: "body",
      template: "./src/platform/dataConnections/dataConnections.html",
      chunks: ["main", "dataConnections"],
    }),
    new HtmlWebpackPlugin({
      filename: "profile.html",
      inject: "body",
      template: "./src/platform/profile/profile.html",
      chunks: ["main", "profile"],
    }),
    new HtmlWebpackPlugin({
      filename: "passwordReset.html",
      inject: "body",
      template: "./src/platform/passwordReset/passwordReset.html",
      chunks: ["main", "passwordReset"],
    }),
    // APPS
    new HtmlWebpackPlugin({
      filename: "top100.html",
      inject: "body",
      template: "./src/apps/top100/top100.html",
      chunks: ["main", "top100"],
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
