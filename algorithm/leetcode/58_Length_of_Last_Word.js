/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim();
    let str = s.replace(/\s/g, '');
    if(!str.length) return 0
    for(let i = s.length; ;i--) {
        if(s[i] === ' ') return s.length - i - 1
        if(i === 0) return s.length
    }
};


let str = '  hello world   '
console.log(str.trim().replace(/\s/g, ''))