let arr = [1, 1, '2', 3, 1, 2,
    { name: '张三', id: { n: 1 } },
    { name: '张三', id: { n: 1 } },
    { name: '张三', id: { n: 2 } }
]

let newArr = [...new Set(arr)]
let arr2 = arr.map((item) => {
    return JSON.stringify(item)
})
let newArr2 = new Set(arr2)
newArr2 = Array.from(newArr2).map((item) => {
    return JSON.parse(item)
})

function uniqueArr(arr) {
    let res = []

}
