/*
Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.

Note:
The given integer is guaranteed to fit within the range of a 32-bit signed integer.
You could assume no leading zero bit in the integer’s binary representation.
Example 1:
Input: 5
Output: 2
Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.
Example 2:
Input: 1
Output: 0
Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.
 
Input: 11
output: 4

思路：判断余数，同时设置一个计数器来增加2的幂次
 */

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    var result = 0;
    var i = 0;
    while(num) {
     i = (2 * i) || 1;
     if (!(num%2)) {
         result += i;
     }
        
     num = Math.floor(num/2);   
    }
    
    return result;
};