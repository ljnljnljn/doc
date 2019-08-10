/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let res = [];
    let str = '';
    for(item of path) {
        if(item === '/') {
            if(str === '' || str === '.') {

            }else if(str === '..') {
                if(res.length) {
                    res.pop()
                }
            }else {
                res.push(str)
            }
            str = ''
        }else {
            str += item
        }
    }
    if(str && str !== '..' && str !== '.') {
        res.push(str)
    }else if(str == '..' && res.length) {
        res.pop()
    }
    return '/' + res.join('/')
};

console.log(simplifyPath("/.."))