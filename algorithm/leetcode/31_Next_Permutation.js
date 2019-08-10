/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let len = nums.length;
    let flag = false;
    let pos;
    for(let i = len - 2; i >= 0; i--) {
        if(nums[i] < nums[i + 1]) {
            flag = true;
            pos = i;
            break;
        }
    }
    if(!flag) {
        nums.sort((a, b) => {
            return a - b
        })
    }else {
        for(let i = len - 1;; i--) {
            if(nums[i] > nums[pos]) {
                let temp = nums[i];
                nums[i] = nums[pos];
                nums[pos] = temp;
                break;
            }
        }
        let temp = nums.slice(pos + 1).sort((a, b) => {
            return a - b;
        })
        console.log(temp)
        nums.length = pos + 1;
        Array.prototype.push.apply(nums, temp);
    }
    return nums
};
console.log(nextPermutation([6, 5, 4, 8, 7, 5, 1]))