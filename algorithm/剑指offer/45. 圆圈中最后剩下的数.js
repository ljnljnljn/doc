// 题目：0,1,2,3...n-1这n个数字组成一个圆圈，从0开始，从圆圈里删除第m个数字，求这个圆圈里剩下的最后一个数字

// 经过证明要得到n个数字的序列剩下的那一个数字，
// 只需要得到n - 1个数字中最后剩下的那个数字，并以此类推
// 当n = 1时，很显然剩下的最后一个数字为0
function LastRemaining_Solution(n, m)
{
    // write code here
    if(n < 1 || m < 1) return -1;
    var last = 0;
    for(var i = 2; i<= n; i++) {
        last = (last + m) % i;
    }
    return last
}