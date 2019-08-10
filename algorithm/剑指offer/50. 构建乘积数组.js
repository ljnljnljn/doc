// 题目：给定一个数组A[0,1,...,n-1],
// 请构建一个数组B[0,1,...,n-1],
// 其中B中的元素B[i]=A[0]*A[1]*...*A[i-1]*A[i+1]*...*A[n-1]。
// 不能使用除法。

function multiply(array)
{
    // write code here
    var len = array.length;
    if(len <= 1) return;
    var res = [];
    res[0] = 1;
    for(var i =1; i < len; i++) {
        res[i] = res[i - 1] * array[i - 1];
    }
    var temp = 1;
    for(var j = len - 2; j>= 0; j--) {
        temp *= array[j + 1];
        res[j] *= temp; 
    }
    return res
}
console.log(multiply([1,2,3,4,5,6]))