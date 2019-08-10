// 题目： 统计一个数字在排序数组中出现的次数。

function GetNumberOfK(data, k)
{
    // write code here
    return data.reduce((count, a) => {
        return a == k ? count+1: count
    },0)
}

// 通过JavaScript的reduce方法来对数组进行遍历，相对暴力的解法



