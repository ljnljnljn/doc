/**
 * @param {number} n
 * @return {string[][]}
 */


// 对于左上到右下的对角线， 处于同意对角线的元素， x，y坐标之差相等
// 对于右上到左下对角线，处于同一对角线的元素， x，y之和相等
//  使用pos[i] = j来表示第i行，第j列放置了皇后
let pos, res;
var solveNQueens = function(n) {
    pos = [], res = []
    dfs(1, n);
    return res;
};
function dfs(index, n) {
    if(index === n + 1) {
        let temp = [];
        for(let i = 1; i <= n; i++) {
            var str = '';
            for(let j = 1; j <= n; j++) {
                if(pos[i] === j) {
                    str += 'Q';
                }else {
                    str += '.'
                }
            }
            temp.push(str)
        }
        res.push(temp);
        return;
    }
    // 将皇后放在第index列，第j行
    for(let j = 1; j <= n; i++) {
        // 判断当前列或者当前对角线有皇后则不能放置
        if(check(index, j)) continue;
        // 第index列，第j行符合规范
        pos[index] = j;
        // 回朔法
        dfs(index + 1, n)
    }
}

function check(curr, index) {
    for(let i = 1; i < curr; i++) {
        // 对于左上到右下的对角线， 处于同意对角线的元素， x，y坐标之差相等
        if(Math.abs(i - curr) === Math.abs(pos[i] - index)) return true;

        // 对于右上到左下对角线，处于同一对角线的元素， x，y之和相等
        if(index === pos[i]) return true
    }
    return false
}