/*
Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.
American keyboard

Example 1:
Input: ["Hello", "Alaska", "Dad", "Peace"]
Output: ["Alaska", "Dad"]
Note:
You may use one character in the keyboard more than once.
You may assume the input string will only contain letters of alphabet.


思路：设置一个hashTable查找， 注意一个字母情况
 */

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    var result = [];
    var firstAlphabetRow = 0;
    var hashTable = {
        a:2, b:3, c:3, d:2, e:1, f:2, g:2, h:2, i:1, j:2, k:2, l:2, m:3,
        n:3, o:1, p:1, q:1, r:1, s:2, t:1, u:1, v:3, w:1, x:3, y:1, z:3
    }
    
    for (var i = 0; i < words.length; i++) {
        if (words[i].length === 1) {
            result.push(words[i]);
            continue;
        }
        
        var firstAlphabetRow = hashTable[words[i][0].toLowerCase()];
        for(var j = 1; j < words[i].length; j++) {
            if (hashTable[words[i][j].toLowerCase()] !== firstAlphabetRow) {
                break;
            } else if ( j === words[i].length - 1 ) {
                result.push(words[i]);
            }
        }
    }
    
    return result;
};