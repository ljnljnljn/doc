/**
 * @param {number} rowIndex
 * @return {number[]}
 */ 
var getRow = function(rowIndex) {
    let res = []
    if(rowIndex <= 0) return res
    res.push([1])
    for(let i = 1; i < rowIndex + 1; i++) {
         let prev = res[i - 1]
         let curr = [1]
         for(let j = 1; j <= i; j++) {
             let pre = prev[j - 1]
             let cur = prev[j] ? prev[j] : 0
             curr.push(pre + cur)
         }
         res.push(curr)
    }
    return res[rowIndex]
};