/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = new Map();
    var res = [];
    for(var i = 0; i < nums.length; i++) {
        if(map.has(target - nums[i])) {
            res[1] = i;
            res[0] = map.get(target - nums[i]) - 1;
            return res
        }
        map.set(nums[i], i + 1);
    }
    return res
};