/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map()
    let res = []
    for(let item of nums) {
        if(map.has(item)) {
            map.set(item, map.get(item) + 1)
        }else {
            map.set(item, 1)
        }
    }
    let tempArr = [...map]
    tempArr.sort((a, b) => {
        return b[1] - a[1]
    })
    for(let i = 0; i < k; i++) {
        res.push(tempArr[i][0])
    }
    return res
};
console.log(topKFrequent([1,1,1,2,2,3],1))