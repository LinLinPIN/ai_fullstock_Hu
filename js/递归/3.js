// 斐波那契数列
function fb(n){
    if(n<3)return 1
    return fb(n-2)+fb(n-1)
}
console.log(fb(4));