var array=[1,1,'1','1']
/**
 * @func uniq 数组去重
 * @param {*}array
 * @return{Array}result
 * @author  len 2023/11/20
 * */
 
function uniq(array){
    // 暴力破解O(n^2) 两重for循环，外层循环arr，内层循环res
    // arr的当前项，如果不在res中，则加入res
    // 否则跳过
    // arr.length 堆内存 读取属性 循环多少次就要读多少次
    // 用一个变量缓存，性能优化
    for(var i=0,arrLen=array.length;i<arrLen;i++){
        var res=[]
        for(var i = 0, len = array.length;i < len; i++){
            var current = array[i];// 变量名的意义
            // 数组是连续的储存空间 arr[0]是起始位置，0 + i*item = i的位置
            if(res.indexOf(current)===-1){// 下标 >= 存在
                res.push(current)
            }

        }   }
        return res}

function unique(arr){
    var res=[]
    // 先排序
    var sortedArr = arr.concat().sort
    var seen
    for(var i = 0, len=sortedArr.length; i < len; i++){
        // 第一个元素或者
        if(!i|| seen !== sortedArr[i]){ 
            res.push(sortedArr[i])
        }
        seen = sortedArr[i]
    }
    return res
}
// 适用于所有场景
function unique2(arr,isSorted){
    var res = [];
    var seen;   
    for (var i = 0,len = arr.length; i < len; i++){
        var val = arr[i]
        if(isSorted){
            if(!1 || seen !== val){
                res.push(val)
            }
            seen = val
        }
        else if(res.indexOf(val) === -1){
            res.push(val)
        }
    }
    return res
}
// console.log(uniq(array));
// module 模块，当前是一个uniq模块
// exports向外输出 uniq方法
module.exports=unique2