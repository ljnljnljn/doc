function pack(capacity, weights, values) {
    let len = values.length, T=[];
    for(let i = 0; i <= len; i++) {
        T[i] = []
        for(let j = 0; j <= capacity; j++) {
            if(j === 0) {
                T[i][j] = 0;
                continue;
            }
            if(j < weights[i]) {
                if(i === 0) {
                  T[i][j] = 0  
                }else {
                    T[i][j] = T[i - 1][j]
                }
                continue;
            }
            if(i === 0) {
                T[i][j] = values[i]
            }else {
                T[i][j] = Math.max(values[i] + T[i - 1][j -weights[i]], T[i - 1][j]);
            }
        }
        let res = findValue(T, weights, capacity, len)
        return res
    }
}

function findValue(T, weights, capacity, len){
    let res = {};
    let i = len - 1, j = capacity;
    while(i > 0 && j > 0) {
        if(T[i][j] !== T[i - 1][j]) {
            res[i] =  'weights:' + weights[i]  + 'value' + values[i];
            j -= weights[i];
            i--
        }else {
            i--;
        }
    }
    if(i === 0) {
        if(T[i][j] !== 0) {
            res[i] = 'weights:' + weights[i]  + 'value' + values[i]
        }
    }
    return res
}

