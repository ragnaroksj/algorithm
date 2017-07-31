/*
Write a function that takes a string as input and reverse only the vowels of a string.

Example 1:
Given s = "hello", return "holle".

Example 2:
Given s = "leetcode", return "leotcede".

Note:
The vowels does not include the letter "y".

*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var vowel = ['a', 'e', 'i', 'o','u', 'A', 'E', 'I', 'O', 'U'];
    
    var p = 0;
    var q = s.length - 1;
    var strArray = s.split('');
    
    while (p < q) {
        if (vowel.indexOf(strArray[p]) !== -1) {
            if (vowel.indexOf(strArray[q]) !== -1) {
                var tmp = strArray[p];
                strArray[p] = strArray[q];
                strArray[q] = tmp;
                p++;
                q--;
            } else {
                q--;
            }
        } else {
            p++;
        }
    }
    console.log(strArray);
    return strArray.join('');
};