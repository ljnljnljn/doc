/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var res = Merge(nums1, nums2);
    var len = res.length;
    if(len % 2 == 0) {
        return (res[len / 2] + res[len/2 - 1]) / 2;
    }else {
        return res[(len-1)/2];
    }
};
function Merge(nums1, nums2) {
    var res = [];
    while(nums1.length && nums2.length) {
        if(nums1[0] <nums2[0]) {
            res.push(nums1.shift());
        }else {
            res.push(nums2.shift())
        }
    };

    while(nums1.length) {
        res.push(nums1.shift())
    };

    while(nums2.length) {
        res.push(nums2.shift())
    };
    return res
}

console.log(findMedianSortedArrays([1,2,3,4],[5]))