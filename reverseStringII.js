/*
Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string. If there are less than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.
Example:
Input: s = "abcdefg", k = 2
Output: "bacdfeg"
Restrictions:
The string consists of lower English letters only.
Length of the given string and k will in the range [1, 10000]

思路：
分组法
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    if (s.length < k) return s.split('').reverse().join('');
    
    var result = '';
    var groups = Math.floor(s.length/k);
    var lastSection = s.length%k;
    
    for( var i = 0; i < groups; i++) {
        if (!(i%2)) {
            result += s.substr(i*k, k).split('').reverse().join('');
        } else {
            result += s.substr(i*k, k);
        }
    }
    
    if (lastSection) {
        if (!(groups%2)) {
            result += s.substr(groups*k).split('').reverse().join('');
        } else {
            result += s.substr(groups*k);
        }
    }
    
    return result;
};