let arr = [[1,2,4],[1,2,3],[1,3,4],[1,3,2]];

arr.sort(function(a,b){
    if(a[1] > b[1]){
        return a[1] - b[1];
    }else if(a[1] === b[1]){
        return b[2] - a[2];
    }
})

console.log(arr);