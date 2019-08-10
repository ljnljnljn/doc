/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
let number
var spiralOrder = function(matrix) {
    if (matrix.length === 0) return [];
    let rows = matrix.length, cols = matrix[0].length;
    let start = 0;
    number = []
    while(rows > start * 2 && cols > start * 2) {
        printMatrix(matrix, start, rows, cols)
        start++
    }
    return number
};
function printMatrix(matrix, start, rows, cols) {
    let endx = cols - start - 1;
    let endy = rows - start - 1;
    // 从左到右
    for(let i = start; i <= endx; i++) {
        number.push(matrix[start][i])
    }
    // 从上到下
    if(start < endy) {
        for(let i = start + 1;i <= endy; i++) {
            number.push(matrix[i][endx])
        }
    }
    // 从右到左
    if(start < endx && start < endy) {
        for(let i = endx - 1; i >= start; i--) {
            number.push(matrix[endy][i])
        }
    }
    // 从上到下
    if(start < endx && start < endy - 1) {
        for(let i = endy - 1; i >= start + 1; i--) {
            number.push(matrix[i][start])
        }
    }
}

console.log(spiralOrder([
    [ 1, 2, 3, 4 ],
    [ 5, 6 ,7, 8 ],
    [ 9, 10, 11, 12 ],
    [13, 14, 15, 16]
   ]))