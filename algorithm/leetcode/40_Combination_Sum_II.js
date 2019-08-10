/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let res = [], ans = [];
    candidates.sort((a, b) => {
        return a - b
    })
    dfs(res, ans, candidates, target, 0)
    return res
};
function dfs(res, ans, candidates, target, index) {
    if(target === 0) {
        res.push(ans.map((item) => item))
    }
    for(let i = index; i < candidates.length && target >= candidates[i]; i++) {
        ans.push(candidates[i]);
        dfs(res, ans, candidates, target - candidates[i], i+1);
        ans.pop()
        while(i < candidates.length && candidates[i] === candidates[i + 1]) {
            i++
        }
    }
}
console.log(combinationSum2([10,1,2,7,6,1,5], 8))