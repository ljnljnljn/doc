/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if(m <= 0 && n <=0 ) return 0;

    let res = []
    for(let i = 0; i < m; i++) {
        res[i] = []
    }
    for(let i = 0; i <m; i++) {
        for(let j = 0; j < n; j++) {
            if(i === 0 && j === 0) {
               res[i][j] = 1 
            }else if(i === 0) {
                res[i][j] = res[i][j - 1]
            }else if(j === 0) {
                res[i][j] = res[i - 1][j]
            }else {
                res[i][j] = res[i - 1][j] + res[i][j - 1]
            }
        }
    }
    return res[m - 1][n - 1]
};

// 机器人一共走 m + n - 2步，其中m-1步往下走，n-1步往右走，
// 本质上就是一个组合问题，也就是从m+n-2个不同元素中每次取出m-1个元素的组合数


console.log(uniquePaths(3, 1))