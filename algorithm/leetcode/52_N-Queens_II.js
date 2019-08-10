/**
 * @param {number} n
 * @return {number}
 */
var count = 0;
var totalNQueens = function(n) {
    if(n < 0) return [];
    let d1 = [], d2 = [], colVisited = [], pos = [];
    findQueens(n, 0, colVisited, d1, d2)
    return count
}
    
function findQueens(n, row, colVisited, d1, d2) {
    if(row === n) {
        count++
        return;
    }
    // 将皇后放在第row行第j列
    for(let j = 0; j < n; j++) {
        // 判断当前列或者对角线是否有皇后
        if(colVisited[j] || d1[row + j] || d2[row - j + n - 1]) continue;
        colVisited[j] = true;
        d1[row + j] = true;
        d2[row - j + n - 1] = true;
        // dfs
        findQueens(n, row + 1, colVisited, d1, d2);
        // 利用回溯清除清除标志位
        colVisited[j] = false;
        d1[row + j] = false;
        d2[row - j + n - 1] = false;
    }
    return
} 

console.log(totalNQueens(1))