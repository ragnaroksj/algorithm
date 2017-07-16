/*
Given a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus sum of all keys greater than the original key in BST.

Example:

Input: The root of a Binary Search Tree like this:
              5
            /   \
           2     13

Output: The root of a Greater Tree like this:
             18
            /   \
          20     13
 */

/*
思路：
二查搜索树，节点大于左子节点小于右子节点，先是遍历到最后一个右节点，因为右边的数最大，所以设置一个sum，往回加，注意sum要全局
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
 * @return {TreeNode}
 */ 

    
var convertBST = function(root) {
    var sum = 0;
    convertGreaterBST(root);
    
    function convertGreaterBST(node) {
        if (node === null) return null;
        convertGreaterBST(node.right);
        sum += node.val;
        node.val = sum;
        convertGreaterBST(node.left);
    }
    
    return root;
};



