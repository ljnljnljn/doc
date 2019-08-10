/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let res = [], len = digits.length;
    digits[len - 1]++, add = 0;
    for(let i = len - 1; i >= 0; i--) {
        let sum = digits[i] + add;
        res[i] = sum % 10;
        add = Math.floor(sum / 10)
    }
    if(add) {
        res.unshift(add)
    }
    return res
};
console.log(plusOne([9,9,9,9]))