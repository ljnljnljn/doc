/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // rows
    for(let i = 0; i < 9; i++) {
        let temp = [];
        for(let j = 0; j < 9; j++) {
            if(board[i][j] !== '.') {
                temp.push(board[i][j]);
            }
        }
        let flag = check(temp);
        if(!flag) return flag 
    }
    // column
    for(let i = 0; i < 9; i++) {
        let temp = [];
        for(let j = 0; j < 9; j++) {
            if(board[j][i] !== '.') {
                temp.push(board[j][i]);
            }
        }
        let flag = check(temp);
        if(!flag) return flag 
    }
    // 3x3
    for(let i = 0; i <= 6; i += 3) {
        for(let j = 0; j <= 6; j += 3) {
            let temp = [];
            for(let a = i; a < i + 3; a++) {
                for(let b = j; b < j + 3; b++) {
                    if(board[a][b] !== '.') {
                        temp.push(board[a][b]);
                    }
                }
            }
            let flag = check(temp);
            if(!flag) return flag
        }
    }
    return true
};
function check(array) {
    let hash = [];
    for (let i = 0, len = array.length; i < len; i++) {
      if (hash[array[i]]) return false;
      hash[array[i]] = true;
    }  
    return true;
}
  
console.log([[".",".","4",".",".",".","6","3","."],
             [".",".",".",".",".",".",".",".","."],
             ["5",".",".",".",".",".",".","9","."],
             [".",".",".","5","6",".",".",".","."],
             ["4",".","3",".",".",".",".",".","1"],
             [".",".",".","7",".",".",".",".","."],
             [".",".",".","5",".",".",".",".","."],
             [".",".",".",".",".",".",".",".","."],
             [".",".",".",".",".",".",".",".","."]])