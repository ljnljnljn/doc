// 题目：我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。
// 请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？

// 斐波那契数列问题
function rectCover(number)
{
    // write code here
    if(number <= 0) return 0;
    let r0 = 0, r1 = 1;
    let result = r0 + r1;
    for(let i = 2; i <= number; i++) {
        r0 = r1;
        r1 = result;
        result = r0 + r1;
    }
    return result
}