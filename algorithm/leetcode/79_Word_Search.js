/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    if(board.length <= 0) return false;
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            let isExited = dfs(board, i, j, 0, word);
            if(isExited) return true
        }
    }
    return false
};

function dfs(board, i, j, index, word) {
    if(index >= word.length) return true;
    if(i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] !== word[index]) {
        return false
    }
    let temp = board[i][j];
    board[i][j] = true
    let res = dfs(board, i - 1, j, index + 1, word) || dfs(board, i + 1, j, index + 1, word)||dfs(board, i, j - 1, index + 1, word)||dfs(board, i, j + 1, index + 1, word);
    board[i][j] = temp
    return res
}

console.log(exist([['a', 'b']], 'ba'))