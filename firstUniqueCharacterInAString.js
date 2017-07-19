/*
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.
*/


/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var hash = {};
    var firstNonRepeating = '';
    
    for (var i = 0; i < s.length; i++) {
        if(hash[s[i]] === undefined) hash[s[i]] = 1;
        else hash[s[i]]++;
    }
    
    for (var j = 0; j < s.length; j++) {
        if (hash[s[j]] === 1) return j;
    }
    
    return -1;
};