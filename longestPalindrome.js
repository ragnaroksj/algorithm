/*
Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

This is case sensitive, for example "Aa" is not considered a palindrome here.

Note:
Assume the length of given string will not exceed 1,010.

Example:

Input:
"abccccdd"

Output:
7

Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.
*/

/*
思路： 先存到hash中，然后求每个字母的奇偶性，因为偶数必然是，而奇数的最大偶数是，最后如果全是偶数则直接相加返回，如果存在奇数，则返回加1
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    var hash = {};
    var res = 0;
    var addOddValue = 0;
    
    for (var i = 0; i < s.length; i++) {
        if (hash[s[i]] === undefined) hash[s[i]] = 1;
        else hash[s[i]]++;
    }
    
    for (var j in hash) {
        if (!(hash[j] % 2)) res += hash[j];
        else {
            res += hash[j] - 1;
            addOddValue = 1;
        }
    }
    
    return addOddValue ? res + 1 : res;
};