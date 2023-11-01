//函数要注意什么
//编写一个函数，返回一个美国座机格式的电话号码（123）4567-890
//输入时数字数组[1,2,3,4,5,6,7,8,9,0]
//不要急于写功能，先写注释
//大厂，代码的可读性升值比功能重要一个等级
//不用读代码，看完注释拿来就用
//10w人，5w+合作

/**
 *  @func返回美国格式的座机号码
 * @param{Array}nums[1324567890]
 * @return{string}(123)456-7890 
 * @author ysw 2023/10/31
 * */
function createPhoneNumber(nums){
    return "(" + nums[0] + nums[1] + nums[2] + ")" + nums[3] + nums[4] + nums[5] + "-" + nums[6] + nums[7] + nums[8] + nums[9]
}

//js里的函数还能怎么写？es6+语法
//const createPhoneNumber=(nums)=>{}
let createPhoneNumber//undifined 类型未定义 let声明了undifined的变量
const createPhoneNumber=(nums)=>"(" + nums[0] + nums[1] + nums[2] + ")" + nums[3] + nums[4] + nums[5] + "-" + nums[6] + nums[7] + nums[8] + nums[9]

createPhoneNumber([1,2,3,4,5,6,7,8,9,0])


//还有别的实现方法吗？