/*
Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.

Example 1:
Input: "abab"

Output: True

Explanation: It's the substring "ab" twice.
Example 2:
Input: "aba"

Output: False
Example 3:
Input: "abcabcabcabc"

Output: True

Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    for (var i = Math.floor(s.length/2); i >= 1; i--) {
        if (!(s.length % i)) {
            var l = s.length / i;
            var unit = s.substr(0, i);
            var units = '';
            for (var j = 0; j < l; j++) {
                units += unit;
            }
            
            if (units === s) return true;
        }
    }
    
    return false;
};