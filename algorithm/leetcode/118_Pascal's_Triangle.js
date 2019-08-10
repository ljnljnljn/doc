/**
 * @param {number} numRows
 * @return {number[][]}
 */
// 杨辉三角，每一行首位的数字都是1，从第三行开始，中间每一个数字都是上一行左右两个数字之和
var generate = function(numRows) {
    let res = []
    if(numRows <= 0) return res
    res.push([1])
    for(let i = 1; i < numRows; i++) {
         let prev = res[i - 1]
         let curr = [1]
         for(let j = 1; j <= i; j++) {
             let pre = prev[j - 1]
             let cur = prev[j] ? prev[j] : 0
             curr.push(pre + cur)
         }
         res.push(curr)
    }
    return res
};