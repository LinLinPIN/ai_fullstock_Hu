let arr = [2,4,5,1,3]

// 找出原数组区间中的最小值，放在当前区间最前面，再缩小区间
function selectSort(arr){
    let n = arr.length
    let minIndex;
    for(let i=0;i<n;i++){// 收缩区间
        minIndex=i;
        for(let j=i;j<n;j++){
            if(arr[j]<arr[minIndex])
            minIndex=j
        }
        if(minIndex!==i)
        [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]]
    }
    return arr
}
console.log(selectSort(arr));