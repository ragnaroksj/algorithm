/*
We define a harmonious array is an array where the difference between its maximum value and its minimum value is exactly 1.

Now, given an integer array, you need to find the length of its longest harmonious subsequence among all its possible subsequences.

Example 1:

Input: [1,3,2,2,5,2,3,7]
Output: 5
Explanation: The longest harmonious subsequence is [3,2,2,2,3].

Note: The length of the input array will not exceed 20,000. 
 思路：
 先建立哈希表记录每个数字出现的次数， 顺便排序，然后遍历键值做差为1的将两者次数相加，取最大值。注意js中负数是在哈希表最后的位置，所以最后一个值和第一个值再做一次差值比较。
 */



/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    var hash = {};
    var res = 0;

    nums.sort((a, b) => a - b);
    
    for (var i = 0; i < nums.length; i++) {
        if (hash[nums[i]] === undefined) hash[nums[i]] = 1;
        else hash[nums[i]]++;
    }
    var keys = Object.keys(hash);
    for(var i = 1; i < keys.length; i++) {
        if (Math.abs(keys[i] - keys[i-1]) === 1) {
            var newRes = hash[keys[i]] + hash[keys[i-1]];
            res = (newRes > res) ? newRes : res;
        }
    }
    
    if (Math.abs(keys[keys.length - 1] - keys[0]) === 1) {
        var newRes = hash[keys[0]] + hash[keys[keys.length -1]];
        res = (newRes > res) ? newRes : res;
    }
    
    return res;
};