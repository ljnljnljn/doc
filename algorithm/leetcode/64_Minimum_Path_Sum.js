var minPathSum = function(grid) {
    let m = grid.length, n = grid[0].length,
        res = [];
    for(let i = 0; i < m; i++) {
        res[i] = [];
    }
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(i === 0 && j === 0) {
                res[i][j] = grid[i][j]
            }else if(i === 0) {
                res[i][j] = res[i][j - 1] + grid[i][j]
            }else if(j === 0) {
                res[i][j] = res[i - 1][j] + grid[i][j]
            }else {
                res[i][j] = Math.min(res[i - 1][j], res[i][j - 1]) + grid[i][j]
            }
        }
    }
    return res[m - 1][n - 1]
};