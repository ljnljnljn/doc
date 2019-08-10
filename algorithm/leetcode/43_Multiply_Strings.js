/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    let m = num1.length;
    let n = num2.length;
    let temp = [];
    temp[0] = 0
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if(!temp[i + j + 1]) temp[i + j + 1] = 0
            temp[i + j + 1] += (num1[i] * num2[j]);
        }
    }
    let len = temp.length - 1
    if(len === 0) return temp[0] + ''
    let carray = 0;
    for(let i = len; i >= 0; i--) {
        temp[i] = temp[i] + carray;
        carray = (temp[i] / 10) | 0
        temp[i] %= 10
    }
    let index = temp.findIndex((item) => {
        return item !== 0
    })
    if(index < 0) return '0'
    else return temp.slice(index).join('')
};
console.log(multiply('9', '99'))