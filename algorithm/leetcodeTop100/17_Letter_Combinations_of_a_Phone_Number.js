/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let dict = { 
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8":"tuv",
        "9":"wxyz"
    };
    let res = []
        len = digits.length
    if(len <= 0) return []
    dfs(0, [])
    function dfs(curIdx, temp) {
        if(curIdx === len) {
            res.push(temp.join(''))
            return 
        }
        for(let i = 0; i < dict[digits[curIdx]].length; i++) {
            temp.push(dict[digits[curIdx]][i])
            dfs(curIdx + 1, temp)
            temp.pop()
        }
    }
    return res
}
console.log(letterCombinations('23'))