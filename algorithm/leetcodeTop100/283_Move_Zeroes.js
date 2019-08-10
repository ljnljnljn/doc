/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let len = nums.length
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len - i - 1; j++) {
            if(nums[j] === 0) {
                let temp = nums[j]
                nums[j] = nums[j + 1]
                nums[j + 1] = temp 
            }
        }
    }
    return nums
};

var moveZeroes1 = function(nums) {
    for(let i = nums.length - 1; i>=0; i--) {
        if(nums[i] === 0) {
            nums.splice(i, 1)
            nums.push(0)
        }
    }
}
console.log(moveZeroes1([0,1,0,3,12]))