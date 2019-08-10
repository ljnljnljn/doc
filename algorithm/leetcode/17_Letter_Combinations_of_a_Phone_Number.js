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
    let len = digits.length;
    let res = []
    if(len <= 0) return res;
    dfs(0, []);
    return res

    function dfs(index, temp) {
        if(temp.length === len) {
            res.push(temp.join(''));
            // console.log(temp)
            return
        }
        for(let i = 0; i < dict[digits[index]].length; i++) {
            temp.push(dict[digits[index]][i]);
            dfs(index + 1, temp);
            temp.pop();
        }
    }
};

console.log(letterCombinations('23'))