// 题目： 输入一个递增排序的数组和一个数字S，在数组中查找两个数，使得他们的和正好是S，
// 如果有多对数字的和等于S，输出两个数的乘积最小的

// 本题由于数组是排序的，可以用两个指针来扫描一次数组得到结果
function FindNumbersWithSum(array, sum)
{
    // write code here
    if(array.length < 2) return []
    let small = 0
    let big = array.length - 1
    let res = [], compare = []
    while(small < big) {
        let currSum = array[small] + array[big]
        if(currSum === sum) {
            res.push([array[small], array[big]])
            compare.push(array[small] * array[big])
            small++
            big--
        }else if(currSum > sum) {
            big--
        }else {
            small++
        }
    }
    if(res.length <= 0) return []
    let min = Math.min.apply(null, compare)
    let index = compare.indexOf(min)
    return res[index]
}


var arr = [1, 2, 4, 7, 11, 15];
console.log(findNumbersWithSum(arr, 15))