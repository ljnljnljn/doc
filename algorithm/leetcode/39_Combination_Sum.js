/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = [], ans = [];
    candidates.sort((a, b) => {
        return a - b
    });
    dfs(res, ans, candidates, target, 0)
    return res
}
function dfs(res, temp, candidates, target, index) {
    if(target === 0) {
        res.push(temp.map(item => item))
    }
    for(let i = index; i < candidates.length && target >= candidates[i]; i++) {
        temp.push(candidates[i]);
        dfs(res, temp, candidates, target - candidates[i], i)
        temp.pop()
    }
}