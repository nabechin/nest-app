const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    app: './src/index.tsx',
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.tsx', '.js'],
  },
  devtool: process.env.NODE_ENV == 'production' ? false : 'inline-source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{ test: /\.tsx?$/, exclude: /node_modules/, loader: 'ts-loader' }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'html/index.html',
    }),
    new BundleAnalyzerPlugin(),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    port: 3000,
  },
};
