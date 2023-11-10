var arr=[1,2,3,4]

arr.push()
arr.pop()
arr.unshift(0)
arr.shift()
arr.splice(1,1)//前一个是删除开始下标，后一个是删除几位
arr.slice(1,2)//数组切片不影响原数组

console.log(arr);


var arr=new Array(4)//创建一个长度为4的空数组

var arr=['a','b','c']
arr.forEach(function(item,index,arr){
    arr[index]=item+'1'
})

var newArr=arr.map(function(item,index,arr){
    return item+'1'
})//forEach只遍历，map会返回一个新的数组