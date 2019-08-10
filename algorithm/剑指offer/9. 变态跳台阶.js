// 一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。
// 求该青蛙跳上一个n级的台阶总共有多少种跳法。


// 动态规划
function jumpFloorII(number)
{
    // write code here
    if(number <= 0) {
        return 0
    }else if(number === 1) {
        return 1
    }else {
        return 2* jumpFloorII(number - 1)
    }
}