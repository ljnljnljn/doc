// 大家都知道斐波那契数列，现在要求输入一个整数n，
// 请你输出斐波那契数列的第n项（从0开始，第0项为0）。 n<=39

function Fibonacci(n)
{
    // write code here
    if (n == 1 || n == 0) {
        return n;
    }

    // 做一个缓存
    let first = 0,
        second = 1,
        res = 0
    for(let i = 2; i <= n; i++) {
        res = first + second
        first = second
        second = res
    }
    return second
}