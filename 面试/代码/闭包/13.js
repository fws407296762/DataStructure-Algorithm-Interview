function love1() {
  let num = 223;
  let me1 = function () {
    console.log(num);
  }
  num++;
  return me1;
}

let loveme1 = love1();
loveme1();  //闭包找到的是同一地址中父级函数中对应变量最终的值