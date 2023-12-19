var maxProfit = function(prices){
    let min = prices[0]
    let profit = 0
    let n = prices.length
    for(let i = 1;i < n ; i++){
        if(prices[i]>prices[i-1]){
            // 不是更新利润
            profit = Math.max(profit,prices[i]-min)
        }else{
            // 就是更新min
            min = Math.min(min,prices[i])
        }
    }
    return profit
}

console.log(maxProfit([7,1,5,3,6,4]))