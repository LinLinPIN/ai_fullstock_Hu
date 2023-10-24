var str='hello world'//string 字符串
var num=123 //number 数字
var flag=false //boolean 布尔值
var un=undefined
var n=null

//引用类型 对象
var obj={
    name:'胡积梁',
    age:21,
    like:{
        item:'eat'
    }
}
//console.log(obj.name);
var arr=['a','b','c',2,{a:1}]
arr[0]='aa'
//arr[5]=true
arr.push(true)
arr.pop()
arr.unshift('hello')
arr.shift()//头部删除
arr.splice(2,1)//在下标2位置往后删除一个元素
arr.splice(2,0,false)//在下标2位置添加一个false

for(var i=0;i<arr.length;i++){
    arr[i]=arr[i]+1
}
arr.forEach(
    function(item,index,arr){//回调函数
        //item是数组每一项，index是下标
    }
);

console.log(arr)

arr.includes(4)//判断数组里面是否存在4
arr.index(4)//返回数组4的下标，不存在就返回-1

//var arr=new Array()    返回一个空数组
//var arr=new Array(4).fill(1)     返回一个放了四个1的数组

var arr=[
    [1,2,3,4,5],
    [1,2,3,4,5],
    [1,2,3,4,5],
    [1,2,3,4,5],
    [1,2,3,4,5]
]