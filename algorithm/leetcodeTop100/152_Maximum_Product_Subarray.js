/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let res = nums[0]
    let f = [], g = []
    f[0] = nums[0]
    g[0] = nums[0]
    for(let i = 1; i < nums.length; i++) {
        f[i] = Math.max(Math.max(f[i-1] * nums[i], g[i - 1]*nums[i]), nums[i])
        g[i] = Math.min(Math.min(f[i-1] * nums[i], g[i - 1]*nums[i]), nums[i])
        res = Math.max(res, f[i])
    }
    return res
};
console.log(maxProduct([2,3,-2,4]))