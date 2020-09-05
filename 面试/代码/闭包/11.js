function m1() {
  let x = 1;
  return function () {
    console.log(++x)
  }
}
m1()()
m1()()
m1()()

let m2 = m1();
m2();
m2();
m2();