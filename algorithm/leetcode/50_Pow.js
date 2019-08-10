/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    let res = 1, curr = x;
    let exp;
    if(n > 0) {
        exp = n
    }else if(n === 0) {
        return 1
    }else {
        exp = -n
    }
    while(exp !== 0) {
        if((exp & 1) == 1) {
            res *= curr;
        }
        curr *= curr;
        exp >>= 1
    }
    return n > 0 ? res : 1 / res
};
console.log(myPow(2, 10))