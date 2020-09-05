function quickSort(arr,left,right){
  let len = arr.length;
  left = typeof left != 'number' ? 0 : left;
  right = typeof right != 'number' ? len - 1 : right;
  if(left >= right) return;
  let index = getIndex(arr,left,right);
  console.log(index)
  quickSort(arr,left,index -1);
  quickSort(arr,index + 1,right);
  return arr;
}

function getIndex(arr,left,right){
  let pivote = arr[left];
  let index = left;
  while (right >= left){
    while (right >= left){
      if(arr[right] < pivote){
        arr[left] = arr[right];
        index = right;
        left++;
        break;
      }
      right--;
    }
    while (right >= left){
      if(arr[left] > pivote){
        arr[right] = arr[left];
        index = left;
        right--;
        break;
      }
      left++;
    }
  }
  arr[index] = pivote;
  return index;
}

let arr = [1,3,2,6,10,8,4,7,9,5];
console.log(quickSort(arr));