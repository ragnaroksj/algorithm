/**
 * Binary Tree Paths
 
 Given a binary tree, return all root-to-leaf paths.

	For example, given the following binary tree:

   1
 /   \
2     3
 \
  5

All root-to-leaf paths are:

["1->2->5", "1->3"]
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
	var res = [];

	if (!root) return [];

	traverse(root, root.val.toString());
	
	function traverse(node, path) {
		var isLeaf = true;

		if (node.left) {
			isLeaf = false;
			traverse(node.left, path + '->' + node.left.val);
		}

		if (node.right) {
			isLeaf = false;
			traverse(node.right, path + '->' + node.right.val);
		}

		if (isLeaf) {
			res.push(path);
		}
	}

	return res;
}