/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function(s, d) {
    let count = []
    if(d.length<= 0 || s.length <= 0) {
        return ""
    }
    d.sort()
    for(let i = 0; i < d.length; i++) {
        let tempArr = d[i].split(''),
            idxArr = []
        tempArr.reduce((prev, current) => {
            idxArr.push(prev)
            return s.indexOf(current,prev) 
        }, 0) 
        if(idxArr.indexOf(-1) === -1) {
            count.push(idxArr.length)
        }else {
            count.push(0)
        }
    }
    let max = Math.max(...count)
    if(max !== 0) {
        let idx = count.indexOf(max)
        return d[idx]
    }else {
        return ''
    }
}
console.log(findLongestWord('bab', ["ba","ab","a", "b"]))