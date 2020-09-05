function outerFn() {
  let i = 0;
  function innerFn() {
    i++;
    console.log(i);
  }
  return innerFn
}

let inner1 = outerFn();
let inner2 = outerFn();
inner1();
inner2();
inner1();
inner2();