/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    for(let arr of matrix) {
        let start = 0, end = arr.length - 1;
        while(start <= end) {
            let middle = Math.floor((start + end) / 2);
            if(arr[middle] > target) {
                end = middle - 1;
            }else if(arr[middle] < target) {
                start = middle + 1
            }else {
                return true
            }
        }
    }
    return false
};

let matrix = [
    [1,   3],
  ]
let target = 3

console.log(searchMatrix(matrix, target))