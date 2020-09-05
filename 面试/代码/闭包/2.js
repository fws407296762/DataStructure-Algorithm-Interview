function outerFn() {
  var i = 0;
  function innerFn() {
    i++;
    console.log(i);
  }
  return innerFn;
}
//每次外部函数执行的时候,都会开辟一块内存空间,外部函数的地址不同，都会重新创建一个新的地址
let inner = outerFn();
inner();
inner();
inner();
inner();
let inner2 = outerFn();
inner2();
inner2();
inner2();
inner2();