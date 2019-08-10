/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1) return s;
    var str = '';
    var size = 2 * numRows - 2;
    for(var i = 0; i < numRows; i++) {
        for(var j = i; j < s.length; j += size) {
            str += s[j];
            var temp = j + size - 2 * i;
            if(i !== 0 && i < numRows - 1 && temp < s.length) str += s[temp];
        }
    }
    return str
};