const MAX_NUM = 8;
let chessBoard;


function Queen() {
    for(let i = 0; i< MAX_NUM; i++) {
        for(let j = 0; j < MAX_NUM; j++) {
            chessBoard[i][j] = 0;
        }
    }
    settleQueen(0)

}
function check(x, y) {
    for(let i = 0; i < y; i++) {
        // 检查纵向
        if(chessBoard[x][i] === 1) return false;
        if(chessBoard[x - 1 - i][y - 1 - i] === 1 && x - 1 - i >= 0) return false;
        if(chessBoard[x + 1 + i][y - 1 - i] && x + 1 + i < MAX_NUM) return false;
    }
    return true
}

function settleQueen(y) {
    if(y === MAX_NUM) return true;
    for(let i = 0; i < MAX_NUM; i++) {
        for(let x = 0; x < MAX_NUM; i++) {
            chessBoard[x][y] = 0
        }
        if(check(i, y)) {
            chessBoard[i][y] = 1
            if(settleQueen(y + 1)) return true
        }
    }
    return false
}