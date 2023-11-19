var arr=[1,[2,[3,4]]] // [1,2,3,4]

// for(var i=0;i<arr.length;i++){
//     let res=[]
//     if(!Array.isArray(arr[i])){
//         res.push(arr[i])
//     }
//     else{
//         for(var j=0;j<arr[i].length;j++){
            
//         }
// }
// }

var newArr=arr.flat(n)// 直接数组扁平化  n为扁平化次数
var newArr=arr.flat(Infinity)// 无穷大
console.log(newArr);