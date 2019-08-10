// 题目： 求1+2+3+...+n，
// 要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。

// 可以使用递归调用
function Sum_Solution(n)
{
    // write code here
    let res = n
    res&& (res += Sum_Solution(n - 1))
    return res
}

console.log(Sum_Solution(5))

var str = '1'
var n = str * 1
console.log(typeof n)