// eslint-disable-next-line no-unused-vars
const webpack = require('webpack')
// eslint-disable-next-line no-unused-vars
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist/'),
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    contentBasePublicPath: '/',
    open: true,
    overlay: true,
    hot: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      excludeChunks: ['server'],
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  externalsPresets: { node: true },
  // externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { modules: false }],
                ['@babel/preset-react'],
              ],
              plugins: ['@babel/plugin-syntax-jsx'],
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: [{ loader: 'html-loader' }],
      },
      {
        enforce: 'pre',
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: true,
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              // sourceMap: true,
              postcssOptions: {
                plugins: [['autoprefixer', { grid: true }]],
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  target: ['web', 'es5'],
}
