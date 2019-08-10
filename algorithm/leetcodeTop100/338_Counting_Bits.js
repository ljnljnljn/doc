/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    let res = []
    for(let i = 0; i <= num; i++) {
        res.push(findBit(i))
    }
    return res
};

function findBit(num) {
    let count = 0
        flag = 1;
    while(flag !== 0) {
        if((num & flag) !== 0) {
            count++
        }
        flag = flag << 1
    }
    return count
}

console.log(countBits(5))