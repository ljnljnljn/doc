function findStr(a, b) {
    let len1 = a.length
    let len2 = b.length
    let dp = []
    let res = 0

    for(let i = 0; i <= len1; i++) {
        dp[i] = []
        for(let j = 0; j <= len2; j++) {
            if(i === 0 || j === 0) {
                dp[i][j] = 0
            }else if(a[i -1] === b[j - 1]){
                dp[i][j] = dp[i - 1][j - 1] + 1
                res = Math.max(dp[i][j], res)
            }
        }
    }
    return res
}

let a = 'acdefgl'
let b = 'xyzabcd'

console.log(findStr(a, b))