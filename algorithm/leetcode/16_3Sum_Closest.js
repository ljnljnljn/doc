/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//  不需要考虑去重
var threeSumClosest = function(nums, target) {
    let len = nums.length;
    let res = 0;
    let minDiff = Infinity;
    if(len < 3) return res;
    nums.sort((a, b) => {
        return a - b
    })
    for(let i = 0; i < len; i++) {
        let start = i + 1;
        let end = len - 1;
        while(start < end) {
            let sum = nums[start] + nums[i] + nums[end];
            let diff = Math.abs(sum - target);
            if(diff < minDiff) {
                res = sum;
                minDiff = diff
            }
            if(sum < target) {
                start++
            }else if(sum > target) {
                end--
            }else {
                return res
            }
        }
    }
    return res
};

console.log(threeSumClosest([-1, 2, 1, -4], 1))