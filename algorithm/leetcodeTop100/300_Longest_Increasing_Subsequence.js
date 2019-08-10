/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let len = nums.length
    let dp = []
    dp.length = len
    dp.fill(1)
    let res = 0
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < i;j++) {
            if(nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
        res = Math.max(res, dp[i])
    }
    return res
};

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]))