/**
 * @param {number[]} prices
 * @return {number}
 */

// 先求出第一次交易的最大利润，然后进行第二次交易。
// 两次交易不能重叠。我们使用一个数组来保存第一次每一步的最大利润，然后进行反向遍历
var maxProfit = function(prices) {
    let len = prices.length
    let maxBefore = []
    maxBefore[0] = 0
    let min = prices[0]
    for(let i = 1; i < len; i++) {
        maxBefore[i] = Math.max(maxBefore[i - 1], prices[i] - min)
        min = Math.min(min, prices[i])
    }

    let max = prices[len - 1]
    let res = 0
    for(let i = len - 2; i>= 0; i--) {
        max = Math.max(max, prices[i])
        res = Math.max(res, max - prices[i] + maxBefore[i])
    }
    return res
};


// 第二种：基本想法是使用四个变量来表示第一次买入，第一次卖出，第二次买入，第二次卖出。然后再遍历的同时对其进行更新

maxProfit([3,3,5,0,0,3,1,4])

