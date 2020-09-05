function bubbleSort(arr){
  let len = arr.length;
  for(let i = 0;i<len;i++){
    for(let j = 0;j < len - 1 - i;j++){
      if(arr[j] > arr[j + 1]){
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

let arr = [4,2,5,1,65,12,67];
console.log(bubbleSort(arr));