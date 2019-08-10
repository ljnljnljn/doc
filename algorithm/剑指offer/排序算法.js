function bubbleSort(arr) {
    let len = arr.length;
    if(len <= 1) {
        return arr
    }
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len - i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

function selectSort(arr) {
    let len = arr.length;
    if(len <= 1) {
        return arr
    }

    for(let i = 0; i < len; i++) {
        let minIndex = i;
        // 找出最小的min的下标
        for(let j = i + 1; j < len; j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // 交换
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr
}

function insertSort(arr) {
    let len = arr.length;
    if(len <= 1) {
        return arr;
    }
    for(let i = 1; i < len; i++) {
        let key = arr[i]
        let j = i - 1
        while(j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = key 
    }
    return arr
}

function shellSort(arr) {
    let len = arr.length;
    if(len <= 1) {
        return arr;
    }
    let gap = 1;
    while(gap < len/5) {
        gap = gap * 5 + 1;
    }
    for(gap; gap > 0; gap = Math.floor(gap / 5) ) {
        for(let i = gap; i < len; i++) {
            let key = arr[i];
            let j = i - gap;
            while(j >= 0 && arr[j] > key) {
                arr[j + gap] = arr[j];
                j -= gap
            }
            arr[j + gap] = key
        }
    }

    return arr
}

// 自底向上归并排序
function mergeSort(arr) {
    let len = arr.length;
    if(len <= 1) {
        return arr;
    }
    let middle = Math.floor(len / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);
    return __merge(mergeSort(left), mergeSort(right));
}

function __merge(left, right) {
    let result = [];
    while(left.length && right.length) {
        if(left[0] <= right[0]) {
            result.push(left.shift());
        }else {
            result.push(right.shift())
        }
    }

    while(left.length) {
        result.push(left.shift());
    }

    while(right.length) {
        result.push(right.shift())
    }
    return result
}

// 分治法思想
function quickSort(arr) {
    　　if (arr.length <= 1) { return arr; }
    　　let pivotIndex = Math.floor(arr.length / 2);
    　　let pivot = arr.splice(pivotIndex, 1)[0];//splice用来操作数组
    　　let left = [];
    　　let right = [];
    　　for (let i = 0; i < arr.length; i++){
    　　　　if (arr[i] < pivot) {
    　　　　　　left.push(arr[i]);
    　　　　} else {
    　　　　　　right.push(arr[i]);
    　　　　}
    　　}
    　　return quickSort(left).concat([pivot], quickSort(right));
    };

// 堆排序也是一种很高效的算法，因其把数组当作二叉树来排序而得名。这个算法会根据以下
// 信息，把数组当作二叉树来管理。
// 索引0是树的根节点；
// 除根节点外，任意节点N的父节点是N/2；
// 索引0是树的根节点；
// 除根节点外，任意节点N的父节点是N/2；
function heapSort(arr) {
    let heapSize = arr.length;
    _buildHeap(arr);
    while(heapSize > 1) {
        heapSize--;
        swap(arr, 0, heapSize);
        _heapify(arr, heapSize, 0);
    }
    return arr
}
function _buildHeap(arr) {
    let heapSize = arr.length;
    for(let i = Math.floor(heapSize / 2); i >= 0; i--) {
        _heapify(arr, heapSize, i)
    }
}

function _heapify(arr, heapSize, index) {
    let left = index * 2 + 1;
    let right = index * 2 + 2;
    let largest = index;
    if(left < heapSize && arr[left] > arr[largest]) {
        largest = left
    }
    if(right < heapSize && arr[right] > arr[largest]) {
        largest = right
    }
    if(largest != index) {
        swap(arr, index, largest);
        _heapify(arr, heapSize, largest);
    }
}

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}

// 计数排序
function countingSort(array) {
    var len = array.length,
        B = [],
        C = [],
        min = max = array[0];
    for (var i = 0; i < len; i++) {
        min = min <= array[i] ? min : array[i];
        max = max >= array[i] ? max : array[i];
        C[array[i]] = C[array[i]] ? C[array[i]] + 1 : 1;
    }
    console.log(C)
    for (var j = min; j < max; j++) {
        C[j + 1] = (C[j + 1] || 0) + (C[j] || 0);
    }
    console.log(C)
    for (var k = len - 1; k >= 0; k--) {
        B[C[array[k]] - 1] = array[k];
        C[array[k]]--;
    }
    return B;
}
var arr = [2, 2, 3, 8, 7, 1, 2, 2, 2, 7, 3, 9, 8, 2, 1, 4, 2, 4, 6, 9, 2];



// console.log(heapSort([1,3,2,5,9,7,8,4]));
// console.log(bubbleSort([1,3,2,5,9,7,8,4]))
// console.log(_buildHeap([1,3,2,5,9,7,8,4]))
console.log(countingSort(arr))