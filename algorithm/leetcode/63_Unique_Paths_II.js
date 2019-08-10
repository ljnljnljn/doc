/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length, n = obstacleGrid[0].length;
    if(m <= 0 && n <=0 ) return 0;

    let res = []
    for(let i = 0; i < m; i++) {
        res[i] = []
    }
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(obstacleGrid[i][j] === 1) {
                res[i][j] = 0
            }else if(i === 0 && j === 0) {
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