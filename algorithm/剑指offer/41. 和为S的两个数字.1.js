// 题目： 输入一个递增排序的数组和一个数字S，在数组中查找两个数，使得他们的和正好是S，
// 如果有多对数字的和等于S，输出两个数的乘积最小的

// 本题由于数组是排序的，可以用两个指针来扫描一次数组得到结果
function getCount(x, y) {
    if(2 * x < y || y < 0) {
        return 0
    }
    let count = 0
    let small = 1  
    let big = x
    while(small < big) {
        let curSum = small + big
        if(curSum === y) {
            count++
            small++
            big
        }else if(curSum > y) {
            big--
        }else {
            small++
        }
    }
    return count
}


console.log(getCount(4, 10))