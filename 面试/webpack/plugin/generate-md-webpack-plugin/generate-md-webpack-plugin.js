class GenerateMdWebpackPlugin{
  constructor(options){
    console.log("options:",options);
  }
  apply(compiler){
    // console.log("compiler:",compiler)
    // compiler.hooks.initialize.tap("GenerateMdWebpackPlugin",function(){
    //   console.log("测试一下GenerateMdWebpackPlugin--initialize")
    // })
    
    compiler.hooks.run.tapAsync("GenerateMdWebpackPlugin",function(compiler){
      console.log("测试一下GenerateMdWebpackPlugin--run")
      // console.log("entryOption:",context, entry);
    })
    compiler.hooks.emit.tapAsync("GenerateMdWebpackPlugin",function(compilation){
      console.log("测试一下GenerateMdWebpackPlugin--emit")
    })
  }
}

module.exports = GenerateMdWebpackPlugin;