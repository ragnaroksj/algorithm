/*
Find the sum of all left leaves in a given binary tree.

Example:

    3
   / \
  9  20
    /  \
   15   7

There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.
 */

/**
思路：
检查节点的左节点，如果有则继续，如果没有要判断是否有右节点，如果没有则是叶子节点。但要判断是否是左节点， 所以在遍历的时候传递一个direction标记来判断。
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
var sumOfLeftLeaves = function(root) {
    if (!root) return 0;
    var res = 0;
    traverse(root);
    
    function traverse(node, direction) {
        if (node.left) {
            traverse(node.left, 'left');
        } else {
            if(!node.right && direction ==='left') {
                res += node.val;
            }
        };
        
        if (node.right) {
            traverse(node.right, 'right');
        }
    }
    
    return res;
};