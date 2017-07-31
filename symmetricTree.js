/*
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
But the following [1,2,2,null,3,null,3] is not:
    1
   / \
  2   2
   \   \
   3    3


思路：

非递归解法：按层遍历，每一层检查一下是否对称。

递归解法：

其中左子树和右子树对称的条件：

    两个节点值相等，或者都为空
    左节点的左子树和右节点的右子树对称
    左节点的右子树和右节点的左子树对称
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if( root === null ) return true;
    return isSym(root.left, root.right);
    
};

var isSym = function(leftNode, rightNode){
    if( leftNode === null) return rightNode === null;
    if( rightNode === null ) return leftNode === null;
    if( leftNode.val !== rightNode.val ) return false;
    if( !isSym(leftNode.left, rightNode.right) ) return false;
    if( !isSym(leftNode.right, rightNode.left) ) return false;
    return true
}
