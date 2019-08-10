/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var res = parseInt(str);
    if(isNaN(res)) {
        return 0
    }
    if(res < -Math.pow(2, 31)) return -Math.pow(2, 31);
    if(res > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
    return res
};

console.log(myAtoi("4193 with words"));