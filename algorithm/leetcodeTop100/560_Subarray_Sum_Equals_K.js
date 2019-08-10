/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let res = 0
    for(let i = 0; i < nums.length; i++) {
        let curSum = 0
        for(let j = i; j < nums.length; j++) {
            curSum += nums[j]
            if(curSum === k) {
                res++
                continue
            }
        }
    }
    return res
};

console.log(subarraySum([1,1,1], 2))