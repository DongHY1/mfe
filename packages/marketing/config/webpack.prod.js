const {merge} =require("webpack-merge") 
const HtmlWebpackPulgin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const pkgJson = require('../package.json')
const prodConfig = {
  mode:'production',
  devServer:{
    port:8081,
    historyApiFallback:{
      index:'index.html'
    }
  },
  plugins:[
    new ModuleFederationPlugin({
        name:'marketing',
        filename: 'remoteEntry.js',
        exposes: {
          './MarketingApp':'./src/bootstrap'
        },
        shared:pkgJson.dependencies
    })
  ]
}
module.exports = merge(commonConfig,prodConfig)