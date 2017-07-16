/*
Given a word, you need to judge whether the usage of capitals in it is right or not.

We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital if it has more than one letter, like "Google".
Otherwise, we define that this word doesn't use capitals in a right way.
Example 1:
Input: "USA"
Output: True
Example 2:
Input: "FlaG"
Output: False
 */

/*
思路：
注意边界条件
 */

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    // A is 65, Z is 90, a is 97
    if (!word) return true;
    if (word.length === 1) return true;
    
    var condition = 3;
    if (word[0].charCodeAt() >= 97) condition = 2;
    else if (word[1].charCodeAt() <= 90 ) condition = 1;
    for (var i = 1; i < word.length; i++) {
        var wordCode = word[i].charCodeAt();
        if (
            (wordCode < 97 && condition === 2) ||
            (wordCode > 90 && condition === 1) ||
            (wordCode <= 90 && condition === 3) 
            ) return false;
        }
    
    return true;
};


