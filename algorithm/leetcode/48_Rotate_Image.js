/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let n = matrix.length;
    let temp = []
    for(let i = 0; i < n; i++) {
        temp[i] = [];
        for(let j = 0; j < n; j++) {
            temp[i][j] = matrix[i][j]
        }
    }
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            matrix[i][j] = temp[n - j - 1][i]
        }
    }
};