/*
Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

Note:
Each element in the result must be unique.
The result can be in any order.
 */

/**
思路：
*/


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var res = [];
    var hash = {};
    for (var i = 0; i < nums1.length; i++) {
        if (hash[nums1[i]] === undefined) hash[nums1[i]] = 1;
    }
    
    for (var j = 0; j < nums2.length; j++) {
        if (hash[nums2[j]] === 1) {
            hash[nums2[j]]++;
            res.push(nums2[j]);
        }
    }
    
    return res;
};