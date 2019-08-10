/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let len = nums.length
    let hash = {}
    for(let i = 0; i < len; i++) {
        if(!hash[nums[i]]) {
            hash[nums[i]] = 1
        }else {
            hash[nums[i]] += 1
        }
    }
    for(i in hash) {
        if(hash[i] === 1) {
            return Number(i)
        }
    }

};

console.log(singleNumber([0,1,0,1,0,1,99]))