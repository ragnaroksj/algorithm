/*
You are given a string representing an attendance record for a student. The record only contains the following three characters:

'A' : Absent.
'L' : Late.
'P' : Present.
A student could be rewarded if his attendance record doesn't contain more than one 'A' (absent) or more than two continuous 'L' (late).

You need to return whether the student could be rewarded according to his attendance record.
Example 1:
Input: "PPALLP"
Output: True
Example 2:
Input: "PPALLL"
Output: False
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    var hash = {'A': 0, 'L': 0, 'P': 0};
    var prev = '';
    
    for (var i = 0; i < s.length; i++) {
        if (s[i] === 'A') {
            hash['A']++;
            if (hash['A'] > 1) return false;
        }
        
        if(s[i] === 'L') {
            if (prev === 'L') {
                hash['L']++;
                 if (hash['L'] > 2) return false
            } else {
                hash['L'] = 1;
            }
        }
        
        prev = s[i];
    }
    
    return true;
};