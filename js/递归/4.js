var arr=[1,[2,[3,4]]] // [1,2,3,4]
function flaten(arr){
    let res=[]
    for(let i=0;i<arr.length;i++){
        if(!Array.isArray(arr[i])){
            res.push(arr[i])
        }else{
            res=res.concat(flaten(arr[i]))
        }
    }
    return res
}
let a=flaten(arr)
console.log(a);