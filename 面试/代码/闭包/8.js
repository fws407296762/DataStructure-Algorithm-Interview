function f() {
  var count = 0;
  return function () {
    count++;
    console.log(count);
  }
}
let t1 = f();
t1();
t1();
t1();