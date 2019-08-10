/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
let res, temp;
var combine = function(n, k) {
    res = [],
    temp = [];
    for(let i = 1; i <= n; i++) {
        temp[0] = i
        dfs(i + 1, n, 1, k)
    }
    return res
};

function dfs(next, n, num, k) {
    if(num === k) {
        let ans = temp.map(item => item)
        res.push(ans)
        return;
    }
    
    for(let i = next; i <= n; i++) {
        temp.push(i);
        dfs(i + 1, n, num + 1, k)
        temp.pop()
    }
}

console.log(combine(4, 2))