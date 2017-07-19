/*
Given a binary tree, return the tilt of the whole tree.

The tilt of a tree node is defined as the absolute difference between the sum of all left subtree node values and the sum of all right subtree node values. Null node has tilt 0.

The tilt of the whole tree is defined as the sum of all nodes' tilt.

Example:
Input: 
         1
       /   \
      2     3
Output: 1
Explanation: 
Tilt of node 2 : 0
Tilt of node 3 : 0
Tilt of node 1 : |2-3| = 1
Tilt of binary tree : 0 + 0 + 1 = 1
Note:

The sum of node values in any subtree won't exceed the range of 32-bit integer.
All the tilt values won't exceed the range of 32-bit integer.

*/

/*
思路： 采用后序遍历：即左右中。先算最左节点下的两个叶子节点的tilt，把结果加到res中，然后返回这两个叶子节点以及改节点的和，以此类推。
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
var findTilt = function(root) {
    if (root === null) return 0;
    var res = 0;
    
    calTilt(root);
    
    function calTilt(node) {
        if (!node) return 0;
        
        var leftSum = calTilt(node.left);
        var rightSum = calTilt(node.right);
        
        res += Math.abs(leftSum - rightSum);
        return leftSum + rightSum + node.val;
    }
    
    return res;
};