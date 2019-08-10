// 题目: 一只青蛙一次可以跳上1级台阶，也可以跳上2级。
// 求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。


// f(n) = f(n - 1) + f(n - 2) 仍然是斐波那契数列
function jumpFloor(number)
{
    // write code here
    if(number <= 0) return 0;
    if(number === 1) return 1;
    if(number === 2) return 2;
    let a = 1,
        b = 2,
        temp = 0;
    for(let i = 3; i <= number; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return temp;
}