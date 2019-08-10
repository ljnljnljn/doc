/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let stole = []
    stole[0] = nums[0]
    stole[1] = Math.max(nums[0], nums[1])
    for(let i = 2; i < nums.length; i++) {
        stole[i] = Math.max(stole[i - 2] + nums[i], stole[i - 1])
    }
    return stole[nums - 1] || 0
};

console.log(rob( [1]))

console.log(Math.max(1, undefined))