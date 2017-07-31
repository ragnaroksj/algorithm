/*
Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).”

        _______6______
       /              \
    ___2__          ___8__
   /      \        /      \
   0      _4       7       9
         /  \
         3   5
For example, the lowest common ancestor (LCA) of nodes 2 and 8 is 6. Another example is LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if( root === null || p === null || q === null ) return [];
    if( root === p || root === q ) return root;
    var pPath = [], qPath = [];
    
    if( !(getNodePath(root, p, pPath) && getNodePath(root, q, qPath))  ){
        return [];
    }
    
    
    var lastCommonPath = root;
    while( pPath.length && qPath.length ){
        var lastPPath = pPath.shift();
        var lastQPath = qPath.shift();
        if( lastPPath === lastQPath ) {
            lastCommonPath = lastPPath;
        }else{
            return lastCommonPath;
        } 
    }
    
    return lastcommonPath;
    
}

function getNodePath(t, node, pathArray){
    if( t === null || node === null) return false;
    
    if( t === node ){
        pathArray.push( t );
        return true;
    }
    
    var found = false;
    pathArray.push( t );
    found = getNodePath(t.left, node, pathArray);
    if( !found ){
        found = getNodePath(t.right, node, pathArray);
    }
    if( !found ){
        pathArray.pop();
    }
    
    return found;
}
