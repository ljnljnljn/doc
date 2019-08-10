/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity
    this.obj = {}
    this.arr = []
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let val = this.obj[key]
    if(val > 0) {
        let index = this.arr.indexOf(key)
        this.arr.splice(index, 1)
        this.arr.unshift(key)
        return val
    }else {
        return -1
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.obj[key]) {
        this.obj[key] = value
        let index = this.arr.indexOf(key)
        this.arr.splice(index, 1)
        this.arr.unshift(key)
    }else if(this.capacity === this.arr.length) {
        let key = this.arr.pop()
        this.obj[key] = undefined
    }else {
        this.obj[key] = value
        this.arr.unshift(key)
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

 var cache = new LRUCache(2)
 cache.put(2, 1)
 cache.put(1, 1)
 cache.put(2, 3)
 cache.put(1, 4)
 console.log(cache.get(1))
