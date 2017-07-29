/*
Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

[1,2,3,5,7,8]

Your answer

[3,1,7,null,2,5,8]

思路：
取中间值，然后不断拆分转换。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    return arrayToBST(nums, 0, nums.length - 1);
    
    function arrayToBST(num, start, end) {
        if (start > end) return null;
        var mid = start + Math.floor((end - start)/2);
        
        var node = new TreeNode(num[mid]);
        node.left = arrayToBST(num, start, mid - 1);
        node.right = arrayToBST(num, mid + 1, end);
        return node;
    }
};