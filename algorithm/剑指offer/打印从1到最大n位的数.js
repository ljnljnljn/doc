// 题目： 输入数字n，按照顺序打印出从1到最大的n位十进制数。

//暴力解法 容易溢出
function PrintToMax(n) {
    var number = 1;
    var i = 0
    while(i < n) {
        number *= 10;
        i++
    }
    for(var i = 1; i < number; i++) {
        console.log(i)  
    }
    // console.log(number)  
}
PrintToMax(4)