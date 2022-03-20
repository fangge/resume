// webpack.dev.js
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');
const path = require('path');

const devConfig = {
  mode: 'development',
  devServer: {
    host: 'localhost',
    static: {
      directory: path.join(__dirname, '../public'),
    },
    // 默认为true
    hot: true,
    // 是否开启代码压缩
    compress: false,
    // 启动的端口
    port: 9000,
    https: true,
  },
};

module.exports = merge(devConfig, baseConfig);
