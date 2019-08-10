// 题目：我们把只包含因子 2、3 和 5 的数称作丑数（Ugly Number）。
// 求从小到大的顺序的第 n 个丑数。 


// 时间复杂度过高
function GetUglyNumber_Solution(index)
{
    // write code here
    if(index < 0) return;
    var number = 0;
    var ugly = 0;
    while(ugly < index) {
        number++;
        if(isUgly(number)) {
            ugly++
        }
    }
    return number
}

function isUgly(n) {
    while(n % 2 == 0) n = n/2;
    while(n % 3 == 0) n = n/3;
    while(n % 5 == 0) n = n/5;
    return n == 1
}


// 使得时间复杂度为O(n)
function GetUglyNumber_Solution2(index) {
    if(index === 0) return 0;
    let uglyArr = [1];
    let factor1 = 0, factor2 = 0, factor3 = 0;
    for(let i = 1; i < index; i++) {
        uglyArr[i] = Math.min(uglyArr[factor1] * 2, uglyArr[factor2] * 3, uglyArr[factor3] * 5);
        if(uglyArr[i] === uglyArr[factor1] * 2) factor1++;
        if(uglyArr[i] === uglyArr[factor2] * 3) factor2++
        if(uglyArr[i] === uglyArr[factor3] * 5) factor3++
    }
    return uglyArr[index - 1]
}