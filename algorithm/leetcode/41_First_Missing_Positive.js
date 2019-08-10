/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let has = [];
    for(let i = 0; i < nums.length; i++) {
      if (nums[i] <= 0) continue;
      else has[nums[i]] = true;
    }
    for(var i = 1; ; i++){ 
      if (!has[i]) return i;
    }
};
console.log(firstMissingPositive([7,8,9,11,12]))