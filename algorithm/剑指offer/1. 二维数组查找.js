// 题目： 在一个二维数组中（每个一维数组的长度相同），
// 每一行都按照从左到右递增的顺序排序，
// 每一列都按照从上到下递增的顺序排序。请完成一个函数，
// 输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

// 采用二分查找
function Find(target, array)
{
    // write code here
    for(let item of array) {
        let start = 0;
        let end = item.length - 1;
        while(start <= end) {
            let mid = Math.floor((start+end)/2);
            if(target < item[mid]) {
                end = mid - 1
            } else if (target > item[mid]) {
                start = mid + 1
            } else {
                return true
            }
        }
    }
    return false
}