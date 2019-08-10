/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = new Map()
    for(let i = 0; i < nums.length; i++) {
        if(!map.get(nums[i])) {
            map.set(nums[i], 1)
        }else {
            map.set(nums[i], map.get(nums[i]) + 1)
        }
    }
    let len = Math.floor(nums.length / 2)
    for(let key of map.keys()) {
        if(map.get(key) > len) {
            return key
        }
    }
    return null
};

console.log(majorityElement([3,2,3]))