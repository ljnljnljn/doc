/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var len = height.length;
    if(len <= 0) return 0;
    var maxArea = 0;
    var start = 0;
    var end = len - 1;
    while(start < end) {
        maxArea = Math.max(maxArea, Math.min(height[start],height[end]) * (end - start));
        if(height[start] < height[end]) {
            start++
        }else {
            end--
        }
    }
    return maxArea
};
console.log(maxArea([1,8,6,2,5,4,8,3,7]))