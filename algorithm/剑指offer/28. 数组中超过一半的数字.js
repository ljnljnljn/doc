// 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
// 例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。由于数字2在数组中出现了5次，
// 超过数组长度的一半，因此输出2。如果不存在则输出0。


// 暴力解法
function MoreThanHalfNum_Solution(numbers)
{
    // write code here
    var obj = {};
    for(var i = 0; i  < numbers.length; i++) {
        if(obj[numbers[i]]) {
            obj[numbers[i]]++
        }else {
            obj[numbers[i]] = 1;
        }
    }
    for(var i in obj) {
        if(obj[i] > Math.floor(numbers.length / 2)) {
            return i
        }
    }
    return 0
}

// 解法二、利用数组特点找出 O(N) 的算法：

// 题目中要找的数字出现的次数超过数组长度的一半，也就是说它出现的次数比其他所有数字出现的次数的和还要多。

// 因此我们可以考虑在遍历数组的时候保存两个值：一个是数组中的一个数字，一个是次数。

// 当我们遍历到下一个数字的时候，

// 如果下一个数字和当前我们保存的数字相同，则次数加 1；

// 如果和当前我们保存的数字不同，则次数减 1；

// 当次数减到 0 的时候，我们将保存的数字改为当前遍历所处的位置，并将次数更改为 1。

function MoreThanHalfNum_Solution(numbers) {
    let res = numbers[0],
        count = 1
    for(let i = 1; i < numbers.length; i++) {
        if(numbers[i] === res) {
            count++
        }else if(count === 0) {
            res = numbers[i]
            count = 1
        }else {
            count--
        }
    }
    // 验证
    count = 0
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] === res) count++
    }
    if(count * 2 > n) {
        return res
    }else {
        return 0
    }
}