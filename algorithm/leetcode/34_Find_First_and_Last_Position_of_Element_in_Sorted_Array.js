/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let res = [];
    res.push(nums.indexOf(target), nums.lastIndexOf(target))
    return res
};
console.log(searchRange([5,7,7,8,8,10], 8))