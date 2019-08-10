/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    return Math.floor(Math.sqrt(x))
};

// 1. 二分搜索
// 对于一个非负数n，它的平方根不会小于大于（n/2+1）。
// 在[0, n/2+1]这个范围内可以进行二分搜索，求出n的平方根。

var mySqrt1 = function(x) {
    let i = 0, j = x / 2 + 1;
    while(i <= j) {
        let mid = i + Math.floor((j - i) / 2);
        let sq = mid * mid;
        if(sq === x) return mid;
        else if(sq < x) i = mid + 1;
        else j = mid - 1
    }
    return j
}

// 计算x2 = n的解，令f(x)=x2-n，相当于求解f(x)=0的解

// 首先取x0，如果x0不是解，做一个经过(x0,f(x0))这个点的切线，与x轴的交点为x1。

// 同样的道理，如果x1不是解，做一个经过(x1,f(x1))这个点的切线，与x轴的交点为x2。
// 以此类推。

// 以这样的方式得到的xi会无限趋近于f(x)=0的解。

// 判断xi是否是f(x)=0的解有两种方法：

// 一是直接计算f(xi)的值判断是否为0，二是判断前后两个解xi和xi-1是否无限接近。