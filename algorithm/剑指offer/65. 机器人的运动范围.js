// 地上有一个m行和n列的方格。一个机器人从坐标0,0的格子开始移动，
// 每一次只能向左，右，上，下四个方向移动一格，但是不能进入行坐标和列坐标的数位之和大于k的格子。 
// 例如，当k为18时，机器人能够进入方格（35,37），因为3+5+3+7 = 18。
// 但是，它不能进入方格（35,38），因为3+5+3+8 = 19。请问该机器人能够达到多少个格子？

// 可以采用回溯法来做
function movingCount(threshold, rows, cols){
    var visited = []
    for(let i = 0; i < rows * cols; i++) {
        visited[i] = false
    }
    var count = getCount(0, 0)
    visited.length = 0
    return count


    function getCount(row, col) {
        var count = 0
        if(check(row, col)) {
            visited[row * cols + col] = true
            count = 1 + getCount(row + 1, col) 
                      + getCount(row, col + 1)
                      + getCount(row - 1, col)
                      + getCount(row, col - 1)
        }
        return count
    }

    function getNumber(num) {
        let sum = 0
        while(num > 0) {
            sum += num % 10
            num = Math.floor(num / 10)
        }
        return sum
    }

    function check(row, col) {
        if(row >= 0 && row < rows && col >= 0 && col < cols
           && getNumber(row) + getNumber(col) <= threshold && !visited[row * cols + col]) {
               return true
           }else {
               return false
           }
    }
}
console.log(movingCount(5,10,10))