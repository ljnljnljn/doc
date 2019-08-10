function sequentialSearch(arr, item){
    for (let i=0; i<arr.length; i++){ 
        if (item === arr[i]) {
            return i; 
        }
    }
    return -1; 
};

// 前提数组是排序好的
function binarySearch(arr, item) {
    let len = arr.length;
    if(len <= 0) return -1;
    let low = 0, high = len - 1, middle;
    while(low < high) {
        middle = Math.floor((low +high) / 2);
        let index = arr[middle]
        if(index < item) {
            low = middle + 1
        }else if(index > item) {
            high = middle - 1
        }else {
            return middle
        }
    }
    return -1
}