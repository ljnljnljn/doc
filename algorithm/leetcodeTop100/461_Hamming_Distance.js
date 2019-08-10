/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let ans = (x ^ y).toString(2)
    let res = 0
    for(let i = 0; i < ans.length; i++) {
        if(ans[i] === '1') {
            res++
        }
    }
    return res
};

console.log(hammingDistance(1,4))