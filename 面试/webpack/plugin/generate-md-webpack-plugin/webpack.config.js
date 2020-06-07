const webpack = require("webpack");
const path = require("path");
const GenerateMdWebpackPlugin = require("./generate-md-webpack-plugin");

let config = {
  entry:{
    app:"./main.js"
  },
  output:{
    path:__dirname
  },
  plugins:[
    new GenerateMdWebpackPlugin({
      path:__dirname,
      filename:"README.md"
    }),
    //调用这个插件会触发 afterEnvironment 钩子
    new webpack.EnvironmentPlugin(['NODE_ENV', 'DEBUG'])
  ],
  recordsPath: path.join(__dirname, './records.json')
}

module.exports = config;