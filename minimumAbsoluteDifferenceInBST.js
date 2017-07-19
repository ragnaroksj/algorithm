/*
Given a binary search tree with non-negative values, find the minimum absolute difference between values of any two nodes.

Example:

Input:

   1
    \
     3
    /
   2

Output:
1

Explanation:
The minimum absolute difference is 1, which is the difference between 2 and 1 (or between 2 and 3).
Note: There are at least two nodes in this BST.
 */

/**
思路：
1. 利用中序遍历（左－》中－》右）可以按照从小到大的顺序，检测相邻两个节点值
2. 注意闭包在这里的应用以及函数传递值传递还是引用传递：
    inOrderTraverse是闭包函数，可以访问 prev 和 res， 内部修改相当于改变了这两个变量，但是作为变量传进去相当于值传递（两个都是primitive），就无法改变外部变量，但是root是对象，js中对象传递时引用传递，不存在这个问题。
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
 * @return {number}
 */
var getMinimumDifference = function(root) {
    var prev = -1;
    var res = Number.MAX_SAFE_INTEGER;
    
    inOrderTraverse(root);
    
    function inOrderTraverse(node) {
        if (!node) return;
        
        inOrderTraverse(node.left);
        
        if (prev !== -1) res = Math.min(res, node.val - prev);
        
        prev = node.val;
        inOrderTraverse(node.right);
    }
        
    return res;
}
    
