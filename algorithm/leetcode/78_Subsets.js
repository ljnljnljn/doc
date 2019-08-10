/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let res, temp;
var subsets = function(nums) {
    res = []; temp = [];
    nums.sort((a, b) => {
        return a -b
    });
    dfs(0, nums)
    return res
};

function dfs(index, nums) {
    let ans = temp.map(item => item);
    res.push(ans)

    for(let i = index; i< nums.length; i++) {
        temp.push(nums[i]);
        dfs(i + 1, nums)
        temp.pop()
    }
}

console.log(subsets([1,2,3]))