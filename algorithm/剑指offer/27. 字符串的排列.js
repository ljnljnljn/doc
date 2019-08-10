// 题目： 输入一个字符串,按字典序打印出该字符串中字符的所有排列。
// 例如输入字符串abc,则打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。

// function Permutation(str)
// {
//     // write code here
//     var result = [];
//     if(str.length <= 1) {
//         result.push(str)
//         return result;
//     }else {
//         var one = str.slice(0, 1);
//         var last = str.slice(1);
//         var lastRes = Permutation(last);
//         for(var i = 0; i < lastRes.length; i++) {
//             for(var j = 0; j < lastRes[i].length; j++) {
//                 result.push(lastRes[i].slice(0, j) + one + lastRes[i].slice(j));
//             }
//         }
//     }
//     return result
// }


function Permutation(str){
    if(!str || str.length === 0){
        return [];
    } 
    let res = []
    let arr = str.split('')
    let temp  = ''
    ordering(arr)
    res = res.filter(function(item, index) {
        return res.indexOf(item) === index
    })
    return res
    function ordering(tempArr) {
        if(tempArr.length === 0) {
            res.push(temp)
            return
        }
        for(let i = 0; i < tempArr.length; i++) {
            temp += tempArr[i]
            let copyArr = [...tempArr]
            copyArr.splice(i, 1)
            ordering(copyArr)
            temp = temp.substring(0, temp.length - 1)
        }
    }
}


function Permutation3(nums) {
    let res = [], ans = [], has = [], len = nums.length;
    dfs(0, nums);
    return res
    function dfs(count, nums) {
        if(count === len) {
            let temp = ans.map(item => item)
            res.push(temp)
        }

        for(let i = 0; i < len; i++) {
            if(has[i]) continue;
            has[i] = true;
            ans.push(nums[i]);
            dfs(count + 1, nums);
            has[i] = false;
            ans.pop()
        }
    }
}

console.log(Permutation('abc'))