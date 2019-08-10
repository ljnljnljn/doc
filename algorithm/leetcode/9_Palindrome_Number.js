/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0 || (x % 10 == 0 && x !== 0)) return false;
    var reverseNum = 0;
    while(x > reverseNum) {
        reverseNum = reverseNum * 10 + x % 10;
        x = parseInt(x / 10);
    }

    return x == reverseNum ||　x == parseInt(reverseNum / 10);
};

console.log(isPalindrome(10))
