/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let max = nums[0];
    for(let i = 0; i <= max; i++) {
        if(max >= nums.length - 1) {
            return true
        }
        max = Math.max(max, nums[i] + i)
    }
    return false
};

console.log(canJump([2,3,1,1,4]))