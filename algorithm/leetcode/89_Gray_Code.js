/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    let res = [];
    for(let i = 0; i < (1 << n); i++) {
        res[i] = i ^ (i >> 1)
    }
    return res
};

console.log(grayCode(2))

console.log(3 ^ (3 >> 1))