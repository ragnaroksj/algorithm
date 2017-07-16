/*
Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

Example:

Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]

*/

/**
思路：
归位法， 先将元素归位，注意交换时候index已经变了，需要用tmp来index，参见33行
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var result = [];
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[nums[i]-1]) {
            var tmp = nums[i];
            nums[i] = nums[nums[i]-1];
            nums[tmp-1] = tmp;
            i--;
        }
    }
    
    for (var j = 0; j < nums.length; j++) {
        if (nums[j] !== (j + 1) ) {
            result.push(j+1);
        }
    }
    
    return result;
};