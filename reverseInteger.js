/*
* Reverse Integer
* https://leetcode.com/problems/reverse-integer/#/description
* 
* Description:
* Reverse digits of an integer.

Example1: x = 123, return 321
Example2: x = -123, return -321 

Have you thought about this?
Here are some good questions to ask before coding. Bonus points for you if you have already thought through this!
If the integer's last digit is 0, what should the output be? ie, cases such as 10, 100.
Did you notice that the reversed integer might overflow? Assume the input is a 32-bit integer, then the reverse of 1000000003 overflows. How should you handle such cases?
For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

Note:
The input is assumed to be a 32-bit signed integer. Your function should return 0 when the reversed integer overflows. 
* 
*/

/**
 * 思路：
 * 为什么不用check是否等于214748364呢，
 因为输入的x也是一个整型数，所以x的范围也应该在 -2147483648～2147483647 之间，
 那么x的第一位只能是1或者2，翻转之后res的最后一位只能是1或2，所以res只能是 2147483641 或 2147483642 都在int的范围内。
 但是它们对应的x为 1463847412 和 2463847412，后者超出了数值范围。
 所以当过程中res等于 214748364 时， 输入的x只能为 1463847412， 翻转后的结果为 2147483641，都在正确的范围内，所以不用check。
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if( x === 0  ) return 0;
    var rev = 0, y = Math.abs(x);
    while( y !== 0 ){
        if( rev > 214748364) return 0;
        rev = rev*10 + y%10;
        y = Math.floor(y/10);
    }
    
    return x > 0 ? rev : -rev;
};