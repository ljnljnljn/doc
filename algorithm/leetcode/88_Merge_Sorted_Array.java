class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int position = m + n - 1;
        int first = m - 1;
        int second = n - 1;
        while(position >= 0) {
            if(first < 0) {
                nums1[position--] = nums2[second--];
            }else if(second < 0) {
                nums1[position--] = nums1[first--];
            }else {
                nums1[position--] = nums1[first] > nums2[second] ? nums1[first--] : nums2[second--];
            }
        }
    }
}