function createBase(num){
  return function (x) {
    return x + num;
  }
}

let addSix = createBase(6)
console.log(addSix(10));
console.log(addSix(21));