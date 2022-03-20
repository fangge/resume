const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { useTiger } = require('@huyafed/tiger-utils/webpack');

const prodConfig = {
  mode: process.env.NODE_ENV,
  devtool: 'eval',
  output: {
    filename: 'js/[name].js',
    // path: path.resolve(__dirname, '../dist'),
    path: useTiger.outputPath(),
    publicPath: useTiger.publicPath(),
    clean: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new FriendlyErrorsWebpackPlugin(),
    useTiger.createManifest(),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        parallel: 4,
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
      }),
      new CssMinimizerPlugin(),
    ],
  },
};

module.exports = merge(prodConfig, baseConfig);
