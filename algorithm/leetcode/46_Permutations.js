/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = [], ans = [], has = [],len = nums.length;
    dfs(0, nums);
    return res
    function dfs(num, nums) {
        if(num == len) {
            let temp = ans.map(item => {
                return item
            })
            res.push(temp)
        }
        for(let i = 0; i < len; i++) {
            if(has[i]) continue;
            has[i] = true
            ans.push(nums[i])
            dfs(num + 1, nums);
            has[i] = false
            ans.pop()
        }
    }
};

console.log(permute([1, 2, 3]))