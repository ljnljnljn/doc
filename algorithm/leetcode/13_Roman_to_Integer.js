/**
 * @param {string} s
 * @return {number}
 */

// 从后往前扫，如果当前的数大于之前的数，加上这个数，反之减去当前的数。
var romanToInt = function(s) {
    var map = new Map();
    map.set('I',1)
       .set('V',5)
       .set('X',10)
       .set('L',50)
       .set('C',100)
       .set('D',500)
       .set('M',1000);
    var res = 0, len = s.length;
    for(var i = len - 1; i >= 0; i--) {
        if(!res) {
            res = map.get(s[i]);
            console.log(i)
            continue;
        }
        if(map.get(s[i]) >= map.get(s[i + 1])) {
            res += map.get(s[i]);
        }else {
            res -= map.get(s[i]);
        }
    }
    return res
};
console.log(romanToInt("MCMXCIV"))