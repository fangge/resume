const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const EndWebpackPlugin = require('end-webpack-plugin');
const findChrome = require('chrome-finder');
const ghpages = require('gh-pages');

function publishGhPages() {
  return new Promise((resolve, reject) => {
    ghpages.publish(outputPath, { dotfiles: true }, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    })
  });
}
const outputPath = path.resolve(__dirname, '../dist');
const prodConfig = {
  mode: 'production',
  devtool: 'eval',
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, '../dist'),
    clean: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new FriendlyErrorsWebpackPlugin(),
    new EndWebpackPlugin(async () => {
      // 自定义域名
      fs.writeFileSync(path.resolve(outputPath, 'CNAME'), 'resume.mrfangge.com');

      await publishGhPages();

      // 调用 Chrome 渲染出 PDF 文件
      const chromePath = findChrome();
      spawnSync(chromePath, ['--headless', '--disable-gpu', `--print-to-pdf=${path.resolve(outputPath, 'resume.pdf')}`,
        'https://resume.mrfangge.com' // 这里注意改成你的在线简历的网站
      ]);

      // 重新发布到 ghpages
      await publishGhPages();
    }),
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
