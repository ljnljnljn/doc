/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[\W]/g, '')
    s = s.toLowerCase()
    let reverse = s.split('').reverse().join('')
    return reverse === s
};
isPalindrome("A man, a plan, a canal: Panama")