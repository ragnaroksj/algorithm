/*
You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.
*/

/**
 * 思路：
 1. 斐波纳钦算法，效率低
 2. 转递归到循环
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
   /* if( n === 0 ) return 0;
    if( n === 1 ) return 1;
    return climbStairs( n-1 ) + climbStairs( n-2 );*/
    
    var current = 1, last = 0;
    for(var i = 0; i < n; i++ ){
        var tmp = current;
        current += last;
        last = tmp;
    }
    
    return current;
};

