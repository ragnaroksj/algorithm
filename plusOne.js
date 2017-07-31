/*
Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.

You may assume the integer do not contain any leading zero, except the number 0 itself.

The digits are stored such that the most significant digit is at the head of the list.
[1,2,9] -> [1,3,0]
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var carry = 0;
    for (var i = digits.length - 1; i >= 0; i--) {
        if (i === digits.length -1) {
            plus = 1;
        } else plus = 0;
        var sum = plus + carry + digits[i];
        if (sum >= 10) carry = 1;
        else carry = 0;
        
        digits[i] = sum % 10;
    }
    
    if (carry) digits.unshift(carry);
    
    return digits;
};

or

var plusOne = function(digits) {
    var i = digits.length - 1;
    var carry = 1;
    while( i >= 0 && carry ){
        if( digits[i] === 9 ){
            carry = 1;
            digits[i] = 0;
        }else{
            digits[i] += 1;
            carry = 0;
        } 
        i--;
    }
    
    if( carry === 1 ){
        digits.unshift(1);
    }
    
    return digits;
};
