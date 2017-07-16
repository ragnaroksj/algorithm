/*
Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.

Example 1:
Input:
    3
   / \
  9  20
    /  \
   15   7
Output: [3, 14.5, 11]
Explanation:
The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].
Note:
The range of node's value is in the range of 32-bit signed integer.
 */

/**
思路：
递归，同时设置一个数组用于存放每个level相加有几个数字。
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    var tmp = [];
    var count = [];
    var level = 0;
    
    sumLevels(root, 0, tmp, count);
    
    for (var i = 0; i < tmp.length; i++) {
        tmp[i] = tmp[i]/count[i];
    }
    
    return tmp;
};

var sumLevels = function(node, level, tmp, count) {
    if (tmp[level] === undefined) {
        tmp[level] = 0;
        count[level] = 0;
    }
    
    tmp[level] += node.val;
    count[level]++;
    
    if (node.left !== null) {
        sumLevels(node.left, level+1, tmp, count);
    }
     
    if (node.right !== null) {
        sumLevels(node.right, level+1, tmp, count);
    }
}