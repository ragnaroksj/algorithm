/*
Given a non-empty integer array of size n, find the minimum number of moves required to make all array elements equal, where a move is incrementing n - 1 elements by 1.

Example:

Input:
[1,2,3]

Output:
3

Explanation:
Only three moves are needed (remember each move increments two elements):

[1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]

 */

/**
思路： 逆向思维，先找出最小值，然后将剩余的值减去最小值然后sum起来就是，因为每次n-1个值加到最大值，其实反过来就是最大值-1
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    var res = 0;
    var min = nums[0];
    
    for (var i = 1; i < nums.length; i++) {
        min = nums[i] < min ? nums[i] : min;
    }
    
    for (var i = 0; i < nums.length; i++) {
        res += nums[i] - min;
    }
    
    return res;
};