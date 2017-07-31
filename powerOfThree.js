/*
*Given an integer, write a function to determine if it is a power of three.

Follow up:
Could you do it without using any loop / recursion?
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (!n) return false;
    if (n === 1) return true;
    if ((n%3) !== 0) return false;
    return isPowerOfThree(n/3);
};

/*follow up*/
var isPowerOfThree(n) {
  return (n > 0 && Math.floor(log10(n) / log10(3)) - log10(n) / log10(3) == 0);
}