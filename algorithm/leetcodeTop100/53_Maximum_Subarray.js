/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let len = nums.length
    if(len <= 0) return null
    let max = nums[0]
        curr = nums[0]
    for(let i = 1; i < len; i++) {
        curr = curr < 0 ? nums[i] : curr + nums[i]
        max = Math.max(curr, max)
    }
    return max
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))