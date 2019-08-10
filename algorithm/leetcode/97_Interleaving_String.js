/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
// 栈溢出
var isInterleave = function(s1, s2, s3) {
    let len1 = s1.length, len2 = s2.length, len3 = s3.length;
    if(len1 + len2 !== len3) return false;
    let a = 0, b = 0;
    for(let i = 0; i < len3; i++) {    
        let res = false;
        if(a < len1 && s1[a] === s3[i] && b < len2 && s2[b] === s3[i]) {
            // console.log(123, i, a, b, s1.substr(2), s2.substr(1))
            return isInterleave(s1.substr(a), s2.substr(b + 1), s3.substr(i + 1)) ||
                   isInterleave(s1.substr(a + 1), s2.substr(b), s3.substr(i + 1)) 
        }
        if(a < len1 && s1[a] === s3[i]) {
            res = true;
            a++;
            continue;
        }
        if(b < len2 && s2[b] === s3[i]) {
            res = true;
            b++;
            continue;
        }
        if(!res) return false
    }
    
    return true
};

console.log(isInterleave("aabcc", "dbbca", "aadbbcbcac"))