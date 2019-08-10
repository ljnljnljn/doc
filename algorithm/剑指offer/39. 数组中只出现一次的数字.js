// 题目：一个整型数组里除了两个数字之外，其他的数字都出现了偶数次。
// 请写程序找出这两个只出现一次的数字。

//使用暴力解法

function FindNumsAppearOnce(array)
{
    // write code here
    // return list, 比如[a,b]，其中ab是出现一次的两个数字
    var res = [];
    for(var i = 0; i < array.length; i++) {
        if(array.indexOf(array[i]) == array.lastIndexOf(array[i])) {
            res.push(array[i])
        }
    }
    return res
}


// 假如数组中只有一个的数字只出现了一次，其他数字都出现了两次，
// 么由于任何一个数字和自己异或都为0，则直接从头到尾异或就可以
// 本题有两个数字，则想办法将两个数字分成两个数组
// 所以根据异或的结果1所在的最低位，把数字分成两半，每一半里都还有只出现一次的数据和成对出现的数据
console.log(1 << 2)

function FindNumsAppearOnce(array,num1, num2) {
    if(array.length < 2) {
        return 
    }
    var num = 0
    for(var i = 0; i < array.length; i++) {
        num ^= array[i]
    }

    var count = 0;
    for(; count < array.length; count++) {
        if((num & 1<< count) !== 0) {
            break;
        }
    }
    num1 = 0; num2 = 0;
    for(var i = 0; i < array.length; i++) {
        if(array[i] & 1 << count) {
            num1 ^= array[i]
        }else {
            num2 ^= array[i]
        }
    }
}