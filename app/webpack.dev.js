const { merge } = require("webpack-merge")
const common = require("./webpack.common.js")

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    allowedHosts: "all",
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://52.34.248.48:8000',
        pathRewrite: { '^/api': '' },
        secure: false,
        changeOrigin: true
      },
    }
  }
 })