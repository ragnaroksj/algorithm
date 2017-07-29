 /**
 Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].

Note:

    Each element in the result should appear as many times as it shows in both arrays.
    The result can be in any order.

Follow up:

    What if the given array is already sorted? How would you optimize your algorithm?
    What if nums1's size is small compared to nums2's size? Which algorithm is better?
    What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

*/

/**
思路：
follow up: 指针
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var res = [];
    var hash = {};
    for (var i = 0; i < nums1.length; i++) {
        if(hash[nums1[i]] === undefined) hash[nums1[i]] = 1;
        else hash[nums1[i]]++;
    }
    
    for (var j = 0; j < nums2.length; j++) {
        if (hash[nums2[j]] !== undefined && hash[nums2[j]] !== 0) {
            res.push(nums2[j]);
            hash[nums2[j]]--;
        }
    }
    
    return res;
};