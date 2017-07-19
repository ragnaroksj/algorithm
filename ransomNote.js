/*
Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Note:
You may assume that both strings contain only lowercase letters.

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aba") -> true
 */

/**
思路：
*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    var hash = {};
    
    for (var j = 0; j < magazine.length; j++) {
        if (hash[magazine[j]] === undefined) hash[magazine[j]] = 1;
        else hash[magazine[j]]++;
    }
    
    for (var i = 0; i < ransomNote.length; i++) {
        if (hash[ransomNote[i]] === undefined || hash[ransomNote[i]] === 0) return false;
        else hash[ransomNote[i]]--;
    }
    
    return true;
};