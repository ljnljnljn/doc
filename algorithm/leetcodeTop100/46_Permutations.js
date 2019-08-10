var permute = function(nums) {
    let res = []
    let curRes = [], has = []
    let len = nums.length

    dfs(nums,0)
    return res
    function dfs(nums) {
        if(curRes.length === len) {
            res.push([...curRes])
        }
        for(let i = 0; i < len; i++) {
            if(has[i]) {
                continue
            }
            has[i] = true
            curRes.push(nums[i])
            dfs(nums)
            has[i] = false
            curRes.pop()
            
        }
    }
}

console.log(permute([1,2,3]))