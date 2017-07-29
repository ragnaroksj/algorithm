 /**
Given an integer, return its base 7 string representation.

Example 1:

Input: 100
Output: "202"

Example 2:

Input: -7
Output: "-10"

*/

/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    if (!num) return '0';
    
    var flag = num >= 0 ? '' : '-';
    var num = Math.abs(num);
    var res = '';
    
    while (num > 0) {
        res = num % 7 + res;        
        num = Math.floor(num / 7);
    }
    
    return flag + res;
};