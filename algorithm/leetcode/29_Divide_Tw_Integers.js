/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let MAX_INT = ~(1 << 31);
    let MIN_INT = (1 << 31);
    
    let res = divisor * dividend > 0 ? Math.floor(dividend / divisor): -Math.floor(Math.abs(dividend) / Math.abs(divisor));

    if(res < MIN_INT) {
        res = MIN_INT
    }
    if(res > MAX_INT) {
        res = MAX_INT
    }
    return res
};
console.log(Math.floor(-7/-3))