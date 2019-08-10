/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let temp = [...nums].sort((a,b) => {
        return a - b
    })
    let start = -1
        end = -1
    for(let i = 0; i < nums.length; i++) {
        if(nums[i]!== temp[i]) {
            if(start === -1) {
                start = i
            }
            end = i
        }
    }
    return end === start ? 0 : end - start + 1
};

console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]))