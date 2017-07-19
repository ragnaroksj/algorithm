/*
Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
 */

/**
思路：26进制
*/

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    if( s === null ) return 0;
    var result = 0;
    var i  = 1;
    var sArray = s.split("");
    while( sArray.length ){
        result += ( sArray.pop().charCodeAt()-64 )  * Math.pow(26,(i-1));
        i++;
    }
    
    return result;
};