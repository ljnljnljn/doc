/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let set = new Set([...J])
    let res = 0
    for(let i = 0; i < S.length; i++) {
        if(set.has(S[i])) {
            res++
        }
    }
    return res
};

console.log(numJewelsInStones('aA', 'aAAbbbb'))