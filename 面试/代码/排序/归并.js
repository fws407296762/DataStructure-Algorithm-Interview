function mergeSort(arr){
  let len = arr.length;
  if(len < 2){
    return arr;
  }
  let middle = Math.floor(len / 2);
  let left = arr.slice(0,middle);
  let right = arr.slice(middle);
  return merge(mergeSort(left),mergeSort(right));
}

function merge(left,right){
  let result = [];
  while (left.length > 0 && right.length){
    if(left[0] <= right[0]){
      result.push(left.shift());
    }else{
      result.push(right.shift());
    }
  }
  while (left.length){
    result.push(left.shift())
  }
  while (right.length){
    result.push(right.shift());
  }
  return result;
}
let arr = [4,2,5,1,65,12,67];
console.log(mergeSort(arr));