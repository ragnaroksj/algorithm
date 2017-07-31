/*
Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

Note:

The length of both num1 and num2 is < 5100.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.
*/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    var carry = 0;
    var digi = 0;
    var result = '';
    var n1Pointer = num1.length;
    var n2Pointer = num2.length;
    while(n1Pointer && n2Pointer) {
        digi = (parseInt(num1[n1Pointer-1]) + parseInt(num2[n2Pointer-1]) + carry) % 10;
        carry = Math.floor((parseInt(num1[n1Pointer-1]) + parseInt(num2[n2Pointer-1]) + carry) / 10);
        result = digi + result;
        n1Pointer--;
        n2Pointer--;
    }
    
    while(n1Pointer) {
        digi = (parseInt(num1[n1Pointer-1]) + carry )  % 10;
        carry = Math.floor((parseInt(num1[n1Pointer-1]) + carry ) / 10);
        result = digi + result;
        n1Pointer--;
    }
    
    while(n2Pointer) {
        digi = (parseInt(num2[n2Pointer-1]) + carry )  % 10;
        carry = Math.floor((parseInt(num2[n2Pointer-1]) + carry ) / 10);
        result = digi + result;
        n2Pointer--;
    }
    
    if (carry) {
        result = carry + result;
    }
    
    return result;
};