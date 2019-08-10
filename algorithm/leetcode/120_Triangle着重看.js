/**
 * @param {number[][]} triangle
 * @return {number}
 */
// 动态规划 triangle[i][j] = Math.min(triangle[i - 1][j - 1],triangle[i - 1][j])

// 第一种方法会改变原数组
var minimumTotal = function(triangle) {
    let len = triangle.length
    for(let i = 1; i < len; i++) {
        for(let j = 0; j < triangle[i].length; j++) {
            if(j === 0) {
                triangle[i][j] += triangle[i - 1][j]
            }else if(j === triangle[i].length - 1) {
                triangle[i][j] += triangle[i - 1][j - 1]
            }else {
                triangle[i][j] += Math.min(triangle[i - 1][j], triangle[i - 1][j - 1])
            }
        }      
    } 
    let res = triangle[len - 1][0]
    for(let i = 0; i < triangle[len - 1].length; i++) {
        res = Math.min(triangle[len - 1][i], res)
    }
    return res
};

minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]])