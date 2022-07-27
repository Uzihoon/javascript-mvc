const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, options) => {
  const isDev = options.mode === 'development';

  return {
    mode: options.mode,
    entry: {
      app: [path.join(__dirname, 'src', 'index')]
    },
    devtool: isDev ? 'source-map' : false,
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'public')
    },
    resolve: {
      extensions: ['.ts', '.js', '.css', '.scss']
    },
    module: {
      rules: [
        {
          test: /\.(ts)$/,
          enforce: 'pre',
          use: 'ts-loader',
          exclude: /node_modules/
        },
        { test: /\.(css)$/, use: ['style-loader', 'css-loader'] },
        {
          test: /\.scss$/,
          use: ['style-loader', 'cssloader', 'sass-loader']
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin(
        Object.assign(
          {},
          {
            inject: true,
            template: 'index.html',
            showErrors: isDev
          }
        )
      )
    ]
  };
};
