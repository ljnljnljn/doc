/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var res, ans, has, len;
var subsetsWithDup = function(nums) {
    nums.sort((a, b) => {
        return a - b
    })
    res = [];
    ans = [];
    has = {};
    len = nums.length;
    dfs(0, nums)
    return res
};

function dfs(index, nums) {
    var temp = ans.map(item => item);
    if(!has[temp.toString()]) {
        res.push(temp)
        has[temp.toString()] = true
    }

    for(let i = index; i < len; i++) {
        ans.push(nums[i]);
        dfs(i + 1, nums)
        ans.pop()
    }
}