/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let len = nums.length
    let res = 0
    for(let i = len; i >= 0; i--) {
        if(nums[i] === nums[i + 1]) {
            nums.splice(i, 1);
        }else {
            res++
        }
    }
    return res
};

removeDuplicates([0,0,1,1,1,2,2,3,3,4])
let arr = [1,2,3,4,5,6]
arr.splice(1,1)
console.log(arr)