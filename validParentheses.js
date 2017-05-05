/*
* validParenthese
* https://leetcode.com/problems/reverse-integer/#/description
* 
* Description:
* Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
* The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
* 
*/

/**
 * 思路：
 * 用栈，最后别忘记判断临时存储的空间是否为空
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length%2 !== 0 || s.length === 0) return false;
    var sArray = s.split('').reverse();
    var temp = [];
    
    while (sArray.length > 0) {
        var parentheses = sArray.pop();
        if (parentheses === '[' || parentheses === '{' || parentheses === '(') {
            temp.push(parentheses);
        } else if (parentheses === ']') {
            if (temp.pop() !== '[') return false;
        } else if (parentheses === '}') {
            if (temp.pop() !== '{') return false;
        } else if (parentheses === ')') {
            if (temp.pop() !== '(') return false;
        }
    }
    
    if (temp.length !== 0) return false;
    
    return true;
};