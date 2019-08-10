/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(!s.length) return true;
    let map = new Map();
    let resArr = [];
    map.set('(', 1)
       .set(')', -1)
       .set('{', 2)
       .set('}', -2)
       .set('[', 3)
       .set(']', -3);

       console.log(map)
    for(let i = 0; i < s.length; i++) {
        if (!resArr.length) {
           resArr.push(s[i]); 
        }else {
            if(map.get(resArr[resArr.length - 1]) + map.get(s[i]) === 0) {
                resArr.pop()
            }else {
                resArr.push(s[i])
            }
        }
        console.log(resArr)
    }
    // console.log(map.get(resArr[1]))
    return resArr.length === 0
};
console.log(isValid("{[]}"))