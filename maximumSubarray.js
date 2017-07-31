/*
Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
the contiguous subarray [4,-1,2,1] has the largest sum = 6.
思路：
动态规划, 遍历每个值并求和，计入每次求和后与之前的最大值，如果求和后发生负数，则舍掉前纪录，保存当前，并继续。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var maxValue = Number.NEGATIVE_INFINITY;
    var sum = 0;
    
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
        maxValue = maxValue > sum ? maxValue : sum;
        if (sum < 0) sum = 0;
    }
    
    return maxValue;
};