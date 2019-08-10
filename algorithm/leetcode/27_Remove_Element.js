/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let len = nums.length;
    for(let i = len; i >= 0;i--) {
        if(nums[i] === val) {
            nums.splice(i, 1);
        }
    }
    console.log(nums)
    return nums.length
};

removeElement([0,1,2,2,3,0,4,2], 2)