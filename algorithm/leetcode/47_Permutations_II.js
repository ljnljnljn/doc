/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let len = nums.length , res = [], ans = [], has = [], hasUnique = {};
    dfs(0, nums);
    return res
    function dfs(num, nums) {
        if(num === len) {
            let temp = ans.map((item) => item);
            if(hasUnique[temp.toString()]) return;
            res.push(temp);
            hasUnique[temp.toString()] = true
            return
        }
        for(let i = 0; i < len; i++) {
            if(has[i]) continue;
            has[i] = true;
            ans.push(nums[i])
            dfs(num + 1, nums);
            has[i] = false;
            ans.pop()
        }
    }
};
console.log(permuteUnique([1,1,2]))