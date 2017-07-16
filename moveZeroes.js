/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/

/**
 * 思路：
 设置两个指针i,j.判断数是不是0，i-j记录了最前面0 的位置，因为每次发生一次交换，意味着靠前的一个位置已经修正为非零，因此下次再发生应该是从改位后面开始，所以一旦发生交换，只需要将i加1即可。
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var j = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === 0) j++;
        else {
            var tmp = nums[i];
            nums[i] = nums[i-j];
            nums[i-j] = tmp;
        }
    }
};