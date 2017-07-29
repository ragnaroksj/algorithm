/**
 * Missing number
 *Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.
 *For example,
 *Given nums = [0, 1, 3] return 2. 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
    }

    var n = nums.length;
    return n*(n+1) * 0.5 - sum;
}