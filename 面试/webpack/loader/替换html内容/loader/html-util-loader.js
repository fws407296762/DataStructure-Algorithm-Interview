let loaderUtils = require("loader-utils");
let path = require("path");
let fs = require("fs");
module.exports = function(source){
  const options = loaderUtils.getOptions(this);
  const defaultOptions = {
    includeStartTag:"<%=",
    includeEenTag:"%>"
  };
  let output = options.output,
      output_path = output.path,
      output_filename = output.filename;

  const includeRegx = new RegExp(`${defaultOptions.includeStartTag}\s*([a-zA-Z]*)\s*${defaultOptions.includeEenTag}`);
  let newSource = source.replace(includeRegx,function(match,bl,index){
    return "测试最牛逼的图片"
  });
  fs.writeFileSync(output_path+"/"+output_filename,newSource);
  return newSource;
}