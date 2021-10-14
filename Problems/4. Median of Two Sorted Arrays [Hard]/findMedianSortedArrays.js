/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let mergedArray = nums1.concat(nums2);
    mergedArray.sort((a, b) => { return a - b; });
    let median;
    let midpt = Math.floor(mergedArray.length / 2) - 1;
    if (mergedArray.length % 2) {
        median = mergedArray[((mergedArray.length + 1) / 2) - 1];
    } else {
        median = (mergedArray[mergedArray.length / 2] + mergedArray[(mergedArray.length / 2) + 1]) / 2;
    }
    return median;
};