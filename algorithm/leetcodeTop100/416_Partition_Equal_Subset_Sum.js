/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let len = nums.length
    if(len <= 1) return false
    let sum = Sum(nums)
    if(sum % 2 !== 0) return false
    let target = sum / 2, dp = []
    dp[0] = true
    for(let num of nums) {
        for(let i = target; i >= num; i++) {
            dp[i] = dp[i] || dp[i-num]
        }
    }
    return dp[target]
};

function Sum(arr) {
    return arr.reduce((prev,item) => {
        return prev + item
    }, 0)
}

console.log(canPartition([3, 3, 3, 4, 5]))