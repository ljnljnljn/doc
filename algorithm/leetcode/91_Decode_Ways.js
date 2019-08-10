/**
 * @param {string} s
 * @return {number}
 */

// 采用动态规划的方法， 如果s的第i-1位和第i位置可以组成10到26的数字时，说明我们是在第i-2位上继续解码
// 如果字符串的第i-1位和第i位不能组成有效二位数字，而且第i位不是0的话，说明我们是在第i-1位的解码方法上继续解码
// 根据上面两个条件，有公式满足i-1和i可以组成有效数字，且i位不为0的话：num3 = num1 +num2
// 有公式满足i-1和i不可以组成有效数字，且i位不为0的话num3 = num2
var numDecodings = function(s) {
    if(s.length <= 0 || s[0] === '0') {
        return 0
    }
    let num1 = 1, num2 = 1, num3 = 1;
    for(let i = 1; i < s.length; i++) {
        if(s[i] === '0') {
            if(s[i - 1] === '1' || s[i - 1] === '2') {
                num3 = num1;
            }else {
                return 0
            }
        }else {
            if(s[i - 1] === '0' || s[i - 1] >= '3') {
                num3 = num2
            }else {
                if(s[i - 1] === '2'&& s[i]>='7' && s[i]<='9') {
                    num3 = num2
                }else {
                    num3 = num1 + num2
                }
                
            }
        }
        num1 = num2;
        num2 = num3;
    }
    return num2
};

console.log(numDecodings('123'))