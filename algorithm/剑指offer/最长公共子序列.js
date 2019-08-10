function findStr(a, b) {
    let len1 = a.length
    let len2 = b.length
    let dp = []
    for(let i = 0; i <= len1; i++) {
        dp[i] = []
        for(let j = 0; j <= len2; j++) {
            if(i === 0 || j === 0) {
                dp[i][j] = 0
            }else if(a[i - 1] === b[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            }else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }
    return dp[len1][len2]
}

let a = [1,3,4,5,6,7,7,8]
let b = [3,5,7,4,8,6,7,8,2]

console.log(findStr(a, b))