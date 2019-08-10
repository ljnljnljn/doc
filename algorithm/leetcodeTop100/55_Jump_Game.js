/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let max = 0
    for(let i = 0; i < nums.length; i++) {
        if(max >= nums.length - 1) {
            return true
        }
        max = Math.max(nums[i] + i, max)
    }
    return false
}

console.log(canJump([2,3,1,1,4]))