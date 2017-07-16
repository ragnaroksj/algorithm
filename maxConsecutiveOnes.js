/*
Given a binary array, find the maximum number of consecutive 1s in this array.

Example 1:
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3.
Note:

The input array will only contain 0 and 1.
The length of input array is a positive integer and will not exceed 10,000
 */

/*
思路：
设置一个记录最大的变量和一个计数器，遇0计数器比较然后归零，不要忘记最后返回的时候再和计数器比较，以免遗漏最后一个是1的情况
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var maxCount = 0;
    var count = 0;
    
    for (var i = 0; i < nums.length; i++) {
        if (!nums[i]) {
            maxCount = count > maxCount ? count : maxCount;
            count = 0;
        } else {
            count++;
        }
    }
    
    return maxCount > count ? maxCount: count;
};