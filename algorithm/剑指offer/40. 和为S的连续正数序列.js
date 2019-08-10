// 题目：小明很喜欢数学,有一天他在做数学作业时,要求计算出9~16的和,
// 他马上就写出了正确答案是100。但是他并不满足于此,
// 他在想究竟有多少种连续的正数序列的和为100(至少包括两个数)。
// 没多久,他就得到另一组连续正数和为100的序列:18,19,20,21,22。
// 现在把问题交给你,你能不能也很快的找出所有和为S的连续正数序列? Good Luck! 


// 可以根据两个指针small取1, big取2，若是小于sum，则增大big，让整个序列包含更多的数字，
// 若是大于sum则增大small，让序列减小
// 因为序列至少包含两个数字,可以让samll增加到(sum + 1) / 2

function FindContinuousSequence(sum)
{
    // write code here
    if(sum < 3) return null
    let res = []
    let small = 1
        big = 2
    let current = small + big
    let mid = Math.floor(sum / 2)
    while(small < mid) {
        if(current === sum) {
            pushTarget(small, big)
        }

        while(current > sum && small < mid) {
            current -= small
            small++
            if(current === sum) {
                pushTarget(small, big)
            }
        }
        big++
        current += big
    }
    return res
    function pushTarget(startIdx, endIdx) {
        let temp = []
        for(let i = startIdx; i<= endIdx; i++) {
            temp.push(i)
        }
        res.push(temp)
    } 
};

console.log(FindContinuousSequence(15))

// console.log(arr)


