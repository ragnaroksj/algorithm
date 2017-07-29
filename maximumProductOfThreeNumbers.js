/*
Given an integer array, find three numbers whose product is maximum and output the maximum product.

Example 1:
Input: [1,2,3]
Output: 6
Example 2:
Input: [1,2,3,4]
Output: 24
Note:
The length of the given array will be in range [3,104] and all elements are in the range [-1000, 1000].
Multiplication of any three numbers in the input won't exceed the range of 32-bit signed integer.
 */


 /*
思路：
排序，全部正数或者全部负数，去最后三个
前两个是负数，其他随意，则比较两个负数和最大正数 与 最后三个正数乘积比较
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    nums.sort((a,b) => a-b);
    
    if (nums[0] >= 0 || nums[nums.length - 1] <= 0) return nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];
    
    if (nums[1] < 0) {
        var a = nums[0] * nums[1] * nums[nums.length - 1];
        var b = nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];
        
        if (a > b) return a;
        else return b;
    }
};