let i = 0;
function outerFn() {
  function innerFn() {
    i++;
    console.log(i);
  }
  return innerFn;
}

let innerFn1 = outerFn();
let innerFn2 = outerFn();
innerFn1();
innerFn2();
innerFn1();
innerFn2();