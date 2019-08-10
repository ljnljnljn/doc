/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let res = [],
        top = 0,
        bottom = n - 1,
        left = 0,
        right = n - 1,
        count = 1;
    while(count <= n * n) {
        for(let i = left; i <= right; i++) {
            if(!res[top]) res[top] = []
            res[top][i] = count++
        }
        top++;
        for(let i = top; i <= bottom; i++) {
            if(!res[i]) res[i] = []
            res[i][right] = count++
        }
        right--;
        for(let i = right; i >= left; i--) {
            if(!res[bottom]) res[bottom] = []
            res[bottom][i] = count++
        }
        bottom--;
        for(let i = bottom; i >= top; i--) {
            if(!res[i]) res[i] = []
            res[i][left] = count++
        }
        left++;
    }
    return res
}

console.log(generateMatrix(3))