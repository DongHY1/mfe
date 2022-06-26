const HtmlWebpackPulgin = require('html-webpack-plugin')
module.exports = {
  module:{
    rules:[
      {
        test:/.js$/,
        exclude: /node_modules/,
        use:{
          loader:'babel-loader',
          options:{
            presets:['@babel/preset-react','@babel/preset-env'],
            plugins:['@babel/plugin-transform-runtime']
          }
        }
      }
    ]
  },
  plugins:[
    new HtmlWebpackPulgin({
      template:'./public/index.html'
    })
  ]
}