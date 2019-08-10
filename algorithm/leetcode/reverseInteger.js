var reverse = function(x) {
    x = x + ''
    var temp = parseInt(x.split('').reverse().join(''));
    var res = x[0] == '-' ? -temp : temp
    if(res < -Math.pow(2, 31) || res > Math.pow(2, 31) - 1) {
        return 0
    } else {
        return res
    }
};
console.log(reverse(1534236469))