function MinCoinChange(allCount) {
    let coin = [100,50,20,10,5,1];
    let index = {};
    let coinCount = 0

    for(let i = 0; i < coin.length;) {
        if(coin[i] + coinCount > allCount) {
            i++;
            continue;
        }
        coinCount += coin[i];
        if(index[coin[i]]) {
            index[coin[i]]++
        }else {
            index[coin[i]] = 1
        }
        if(allCount == coinCount) break;
    }
    return index
}

console.log(MinCoinChange(123))