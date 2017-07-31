/*
 Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

Example:
Given a binary tree 
          1
         / \
        2   3
       / \     
      4   5    
Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

Note: The length of path between two nodes is represented by the number of edges between them.

 */

/**
思路：
设置一个全局变量用于存最大值， 然后遍历每个左节点到叶子的距离，然后同时遍历右节点到叶子的距离，
然后比较该节点到左叶子和右叶子的距离，与最大值比较。完成后返回
find out the max of leftDepth & rightDepth while at each node, meanwhile update the total max.
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
var diameterOfBinaryTree = function(root) {
    var res = 0;
    maxDepth(root);
    return res;
    
    function maxDepth(node) {
        if (!node) return 0;
        var left = maxDepth(node.left);
        var right = maxDepth(node.right);
        res = Math.max(res, left + right);
        return Math.max(left, right) + 1;
    }
};