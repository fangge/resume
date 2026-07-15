const fs = require('fs');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const EndWebpackPlugin = require('end-webpack-plugin');
const puppeteer = require('puppeteer-core');
const findChrome = require('chrome-finder');

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
    new EndWebpackPlugin(async () => {
      // 自定义域名
      fs.writeFileSync(path.resolve(outputPath, 'CNAME'), 'resume.mrfangge.com');

      // 调用 puppeteer-core + Chrome 渲染出 PDF 文件
      const chromePath = findChrome();
      const browser = await puppeteer.launch({
        executablePath: chromePath,
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
      });
      try {
        const page = await browser.newPage();
        // 中文简历 PDF
        await page.goto('https://resume.mrfangge.com', {
          waitUntil: 'networkidle0',
          timeout: 60000,
        });
        await page.pdf({
          path: path.resolve(outputPath, '方阳-前端开发工程师.pdf'),
          format: 'A4',
          printBackground: true,
          margin: { top: '0', right: '0', bottom: '0', left: '0' },
        });
        console.log('✅ 中文 PDF 生成成功:', path.resolve(outputPath, '方阳-前端开发工程师.pdf'));

        // 英文简历 PDF
        await page.goto('https://resume.mrfangge.com/en.html', {
          waitUntil: 'networkidle0',
          timeout: 60000,
        });
        await page.pdf({
          path: path.resolve(outputPath, 'Fang Yang - Senior Front-End Developer.pdf'),
          format: 'A4',
          printBackground: true,
          margin: { top: '0', right: '0', bottom: '0', left: '0' },
        });
        console.log('✅ 英文 PDF 生成成功:', path.resolve(outputPath, 'Fang Yang - Senior Front-End Developer.pdf'));
      } finally {
        await browser.close();
      }
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
