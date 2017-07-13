/*
Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

Example:
Given num = 16, return true. Given num = 5, return false.

Follow up: Could you solve it without loops/recursion?



思路：
确定是2的次方数，再确定－1能被3整除
 */

/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    return num > 0 && !(num & (num - 1)) && !((num - 1) % 3)
};