/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
    let res = 0
    findTarget(nums, S, 0)
    return res
    function findTarget(nums, target, start) {
        if(start >= nums.length) {
            if(target === 0) {
                res++
            }
            return 
        }
        findTarget(nums, target - nums[start], start + 1)
        findTarget(nums, target + nums[start], start + 1)
    }
};

console.log(findTargetSumWays([1, 1, 1, 1, 1],3))