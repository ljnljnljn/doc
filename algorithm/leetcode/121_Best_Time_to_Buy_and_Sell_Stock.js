/**
 * @param {number[]} prices
 * @return {number}
 */
// 通过遍历数组，同时更新最大利润和较小的值
var maxProfit = function(prices) {
    let len = prices.length
    let min = Infinity
    let res = 0
    for(let i = 0; i < len; i++) {
        min = Math.min(min, prices[i])
        res = Math.max(res, prices[i] - min)
    }
    return res
};