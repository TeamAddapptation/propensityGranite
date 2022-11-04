const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/app.js'),
    form: path.resolve(__dirname, './src/pages/form/form.js'),
    table: path.resolve(__dirname, './src/pages/table/table.js'),
    tabs: path.resolve(__dirname, './src/pages/tabs/tabs.js'),
    // AUTH
    signIn: path.resolve(__dirname, './src/platform/auth/signIn/signIn.js'),
    forgotPassword: path.resolve(__dirname, './src/platform/auth/forgotPassword/forgotPassword.js'),
    createAccount: path.resolve(__dirname, './src/platform/auth/createAccount/createAccount.js'),
    resetPassword: path.resolve(__dirname, './src/platform/auth/resetPassword/resetPassword.js'),
    // PLATFORM
    dataConnections: path.resolve(__dirname, './src/platform/dataConnections/dataConnections.js'),
    profile: path.resolve(__dirname, './src/platform/profile/profile.js'),
    passwordReset: path.resolve(__dirname, './src/platform/passwordReset/passwordReset.js'),
    billing: path.resolve(__dirname, './src/platform/billing/billing.js'),
    users: path.resolve(__dirname, './src/platform/users/users.js'),
    // APPS
    top100: path.resolve(__dirname, './src/apps/top100/top100.js'),
    accountSummary: path.resolve(__dirname, './src/apps/accountSummary/accountSummary.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, './dist'),
    },
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Addapptation Granite',
    }),
    new HtmlWebpackPlugin({
      filename: 'form.html',
      inject: 'body',
      template: './src/pages/form/form.html',
      chunks: ['main', 'form'],
    }),
    new HtmlWebpackPlugin({
      filename: 'table.html',
      inject: 'body',
      template: './src/pages/table/table.html',
      chunks: ['main', 'table'],
    }),
    new HtmlWebpackPlugin({
      filename: 'tabs.html',
      inject: 'body',
      template: './src/pages/tabs/tabs.html',
      chunks: ['main', 'tabs'],
    }),
    // AUTH
    new HtmlWebpackPlugin({
      filename: 'signIn.html',
      inject: 'body',
      template: './src/platform/auth/signIn/signIn.html',
      chunks: ['main', 'signIn'],
    }),
    new HtmlWebpackPlugin({
      filename: 'forgotPassword.html',
      inject: 'body',
      template: './src/platform/auth/forgotPassword/forgotPassword.html',
      chunks: ['main', 'forgotPassword'],
    }),
    new HtmlWebpackPlugin({
      filename: 'createAccount.html',
      inject: 'body',
      template: './src/platform/auth/createAccount/createAccount.html',
      chunks: ['main', 'createAccount'],
    }),
    new HtmlWebpackPlugin({
      filename: 'resetPassword.html',
      inject: 'body',
      template: './src/platform/auth/resetPassword/resetPassword.html',
      chunks: ['main', 'resetPassword'],
    }),
    // PLATFORM
    new HtmlWebpackPlugin({
      filename: 'dataConnections.html',
      inject: 'body',
      template: './src/platform/dataConnections/dataConnections.html',
      chunks: ['main', 'dataConnections'],
    }),
    new HtmlWebpackPlugin({
      filename: 'profile.html',
      inject: 'body',
      template: './src/platform/profile/profile.html',
      chunks: ['main', 'profile'],
    }),
    new HtmlWebpackPlugin({
      filename: 'passwordReset.html',
      inject: 'body',
      template: './src/platform/passwordReset/passwordReset.html',
      chunks: ['main', 'passwordReset'],
    }),
    new HtmlWebpackPlugin({
      filename: 'billing.html',
      inject: 'body',
      template: './src/platform/billing/billing.html',
      chunks: ['main', 'billing'],
    }),
    new HtmlWebpackPlugin({
      filename: 'users.html',
      inject: 'body',
      template: './src/platform/users/users.html',
      chunks: ['main', 'users'],
    }),
    new HtmlWebpackPlugin({
      filename: 'template.html',
      inject: 'body',
      template: './src/platform/template/template.html',
      chunks: ['main'],
    }),
    // APPS
    new HtmlWebpackPlugin({
      filename: 'top100.html',
      inject: 'body',
      template: './src/apps/top100/top100.html',
      chunks: ['main', 'top100'],
    }),
    new HtmlWebpackPlugin({
      filename: 'accountSummary.html',
      inject: 'body',
      template: './src/apps/accountSummary/accountSummary.html',
      chunks: ['main', 'accountSummary'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_module/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(gif|png|jpg|jpeg|svg)$/i,
        type: 'assets/resources',
      },
    ],
  },
};
