/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs || strs.length === 0) return '';
    for(var i = 0; i < strs[0].length; i++) {
        var str = strs[0][i];
        for(var j = 1; j < strs.length; j++) {
            if(strs[j][i] != str || i == strs[j].length) {
                return strs[0].substr(0, i)
            }
        }
    }
    return strs[0]
};
var strs = ["flower","flow","flight"]
console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(strs.sort())