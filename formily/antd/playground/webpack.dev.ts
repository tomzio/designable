import baseConfig from './webpack.base'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import MonacoPlugin from 'monaco-editor-webpack-plugin'
//import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import webpack from 'webpack'
import path from 'path'

const PORT = 3000

const createPages = (pages) => {
  return pages.map(({ filename, template, chunk }) => {
    return new HtmlWebpackPlugin({
      filename,
      template,
      inject: 'body',
      chunks: chunk,
    })
  })
}

for (const key in baseConfig.entry) {
  if (Array.isArray(baseConfig.entry[key])) {
    baseConfig.entry[key].push(
      require.resolve('webpack/hot/dev-server'),
      `${require.resolve('webpack-dev-server/client')}?http://localhost:${PORT}`
    )
  }
}

export default {
  ...baseConfig,
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
    ...createPages([
      {
        filename: 'index.html',
        template: path.resolve(__dirname, './template.ejs'),
        chunk: ['playground'],
      },
    ]),
    new webpack.HotModuleReplacementPlugin(),
    new MonacoPlugin({
      languages: ['json'],
    }),
    // new BundleAnalyzerPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, '../public'),
    host: '127.0.0.1',
    open: true,
    port: PORT,
    proxy: {
      '/formilyschema': {
        target: 'http://localhost:3200/formilyschema',
        changeOrigin: true,
        ws: true,
      },
      '/his': {
        // target: 'http://10.227.253.249:9800/',
        target: 'http://10.227.16.12/',
        changeOrigin: true,
        ws: true,
      },
    },
  },
}
