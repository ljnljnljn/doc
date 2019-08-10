/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let len = nums.length;
    let res = [];
    if(len < 4) return res;
    nums.sort((a, b) => {
        return a - b 
    })

    for(let i = 0; i < len; i++) {
        if (i && nums[i] === nums[i - 1]) continue
        for(let j = i + 1; j < len; j++) {
            if(j != i + 1 && nums[j] == nums[j - 1]) continue
            let start = j;
            let end = len - 1;
            while(start < end) {
                if(nums[i] + nums[j] + nums[start] + nums[end] < target) {
                    start++
                }else if(nums[i] + nums[j] + nums[start] + nums[end] > target) {
                    end--
                }else {
                    res.push([nums[i], nums[j], nums[start], nums[end]]);
                    start++
                    end--
                    while(nums[start] === nums[start - 1]) start++
                    while(nums[end] === nums[end + 1]) end--
                }
            }
        }
    }
    return res
};

console.log(fourSum([-1,0,-5,-2,-2,-4,0,1,-2], -9))