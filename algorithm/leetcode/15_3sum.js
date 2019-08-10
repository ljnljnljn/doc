/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let len = nums.length;
  let res = [];
  if(len < 3) return res;
    for (let i = 0; i < len; i++ ) { 
        if (i && nums[i] === nums[i - 1]) continue 
    
        let target = -nums[i]
    
        let [start, end] = [i + 1, len - 1]
    
        while (start < end) {
          let sum = nums[start] + nums[end]
    
          if (sum > target) {
            end--
          } else if (sum < target) {
            start++
          } else {
            res.push([nums[i], nums[start], nums[end]])
            
            // remove the duplication
            while (nums[start] === nums[start + 1]) start++;
            start++;

            // remove the duplication
            while (nums[end] === nums[end - 1]) end--;
            end--;
          }
        }
      }
    return res
};

threeSum([-1,0,1,2,-1,-4]);