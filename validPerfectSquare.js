/*
Given a positive integer num, write a function which returns True if num is a perfect square else False.

Note: Do not use any built-in library function such as sqrt.

Example 1:

Input: 16
Returns: True
Example 2:

Input: 14
Returns: False
*/

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if (num === 0 || num === 1) return true;
    
    for (var i = 2; i < num; i++) {
        if (i**2 === num) return true;
        if (i**2 > num) return false;
    }
};