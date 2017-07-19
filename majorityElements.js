/*
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.
 */

/**
思路：
*/

/**
* @param {number[]} nums
* @return {number}
*/
var majorityElement = function(nums) {
    var hash = [];
    
    for( var i = 0; i < nums.length; i++ ){
        if( hash[nums[i]] === undefined ) hash[nums[i]] = 1;
        else hash[nums[i]] += 1;

        if( hash[nums[i]] > Math.floor(nums.length/2) ) return nums[i];
    }

};