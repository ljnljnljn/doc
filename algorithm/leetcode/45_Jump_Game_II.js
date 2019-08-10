/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let time = 0;
    let reached = 0;
    let max = 0;
    for(let i = 0; i < nums.length; i++) {
        if(reached < i) {
            time++;
            reached = max
        }
        max = Math.max(max, i + nums[i])
    }
    return time
};
console.log(jump([2,3,1,1,4]))