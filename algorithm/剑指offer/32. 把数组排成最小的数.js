// 输入一个正整数数组，把数组里所有数字拼接起来排成一个数，
// 打印能拼接出的所有数字中最小的一个。例如输入数组{3，32，321}，
// 则打印出这三个数字能排成的最小数字为321323。
function PrintMinNumber(numbers)
{
    // write code here
    numbers.sort(comp);
    var res = numbers.join('')
    return res
}

function comp(a,b) {
    var str1 = a + "" + b;
    var str2 = b + "" + a;
    if(parseInt(str1) > parseInt(str2)) {
        return 1;
    }else if(parseInt(str1) < parseInt(str2)) {
        return -1
    }else {
        return 1
    }
}