/*
Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Example: 19 is a happy number

12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
*/

/**
思路：
string 运算，然后存到一个数组里面，检测该数字是否之前有出现过，有出现过因为着会不断循环下去，不是happy number
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var numsArray = [];
    var result = 0;
    while( true ){
        if( n === 1) return true;
        result = 0;
        var nA = n.toString().split("");
        for( var i = 0; i < nA.length; i++ ){
            result += Math.pow(parseInt(nA[i]),2);
        }
        
        if( numsArray.indexOf( result ) !== -1) return false;
        numsArray.push( result );
        n = result;
    }
};

