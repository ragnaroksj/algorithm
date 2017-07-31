/*
* power of 2
* Given an integer, write a function to determine if it is a power of two.
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if( n === 0 ) return false;
    while( n !== 1 ){
        if( n%2 !== 0 ) return false;
        n = n/2;
    }
    return true;
};


function PowersofTwo(num) { 
  if( num == 1) return true;
  else if( num < 1) return false;
  else return PowersofTwo(num/2);         
}


/*
0100 & 0011 = 0000
0110 & 0101 = 0100
*/
function PowersofTwoII(num) { 
  return (num != 0) && ((num & (num - 1)) == 0);     
}