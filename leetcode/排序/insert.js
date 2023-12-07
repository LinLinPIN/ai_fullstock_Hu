let arr = [2,4,5,1,3]

// 认定第一个元素一定是有序的，从第二个元素开始，去找自己在前面有序的区间中的位置
function insertSort(arr){
    let n=arr.length
    let temp;
    for(let i=1;i<n;i++){
        let j=i;
        temp = arr[i]
        while(j>0&&temp<arr[j-1]){
            arr[j] = arr[j-1]
            j--
        }
        arr[j]=temp;
    }
    return arr
}

console.log(insertSort(arr));