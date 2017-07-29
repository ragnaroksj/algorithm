/*
Given a roman numeral, convert it to an integer.
Input is guaranteed to be within the range from 1 to 3999.
*/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
     var a ={
        "M" : 1000,
        "D" : 500,
        "C" : 100,
        "L" : 50,
        "X" : 10,
        "V" : 5,
        "I" : 1
     };
     
     var result = a[s[0]], lastNum = a[s[0]];
     
     for( var i = 1; i < s.length; i++){
        if( a[s[i]] <= lastNum ){
            result += a[s[i]];
        }else{
            result = result - 2*lastNum + a[s[i]];
        }
        lastNum = a[s[i]];
     }
     
     return result;
};
