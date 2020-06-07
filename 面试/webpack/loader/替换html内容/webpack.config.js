const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry:{
    main:"./app.js"
  },
  output:{
    path:__dirname,
    libraryTarget:"umd"
  },
  module:{
    rules:[
      {
        test:/\.(html)$/,
        include:__dirname,
        use:[
          "html-loader",
          {
            loader:path.resolve(__dirname,'./loader/html-util-loader.js'),
            options:{
              layout:path.join(__dirname,'template.html'),
              output:{
                path:path.join(__dirname,"./"),
                filename:"index.html"
              }
            }
          }
        ],
      }
    ]
  },
  resolveLoader:{
    modules:['node_modules','./loader']
  },

  mode:"development"
}