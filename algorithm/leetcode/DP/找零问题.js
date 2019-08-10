function MinCoinChange(coins_){
    let coins = coins_;
    let cache = {};
    this.makeChange = function(amount) {
        let me = this;
        if(!amount) return [];
        if(cache[amount]) return cache[amount];
        let min = [], newMin, newAmount;
        for(let i = 0; i < coins.length; i++) {
            let coin = coins[i];
            newAmount = amount - coin;
            if(newAmount >= 0) {
                newMin = me.makeChange(newAmount);
            }
            if(newAmount >= 0 && (newMin.length < min.length - 1 || !min.length )
                && (newMin.length || !newAmount) ) {
                    min = [coin].concat(newMin)
            }
        }
        console.log(min)
        return cache[amount] = min
    }
}
var minCoinChange = new MinCoinChange([1,5,10,25]);
console.log(minCoinChange.makeChange(36));