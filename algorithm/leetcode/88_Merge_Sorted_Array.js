/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    nums1.length = m;
    nums2.length = n;
    Array.prototype.push.apply(nums1, nums2)
    nums1.sort((a ,b) => {
        return a - b
    })
};

let i = 5 
let arr = [1,2,3,4,5,6]

console.log(arr[--i], i)