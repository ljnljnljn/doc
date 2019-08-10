var twoSum = function(nums, target) {
    let res = []
    let map = new Map()
    for(let i = 0; i < nums.length; i++) {
        let curTarget = target - nums[i]
        if(map.has(curTarget)) {
            res.push(map.get(curTarget) - 1, i)
        }else {
            map.set(nums[i], i + 1)
        }
    }
    return res
}
console.log(twoSum([2, 7, 11, 15], 9))