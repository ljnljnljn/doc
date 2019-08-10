/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let temp = [], res, ans = [], has = [], index = 0;
    for(let i = 0; i <= n; i++) {
        temp[i] = i + 1
    }
    dfs(0, temp);
    return res.join('')
    function dfs(num, nums) {
        if(num === n) {
            index++;
            if(index === k) {
                let temp = ans.map(item => item);
                res = temp
                return
            }
        }
        for(let i = 0; i < n; i++) {
            if(has[i]) continue;
            has[i] = true
            ans.push(nums[i])
            dfs(num + 1, nums)
            has[i] = false
            ans.pop()
        }
    }
};

console.log(getPermutation(3, 3))