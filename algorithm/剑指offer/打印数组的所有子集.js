//利用深度优先搜索，原集合中每个数字只有两种状态一种是存在，另一种是不存在

let res, temp;
var subsets = function(nums) {
    res = []; temp = [];
    nums.sort((a, b) => {
        return a -b
    });
    dfs(0, nums)
    return res
};
function dfs(idx, nums) {
    let ans = [...temp]
    res.push(ans)

    for(let i = idx; i < nums.length; i++) {
        temp.push(nums[i])
        dfs(i + 1, nums)
        temp.pop()
    }
}
console.log(subsets([1,2,3]))