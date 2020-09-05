var add = function(x){
  let sum  = x;
  let tmp = function (x) {
    sum = sum + x;
    return tmp;
  }
  tmp.toString = function () {
    return sum;
  }
  return tmp;
}

console.log(add(10)(10)(20).toString());