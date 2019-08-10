/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    return nums.some((item, index, arr) => {
        return item === target
    })
};