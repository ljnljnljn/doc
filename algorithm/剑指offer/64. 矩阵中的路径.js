// 题目： 请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。
// 路径可以从矩阵中的任意一个格子开始，每一步可以在矩阵中向左，向右，向上，向下移动一个格子。
// 如果一条路径经过了矩阵中的某一个格子，则之后不能再次进入这个格子。 
// 例如 a b c e s f c s a d e e 这样的3 X 4 矩阵中包含一条字符串"bcced"的路径，
// 但是矩阵中不包含"abcb"路径，因为字符串的第一个字符b占据了矩阵中的第一行第二个格子之后，
// 路径不能再次进入该格子。


// 采用回溯法
function hasPath(matrix, rows, cols, path)
{
    // write code here
    if(matrix === null || rows < 1 || cols < 1 || path.length < 1) {
        return null
    }
    let flag = []
    for(let i = 0; i < rows * cols; i++) {
        flag[i] = false
    }
    let len = 0
    for(let i = 0; i < rows.length; i++) {
        for(let j = 0; j < cols.length; j++) {
            if(isPath(matrix,len, i, j, flag,path)) {
                return true
            }
        }
    }
    return false;
}
function isPath(matrix,len, i, j, flag,path) {
    if(path.length === len) {
        return true
    }

    let has = false
    if(i>=0 && i<rows && 
        j>=0 && j<cols && 
        matrix[i*cols+j] === path[len] && 
        !flag[i*cols+j]) {
            len++
            flag[i*cols + j] = true
            has = isPath(matrix,len, i - 1, j, flag,path) ||
                  isPath(matrix,len, i + 1, j, flag,path) ||
                  isPath(matrix,len, i, j - 1, flag,path) ||
                  isPath(matrix,len, i, j + 1, flag,path)
            if (!has) {
                len--
                flag[i*cols + j] = false
            }
        }
        return false
}
