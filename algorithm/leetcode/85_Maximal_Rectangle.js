/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if (!matrix.length) return 0;

    let n = matrix.length, m = matrix[0].length;
    let heights = [];
    for (var i = 0; i < m; i++) {
        heights[i] = 0;
    }
    let res = 0

    for (var i = 0; i < n; i++) {
        for (var j = 0; j < m; j++) {
            if (matrix[i][j] === '1') 
                heights[j]++;
            else 
                heights[j] = 0;
        }
        res = Math.max(res, largestRectangleArea(heights))
    }
    return res
}
var largestRectangleArea = function(heights) {
    heights.push(0) // 使得数组最后一个元素也能被处理
    let max = 0, stack = [];
    for(let i = 0; i < heights.length; i++) {
        while(stack.length && heights[i] < heights[stack[stack.length - 1]]) {
            let top = stack.pop();
            let nextTop = stack.length === 0 ? -1 : stack[stack.length - 1];
            max = Math.max((i - nextTop - 1) * heights[top], max);
        }
        stack.push(i)
    }
    return max
};

console.log(maximalRectangle([
    ["1","0","1","0","0"],
    ["1","0","1","1","1"],
    ["1","1","1","1","1"],
    ["1","0","0","1","0"]
  ]))