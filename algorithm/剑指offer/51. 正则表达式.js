/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    if(s === '' && p === '') return true;
    if(!p || p.length === 0) return false;
    var reg = new RegExp('^' + p + '$');
    return reg.test(s)
};
