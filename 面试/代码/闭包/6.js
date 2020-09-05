(function () {
  var m = 0;
  function getM() {
    return m;
  }
  function seta(val) {
    m = val;
  }
  global.g = getM;
  global.f = seta;
})()

f(100);
console.info(g());  //100  闭包找到的是同一地址中父级函数中对应变量最终的值