/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let len = nums.length;
    for(let i = 0; i < len; i++) {
        let minIndex= i;
        for(let j = i + 1; j < len; j++) {
            if(nums[j] < nums[minIndex]) {
                minIndex = j
            }
        }
        let temp = nums[i];
        nums[i] = nums[minIndex]
        nums[minIndex] = temp
    }
};