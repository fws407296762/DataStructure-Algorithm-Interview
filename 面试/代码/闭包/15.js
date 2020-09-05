function fn() {
  let arr = [];
  for(let i = 0;i<5;i++){
    arr[i] = function () {
      return i;
    }
  }
  return arr;
}
let list = fn();
for(let i = 0,len = list.length;i<len;i++){
  console.log(list[i]());
}