/**
 * @param {number[]} height
 * @return {number}
 */
// 遍历两次数组的动态规划
var trap = function(height) {
    let res = 0;
    let len = height.length;
    for(let i = 1; i < len; i++) {
        let max_left = 0, max_right = 0;
        for(let j = i; j >= 0; j--) {
            max_left = Math.max(max_left, height[j])
        }
        for(let j = i; j < len; j++) {
            max_right = Math.max(max_right, height[j])
        }
        res += Math.min(max_left, max_right) - height[i]
    }
    return res
};

// 遍历一次的动态规划
var DPtrap = function(height) {
    let res = 0;
    let right = height.length - 1, left = 0;
    while(left < right) {
        let min = Math.min(height[left], height[right]);
        if(min === height[left]) {
            left++
            while(left < right && min > height[left]) {
                res += min - height[left++]
            }
        }else {
            right--
            while(left < right && min > height[right]) {
                res += min - height[right--]
            } 
        }
    }
    return res
}


var forceTrap = function(height) {
    let len = height.length
    let left = 0, right = len - 1, res = 0
    let lth = 0, rth = 0
    while(left < right) {
        if(height[left] < height[right]) {
            if(lth <= height[left]) {
                lth = height[left]
            }else {
                res += lth - height[left]
            }
            left++
        }else {
            if(rth <= height[right]) {
                rth = height[right]
            }else {
                res += rth - height[right]
            }
            right--
        }
    }
    return res
}

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))
console.log(forceTrap([0,1,0,2,1,0,1,3,2,1,2,1]))