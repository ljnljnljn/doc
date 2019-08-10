// 题目： 输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。
function NumberOf1(n)
{
    // write code here
    let count = 0
    let flag = 1
    while(flag !== 0) {
        if((flag & n) !== 0) {
            count++
        }
        flag = flag<< 1
    }
    return count
}


function count(n) {
    let count = 0
    let flag = 1
    while(flag!== 0) {
        if((n & flag) !== 0) {
            count++
        }
        flag = flag << 1
    } 
    return count
}