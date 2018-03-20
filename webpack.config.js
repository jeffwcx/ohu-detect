const webpack = require('webpack')
const path = require('path')
const meta = require('./package.json')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const ENV = process.env.NODE_ENV
console.log('Build environment is ' + ENV)
var config = {
  entry: {
    'ohu-detect': './src/index.js',
    'ohu-detect.base': './src/base.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    library: 'Detector',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'src')
        ]
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin(`${meta.name} v${meta.version}
author ${meta.author}`)
  ]
}

if (ENV === 'min') {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    sourceMap: true
  }), new BundleAnalyzerPlugin())
  config.entry = {
    'ohu-detect.min': './src/index.js',
    'ohu-detect.base.min': './src/base.js'
  }
}

module.exports = config
