function unique(arr){
  let itemobj = {};
  let uniqueAry = [];
  for(let i = 0;i<arr.length;i++){
    let item = arr[i];
    if(!itemobj[item]){
      itemobj[item] = true;
      uniqueAry.push(item);
    }
  }
  return uniqueAry;
}

console.log(unique([1,1,1,1,3,2,3,1,12,54]))