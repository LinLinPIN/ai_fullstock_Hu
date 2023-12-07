let arr = [2,4,5,1,3]// []

// arr.sort((a,b)=>{
//     return a-b
// })

// console.log(arr);

function bubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j])
            [arr[i],arr[j]]=[arr[j],arr[i]]
        }
    }
    return arr
}
console.log(bubbleSort(arr))