/*
You need to construct a string consists of parenthesis and integers from a binary tree with the preorder traversing way.

The null node needs to be represented by empty parenthesis pair "()". And you need to omit all the empty parenthesis pairs that don't affect the one-to-one mapping relationship between the string and the original binary tree.

Example 1:
Input: Binary tree: [1,2,3,4]
       1
     /   \
    2     3
   /    
  4     

Output: "1(2(4))(3)"

Explanation: Originallay it needs to be "1(2(4)())(3()())", 
but you need to omit all the unnecessary empty parenthesis pairs. 
And it will be "1(2(4))(3)".
Example 2:
Input: Binary tree: [1,2,3,null,4]
       1
     /   \
    2     3
     \  
      4 

Output: "1(2()(4))(3)"

Explanation: Almost the same as the first example, 
except we can't omit the first parenthesis pair to break the one-to-one mapping relationship between the input and the output.

*/

/**
 * 思路：
 1. node 是否为空，rightNode是否有值，有值的话返回treeString 和（），没有的话直接返回 treeString就可以
 2. 给treeString 添加括号和值，然后左遍历和右遍历，每次都是遍历到叶子然后开始补充')', 最后返回treeString
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */

var tree2str = function(t) {
    if (!t) return "";
    
    var treeString = '';
    return traverse(t, treeString, '', t.right);
};

var traverse = function(node, treeString, nodeBrace, rightNode) {
    if (!node && rightNode) return treeString + '()';
    if (!node && !rightNode) return treeString + '';
    
    treeString += nodeBrace + node.val;
    treeString = traverse(node.left, treeString, '(', node.right); 
    treeString = traverse(node.right, treeString, '(', node.right);

    
    if (nodeBrace) {
        treeString += ')';
    }
    
    return treeString;
}