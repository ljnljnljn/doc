/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let len = height.length
    if(len <= 0 ) return 0
    let res = 0
        left = 0
        right = len - 1
        lth = 0 
        rth = 0
    while(left < right) {
        if(height[left] < height[right]) {
            if(lth < height[left]) {
                lth = height[left]
            }else {
                res += (lth - height[left])
            }
            left++
        }else {
            if(rth < height[right]) {
                rth = height[right]
            }else {
                res += (rth - height[right])
            }
            right--
        }
    }
    return res
}

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))