function fn() {
  var a = 3;
  return function () {
    return ++a;
  }
}
console.log(fn()());
console.log(fn()());