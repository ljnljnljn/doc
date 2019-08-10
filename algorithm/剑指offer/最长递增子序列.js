function findSubStr(arr) {
    let len = arr.length,
        dp = [],
        res = 0
    dp[0] = 1
    for(let i = 1; i < len; i++) {
        dp[i] = 1
        for(let j = 0; j < i; j++) {
            if(arr[j] < arr[i]) {
                dp[i] = Math.max(dp[j] + 1, dp[i] )
            }
        }
        res = Math.max(dp[i], res)
    }
    return res
}