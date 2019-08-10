/**
 * @param {number[]} heights
 * @return {number}
 */

//  利用递增栈来进行处理
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


console.log(largestRectangleArea([1]))