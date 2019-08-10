// 题目： 对于一个矩阵，请设计一个算法从左上角(mat[0][0])开始，顺时针打印矩阵元素。
// 给定int矩阵mat,以及它的维数nxm，请返回一个数组，数组中的元素为矩阵元素的顺时针输出。

function printMatrix(matrix)
{
    if(matrix == null || matrix.length == 0) {
        return;
    }
    var rows = matrix.length;
    var cols = matrix[0].length;
    var start = 0;
    var res = [];
    while(cols >start * 2 && rows > start * 2) {
        var endx = cols - 1 -start;
        var endy = rows - 1 - start;

        for(var i = start; i <= endx; i++) {
            res.push(matrix[start][i]);
        };
        if(start < endy) {
            for(var i = start + 1; i <= endy; i++) {
                res.push(matrix[i][endx]);
            }
        };

        if(start < endx && start < endy) {
            for(var i = endx - 1; i >= start; i--) {
                res.push(matrix[endy][i]);
            }
        };

        if(start < endx && start < endy - 1) {
            for(var i = endy - 1; i > start; i--) {
                res.push(matrix[i][start]);
            }
        };

        start++
    }
    return res;
}

console.log(printMatrix([[1,2],[3,4]]))