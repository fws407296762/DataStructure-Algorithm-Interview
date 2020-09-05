function selectionSort(arr){
  let len = arr.length;
  let temp,minIndex;
  for(let i = 0;i<len - 1;i++){
    minIndex = i;
    for(let j = i + 1;j < len - 1;j++){
      if(arr[j] < arr[minIndex]){
        minIndex = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}

let arr = [4,2,5,1,65,12,67];
console.log(selectionSort(arr));