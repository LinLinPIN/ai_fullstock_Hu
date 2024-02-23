// let arr = [1, 2, 3]
// arr.splice(1,0,'abc')

// console.log(arr);

// queue    先进后出    只有push 和 shift

const queue = [];
queue.push('辣椒炒肉')
queue.push('辣椒炒辣椒')
queue.push('辣椒炒蛋')


while(queue.length){
    const top = queue.shift()
    console.log('今晚吃'+top);
}


