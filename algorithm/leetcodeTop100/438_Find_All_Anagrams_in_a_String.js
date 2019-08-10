/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let res = []
    let str = p.split('').sort().join('')
    let len = str.length
    for(let i = 0; i < s.length; i++) {
        let substr = s.substr(i, len)
        if(substr.split('').sort().join('') === str) {
            res.push(i)
        }
    }
    return res
};


let str = 'abcdefg'
let sub = str.substr(5,3)
console.log(sub)
console.log(findAnagrams("abab", "ab"))