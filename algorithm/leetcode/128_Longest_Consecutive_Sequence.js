/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let has = []
    nums.forEach((item) => {
        has[item] = true
    })
    let res = 0
    nums.forEach((item) => {
        if(!has[item + 1]) {
            let temp = 0, idx = item
            while(has[idx]) {
                temp++
                idx--
            }
            res = Math.max(res, temp)
        }
    })
    return res
};


let set = new Set(['1', 'a', 'b']);
set.forEach((value, key) => console.log(key + ' : ' + value))

console.log(NaN == NaN, [NaN].includes(NaN))

console.log([1, 2, [3, [4, 5]]].flat())