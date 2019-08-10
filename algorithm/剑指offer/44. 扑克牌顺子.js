// 题目：
// LL今天心情特别好,因为他去买了一副扑克牌,
// 发现里面居然有2个大王,2个小王(一副牌原本是54张^_^)...
// 他随机从中抽出了5张牌,想测测自己的手气,看看能不能抽到顺子,
// 如果抽到的话,他决定去买体育彩票,
// 嘿嘿！！“红心A,黑桃3,小王,大王,方片5”,“Oh My God!”不是顺子.....
// LL不高兴了,他想了想,决定大\小 王可以看成任何数字,并且A看作1,J为11,Q为12,K为13。
// 上面的5张牌就可以变成“1,2,3,4,5”(大小王分别看作2和4),“So Lucky!”。
// LL决定去买体育彩票啦。 
// 现在,要求你使用这幅牌模拟上面的过程,然后告诉我们LL的运气如何， 
// 如果牌能组成顺子就输出true，否则就输出false。
// 为了方便起见,你可以认为大小王是0。







// 一个大问题被分解成多个小问题：
// 1，对数组进行排序；
// 2，判断除 0 之外的数字有无重复
// 3，判断 是否有足够的 0 来填补数字的空缺

function IsContinuous(numbers)
{
    // write code here
    if(numbers.length < 5) return false;
    numbers.sort((a, b) => {
        return a-b
    });
    var count1 = 0;
    var count2 = 0
    for(var i = 0; i < numbers.length; i++) {
        if(numbers[i] === 0) {
            count1++
        }
    }
    var subarr = numbers.slice(count1);
    if([...new Set(subarr)].length < subarr.length) {
        return false
    }else {
        for(var i = 0; i < subarr.length - 1; i++) {
            count2 += subarr[i + 1] - subarr[i] - 1
        }
        return count2 <= count1
    }
    
}
var arr = [1,3,2,5,4]
console.log(IsContinuous(arr));