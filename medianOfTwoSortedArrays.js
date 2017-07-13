/*
* Longest Substring Without Repeating Characters
* https://leetcode.com/problems/longest-substring-without-repeating-characters/#/description
* 
* Description:
* Given a string, find the length of the longest substring without repeating characters.
* Examples:
* Given "abcabcbb", the answer is "abc", which the length is 3.
* Given "bbbbb", the answer is "b", with the length of 1.
* Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
* 
*/

/**
 * 思路：
 * 窗口法
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s.length) return 0;
    
    var hash = [];
    var longestNum = 0;
    var j = 0;
    
    for (var i = 0; i < s.length; i++) {
        while(j < s.length && hash[s[j]] === undefined ) {
            hash[s[j]] = j;
            longestNum = Math.max(longestNum, j - i + 1);
            j++;
        }
        hash[s[i]] = undefined;
    }
    
    return longestNum;
};