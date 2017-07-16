/*
Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

Example:
Given a = 1 and b = 2, return 3. 
*/

/**
思路：
a ^ b 直接算出a + b 每位上%2的结果， 进位的话可以直接 (a & b)<<1得到（只有两个位均为1才会进位嘛，左移表示进到下一位啊）
*/

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    while (b) {
        var carry = (a & b) << 1;
        a = a ^ b;
        b = carry;
    }
    
    return a;
}; 