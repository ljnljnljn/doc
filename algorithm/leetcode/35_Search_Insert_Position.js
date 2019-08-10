/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let temp = nums.findIndex((a) => {
        return a === target;
    })
    if(temp === -1) {
        nums.push(target);
        nums.sort((a, b) => {
            return a - b;
        })
        temp = nums.findIndex((a) => {
            return a === target;
        })
    }
    return temp
};