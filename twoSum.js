/*
* Two Sum
* https://leetcode.com/problems/two-sum/#/description
* 
* Description:
* Given an array of integers, return indices of the two numbers such that they add up to a specific target.
* You may assume that each input would have exactly one solution, and you may not use the same element twice.
* Example:
* Given nums = [2, 7, 11, 15], target = 9,
* Because nums[0] + nums[1] = 2 + 7 = 9,
* return [0, 1].
* 
*/

/**
 * 思路：
 * 创建hash表，存储nums的值，而其value为index, 一旦配对成功， 当前index和此时hash存的index即是结果
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var hash = [];
    var result = [];
    
    for (var i = 0; i < nums.length; i++) {
        if (hash[nums[i]] === undefined) {
            hash[target - nums[i]] = i;
        } else {
            result.push(hash[nums[i]]);
            result.push(i);
        }
    }
    
    return result;
};