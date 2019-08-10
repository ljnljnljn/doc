// 题目：给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。


// 考察代码的完整性
function Power(base, exponent)
{
    // write code here
    var res = 1, curr = base;
    var n;
    if(exponent > 0) {
        n = exponent
    }else if(exponent < 0) {
        if(base == 0) {
            return new Error('分母不能为0');
        }
        n = -exponent
    }else {
        return 1
    }
    while(n !== 0) {
        if((n & 1) == 1) {
            res *= curr;
        }
        curr *= curr;
        n >>= 1
    }
    return exponent > 0 ? res : (1 / res)
}


const times = (str, num ) => {
    let res = ''
    for(let i = 0; i < num; i++) {
        res += str
    }
    return res
}

console.log(times('abc', 3))
console.log(Power(95.123, 12))