/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let res = 0, has = {};
    for(let i = nums.length; i >= 0; i--) {
        if(!has[nums[i]]) {
            has[nums[i]] = 1;
            res++;
        }else if(has[nums[i]] === 1) {
            has[nums[i]]++;
            res++
        }else {
            nums.splice(i, 1)
        }
    }
    return res
};