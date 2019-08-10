/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let len = nums.length
    let arr = nums
    if(len <= 0) return null
    let temp
    while(arr.length) {
        temp = arr.splice(0, 1)[0]
        if(arr.indexOf(temp) > -1) {
            arr.splice(arr.indexOf(temp), 1)
        }else {
            return temp
        }
    }
};
console.log(singleNumber([4,1,2,1,2]))