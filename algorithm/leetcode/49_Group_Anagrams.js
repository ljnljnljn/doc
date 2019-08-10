/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let res = [];
    let has = {};
    strs.forEach((item) => {
        let str = item.split('').sort().join('');
        if(!has[str]) {
            has[str] = true;
            res.push([item])
        }else {
            res[has[str]].push(item)
        }
    })
    return res
};