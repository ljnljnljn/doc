// 题目：在一个字符串(0<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,
// 并返回它的位置, 如果没有则返回 -1（需要区分大小写）

//通过map数据结构暴力解法
function FirstNotRepeatingChar(str)
{
    // write code here
    let map = new Map()
    for(let i = 0; i < str.length; i++) {
        if(map.get(str[i])) {
            index = map.get(str[i]) + 1
            map.set(str[i], index)
        }else {
            map.set(str[i], 1)
        }
    }
    for(let i = 0; i < str.length; i++) {
        if(map.get(str[i]) === 1) {
            return i
        }
    }
    return -1
}