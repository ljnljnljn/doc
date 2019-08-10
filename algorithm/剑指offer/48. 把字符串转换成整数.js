// 将一个字符串转换成一个整数(实现Integer.valueOf(string)的功能，
// 但是string不符合数字要求时返回0)，
// 要求不能使用字符串转换整数的库函数。 数值为0或者字符串不是一个合法的数值则返回0。


// 考察代码的完整性
function StrToInt(str)
{
    // write code here
    var len = str.length;
    var res = 0
    var s = 1
    if(len < 1) return res;
    if(str[0] == '-') s = -1;
    for(var i = (str[0] == '-' || str[0] == '+') ? 1 : 0; i < len; i++) {
        if(str[i] < '0' || str[i] > '9') return 0;
        res = res * 10 + str[i]* 1  
    } 
    return res*s
        
}