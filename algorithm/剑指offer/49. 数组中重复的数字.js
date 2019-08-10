// 题目：在一个长度为n的数组里的所有数字都在0到n-1的范围内。 
// 数组中某些数字是重复的，但不知道有几个数字是重复的。
// 也不知道每个数字重复几次。请找出数组中任意一个重复的数字。 
// 例如，如果输入长度为7的数组{2,3,1,0,2,5,3}，那么对应的输出是第一个重复的数字2。

function duplicate(numbers, duplication)
{
    // write code here
    //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
    //函数返回True/False
    if(numbers.length < 1) return false;
    var set = new Set();
    for(var i = 0; i < numbers.length; i++) {
        if(set.has(numbers[i])) {
            duplication[0] = numbers[i];
            return true
        }else{
            set.add(numbers[i])
        }
    }
    return false
}

// 要求时间复杂度 O(N)，空间复杂度 O(1)
function duplicate(numbers, duplication) {
    if(numbers.length <= 0) {
        return false
    }
    for(let i = 0; i < numbers.length; i++) {
        while(numbers[i] !== i) {
            if(numbers[i] === numbers[numbers[i]]) {
                duplication[0] = numbers[i]
                return true
            }
            swap(numbers, i, numbers[i])
        }
    }
    return false
}
function swap(nums, i, j) {
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
}

duplicate([1,2,3,4,5,6,1],[])