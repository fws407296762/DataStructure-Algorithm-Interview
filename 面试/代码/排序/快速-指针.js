let arr = [1,3,2,6,10,8,4,7,9,5];
console.log(quickSort(arr));

function quickSort(arr,left,right) {
  let len = arr.length;
  left = typeof left != 'number' ? 0 : left;
  right = typeof right != 'number' ? len - 1 : right;
  if(left >= right) return;
  let index = getIndex(arr,left,right);
  console.log(index)
}

function getIndex(arr,left,right) {
  let pivote = left;
  let index = left + 1;
  for(let i = index;i <= right;i++){
    if(arr[i] < arr[pivote]){
      swap(arr,i,index);
      index++;
    }
  }
  swap(arr,pivote,index - 1);
  return index - 1;
}

function swap(arr,i,j) {
  let tmp = arr[j];
  arr[j] = arr[i];
  arr[i] = tmp;
}