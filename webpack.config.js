const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true'))
});

module.exports = {
  entry: {
    app: [
      path.resolve(__dirname, './src/index.ts')
    ],
  },
  output: {
    pathinfo: true,
    filename: '[name].bundle.js',
    path: path.resolve('./dist'),
    publicPath: '/'
  },
  devServer: {
    hot: false,
    compress: true,
    disableHostCheck: true,
  },
  plugins: [
    definePlugin,
    new CopyWebpackPlugin([{
      from: './src/assets',
      to: './assets'
    }]),
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body',
      chunks: ['app'],
      chunksSortMode: 'manual',
      minify: {
        removeAttributeQuotes: false,
        collapseWhitespace: false,
        html5: true,
        minifyCSS: false,
        minifyJS: true,
        minifyURLs: false,
        removeComments: true,
        removeEmptyAttributes: false
      },
      hash: false
    }),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [{
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: '/node_modules/'
      }
    ]
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
