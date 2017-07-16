/*
Given an integer array with even length, where different numbers in this array represent different kinds of candies. Each number means one candy of the corresponding kind. You need to distribute these candies equally in number to brother and sister. Return the maximum number of kinds of candies the sister could gain.

Example 1:
Input: candies = [1,1,2,2,3,3]
Output: 3
Explanation:
There are three different kinds of candies (1, 2 and 3), and two candies for each kind.
Optimal distribution: The sister has candies [1,2,3] and the brother has candies [1,2,3], too. 
The sister has three different kinds of candies. 
Example 2:
Input: candies = [1,1,2,3]
Output: 2
Explanation: For example, the sister has candies [2,3] and the brother has candies [1,1]. 
The sister has two different kinds of candies, the brother has only one kind of candies. 
Note:

The length of the given array is in range [2, 10,000], and will be even.
The number in given array is in range [-100,000, 100,000].
 */

/*
思路： 不用关心sister 里面有哪些糖果，只要确定sister的罐子容量，然后用一个hashtable来查找糖果是否出现过，如果没出现过则放入，计数器加一，出现过直接跳过，同时检测can的容量是不是满了
 */

/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    var sisterCan = {};
    var canSize = candies.length/2;
    var count = 0;
    
    for (var i = 0; i < candies.length; i++) {
        if (sisterCan[candies[i]] === undefined) {
            sisterCan[candies[i]] = 1;
            count++;
            if (count === canSize) break;
        } 
    }
    
    return count;
};