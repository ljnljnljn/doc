function maxAfterCuttin(len) {
    if(len < 2) {
        return 0
    } 
    if(length==2) {
        return 1
    }
	if(length==3) {
        return 2
    }
    let dp = []
    dp[0] = 0
    dp[1] = 1
    dp[2] = 2
    dp[3] = 3
    let res = 0
    for(let i = 4; i <= len; i++) {
        let max = 0
        for(let j = 1; j <= Math.floor(i / 2); j++) {
            max = Math.max(max, dp[j] * dp[i - j])
        }
        dp[i] = max
    }
    res = dp[len]
    return res
}