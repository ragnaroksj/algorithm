/*
The set S originally contains numbers from 1 to n. But unfortunately, due to the data error, one of the numbers in the set got duplicated to another number in the set, which results in repetition of one number and loss of another number.

Given an array nums representing the data status of this set after the error. Your task is to firstly find the number occurs twice and then find the number that is missing. Return them in the form of an array.
Example 1:
Input: nums = [1,2,2,4]
Output: [2,3]
Note:
The given array size will in the range [2, 10000].
The given array's numbers won't have any order.
思路：
算出正确的和然后减去出错的数组得到缺少的值，同时用hash来找出重复的那个值
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    var hash = {};
    var res = [];
    var correction = nums.length * (1 + nums.length) * 0.5;
    
    for (var i = 0; i < nums.length; i++) {
        if(hash[nums[i]] === undefined) {
            hash[nums[i]] = 1;
            correction -= nums[i];
        } else res.push(nums[i]);
    }
    
    res.push(correction);
    
    return res
};