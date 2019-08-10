var longestCommonPrefix = function(strs) {
    if(!str || str.length < 1) return ''
    for(let i = 0; i < str[0].length; i++) {
        let str = strs[0][i]
        for(let j = 1; j < strs.length; j++) {
            if(strs[j][i] !== str || i === strs[j].length) {
                return strs[0].substr(0, i)
            }
        }
        return strs[0]
    }
}