// 使用es6中数组新增filter方法
function reOrderArray(array)
{
    // write code here
    var odd_arr = array.filter(function(item) {
        return (item % 2) !== 0
    });
    
    var even_arr = array.filter(function(item) {
        return (item % 2) == 0
    })
    
    return odd_arr.concat(even_arr)
}