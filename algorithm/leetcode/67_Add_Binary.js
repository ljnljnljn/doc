/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    a = a.split('').reverse();
    b = b.split('').reverse();
    let res = [], add = 0;
    for(let i = 0; i < Math.max(a.length, b.length); i++) {
        let sum = (a[i] === undefined ? 0 : Number(a[i])) + (b[i] === undefined ? 0 : Number(b[i])) + add
        res[i] = sum & 1;
        if(sum >= 2) {
            add = 1;
        }else {
            add = 0
        }
    }
    if(add) {
        res.push(add)
    }
    return res.reverse().join('')
};