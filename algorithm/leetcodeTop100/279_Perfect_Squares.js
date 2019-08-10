/**
 * @param {number} n
 * @return {number}
 */
// 利用动态规划
var numSquares = function(n) {
    let dp = []
    for(let i = 1; i <= n; i++) {
        dp[i] = Number.MAX_VALUE
    }
    dp[0] = 0
    for(let i = 0; i <= n; i++) {
        for(let j = 1; ;j++) {
            if(i + j * j >n) break
            dp[i + j * j] = Math.min(dp[i + j * j], dp[i] + 1)
        }
    }
    return dp[n]
};

console.log(numSquares(5))