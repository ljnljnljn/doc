var maxProfit = function(prices) {
    let res = 0
    let len = prices.length
    for(let i = 0; i < len; i++) {
        if(prices[i] < prices[i + 1]) {
            res += prices[i + 1] - prices[i]
        }
    }
    return res
}