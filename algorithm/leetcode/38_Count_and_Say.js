/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n <= 0) return null;
    let s = '1';
    for(let i = 1; i < n; i++) {
        let count = 1;   
        let res = '';
        let len = s.length;
        for(let j = 0; j < len; j++) {
            if(j < len - 1 && s[j] === s[j + 1]) {
                count++
            }else {
                res += count + '' + s[j]
                count = 1
            }
        }
        s = res
    }
    return s
};