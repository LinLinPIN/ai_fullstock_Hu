function bubbleSort(arr){
    let len = arr.length;
    for(let i = 0; i < len; i++) {// len轮
        for(let j = 0; j < len - i - 1; j++) { // 本轮最大值到达最右边
            // len - i -1 之前轮次不用比较
        if(arr[j] > arr[j+1]) {// 相邻元素交换位置
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        }
        }
    }
    return arr
}
// 待排 从小到大排序

const arr = [5, 8, 6, 3, 9, 2, 1, 7];
bubbleSort()