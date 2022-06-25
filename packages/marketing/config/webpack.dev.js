const {merge} =require("webpack-merge") 
const HtmlWebpackPulgin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const pkgJson = require('../package.json')
const devConfig = {
  mode:'development',
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
    }),
    new HtmlWebpackPulgin({
      template:'./public/index.html'
    })
  ]
}
module.exports = merge(commonConfig,devConfig)