var maxArea = function(height) {
    let len = height.length
    if(len <=0 ) return 0
    let start = 0, end = len - 1
    let res = 0
    while(start < end) {
        let pivot = Math.min(height[start], height[end])
        res = Math.max(res, pivot * (end-start))
        if(height[start] > height[end]) {
            end--
        }else {
            start++
        }
    }
    return res
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]))