function bubbleSort(arr){
    console.log("改进冒泡排序");
    let len = arr.length
    if(len <= 1)return ;
    // 也许不需要执行那么多轮
    for(let i = 0;i < len; i++){
        let isSorted = true;
        for(let j = 0;j < len - i - 1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                isSorted = false
            }  
        }
        if(isSorted) break
    }
    console.timeEnd('改进冒泡排序')
    return arr
}

const arr = [5, 8, 6, 3, 9, 2, 1, 7];
console.log(bubbleSort(arr))