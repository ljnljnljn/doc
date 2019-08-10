/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    if(!s) return
    let len = s.length
    let count = 0
    for(let i = 0;i < len;i++) {
        let tempStr = s[i]
        for(let j = i + 1;j < len;j++) {
            tempStr += s[j]
            if(isPalindromic(tempStr)) {
                count++
            }
        }
    }
    return count + len
};

function isPalindromic(str) {
    let len = str.length
    if(len === 1) return true
    let mid = Math.floor(len / 2)
    if(len % 2 === 0) {
        // console.log(str.substr(0, mid), str.substr(mid + 1).split('').reverse().join('')  )
        return str.substr(0, mid) === str.substr(mid).split('').reverse().join('')       
    }else {
        return str.substr(0, mid)  === str.substr(mid + 1).split('').reverse().join('')
    }
}

console.log(countSubstrings('aaa'))