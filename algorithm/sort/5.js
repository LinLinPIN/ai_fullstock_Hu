// 数组的右边，有大部分排好序的，出现不需要比较 j-i-1的
// 标记上一轮，完成交换的最后一次的位置所在，最后的位置< j-i-1 
const bubbleSort = (arr) => {
    let temp = 0
    let lastExchangeindex = 0
    let len = arr.length
    let sortBorder = len - 1
    for(let i = 0;i < len - 1; i++){
        let isSorted = true
        for(let j = 0;j < sortBorder;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1], arr[j]]
                isSorted = false
                lastExchangeindex = j - 1
            }
        }
        sortBorder = lastExchangeindex
        if(isSorted)break
    }
}