/*
Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

For example:

Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.
*/

/**
 * 思路：

 */

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if( num < 10 ) return num;
    var numArray = num.toString().split("");
    var result = 0;
    for( var i = 0; i < numArray.length; i++){
        result += parseInt(numArray[i]);
    }
    if( result < 10 ) return result;
    return addDigits( result );
};