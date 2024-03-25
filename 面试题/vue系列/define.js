let obj = {
    name: '冷少',
    age: 18
}

// 数据劫持方法

let num = obj.age
Object.defineProperty(obj, 'age', {
    get() {
        return num;
    },
    set(val) {
        num = val
    }
})