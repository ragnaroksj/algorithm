/*
Given scores of N athletes, find their relative ranks and the people with the top three highest scores, who will be awarded medals: "Gold Medal", "Silver Medal" and "Bronze Medal".

Example 1:
Input: [9,7,3,1,6,10]
Output: ["Silver Medal","Bronze Medal","5","6","4","Gold Medal"]
Explanation: The first three athletes got the top three highest scores, so they got "Gold Medal", "Silver Medal" and "Bronze Medal". 
For the left two athletes, you just need to output their relative ranks according to their scores.
*/


/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
    var hashPosition = {};
    var res = [];
    
    for (var i = 0; i < nums.length; i++) {
        hashPosition[nums[i]] = i;
    }
    
    nums.sort((a, b) => b - a);
    
    for (var j = 0; j < nums.length; j++) {
        if (!j) res[hashPosition[nums[j]]] = 'Gold Medal';
        else if (j === 1) res[hashPosition[nums[j]]] = 'Silver Medal';
        else if (j === 2) res[hashPosition[nums[j]]] = 'Bronze Medal';
        else res[hashPosition[nums[j]]] = j + 1 + '';
    }
    
    return res;  
};
