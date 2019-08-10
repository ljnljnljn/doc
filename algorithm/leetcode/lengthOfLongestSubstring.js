/**
 * @param {string} s
 * @return {number}
 */
// 时间复杂度过高
var lengthOfLongestSubstring = function(s) {
    if(s.length < 1) return 0;
    var res = 0;
    for(var i = 0; i < s.length; i++) {
        for(var j = i + 1; j <= s.length; j++) {
            if(isCommon(s, i, j)) {
                res = Math.max(res, j - i);
            }
        }
    }
    return res
};

function isCommon(s, i ,j) {
    var str = s.slice(i, j);
    var arr = str.split('')
    var set = new Set(arr);
    // console.log(set.size)
    return set.size === str.length
}

// console.log(lengthOfLongestSubstring('abcabcbb'),'qweqwe')



var lengthOfLongestSubstring1 = function(s) {
    var n = s.length, ans = 0;
    var map = new Map(); // current index of character
    // try to extend the range [i, j]
    for (var j = 0, i = 0; j < n; j++) {
        if (map.has(s[j])) {
            i = Math.max(map.get(s[j]), i);
        }
        ans = Math.max(ans, j - i + 1);
        map.set(s.charAt(j), j + 1);
    }
    return ans;
}

console.log(lengthOfLongestSubstring1('dvdf'),'qweqwe')