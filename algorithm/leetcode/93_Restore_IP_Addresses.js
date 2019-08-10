/**
 * @param {string} s
 * @return {string[]}
 */
var res, ans;
var restoreIpAddresses = function(s) {
    res = [], ans = []
    dfs('', 0, 0, s)
    return res
};

function dfs(str, index, arrIndex, s) {
    if(Number(str) > 255) {
        return
    }
    if(arrIndex === 4) {
        return
    }
    if(index === s.length) {
        if(check(str) && arrIndex === 3) {
            ans[arrIndex] = str
            res.push(ans[0] + '.' + ans[1] + '.' + ans[2] + '.' + ans[3])
        }
        return
    }
    dfs(str + s[index], index + 1, arrIndex, s);
    if(check(str)) {
        ans[arrIndex] = str
        dfs(s[index], index + 1, arrIndex + 1, s)
    }
}

function check(str) {
    if(Number(str) > 255) return false;
    if(!str.length) return false;
    if(Number(str).toString().length != str.length) return false;
    return true
}