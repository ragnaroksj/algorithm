/**
 Write a function that takes an unsigned integer and returns the number of ’1' bits it has (also known as the Hamming weight).

For example, the 32-bit integer ’11' has binary representation 00000000000000000000000000001011, so the function should return 3.
*/


/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    if( n < 0 ) return 0;
    var count = 0;
    return divide(n, count);
};

function divide(n, count){
    if( n < 1 ) return count;
    return divide(Math.floor(n/2), (count += n%2) );
}


or

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var res = 0;
    
    while (n) {
        res += n & 1;
        n = n >>> 1;
    }
    
    return res;

};