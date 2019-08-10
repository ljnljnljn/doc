/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let len = nums.length;
    let max = -Number.MAX_VALUE, sum = 0;
    for(let i = 0; i < len; i++) {
        sum += nums[i]
        if(sum > max) max = sum;
        if(sum < 0) sum = 0
    }
    return max
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))