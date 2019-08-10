/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let len = nums.length
    if(len < 3) return []
    let res = []
    nums.sort((a, b) => {
        return a - b
    })
    for(let i = 0; i < len; i++) {
        if(i && nums[i] === nums[i - 1]) continue
        let target = -nums[i]
        let start = i + 1
        end = len - 1
        while(start < end) {
            let sum = nums[start] + nums[end]
            if(sum > target) {
                end--
            }else if(sum < target) {
                start++
            }else {
                res.push([nums[i],nums[start], nums[end]])
                while(nums[start] === nums[start + 1]) {
                    start++
                }
                start++
                while(nums[end] === nums[end-1]) {
                    end--
                }
                end--
            }
        } 
    }
    return res
}

console.log(threeSum([1,2,-2,-1]))