/*
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if( l1 === null ) return l2;
    if( l2 === null ) return l1;
    if( l1 === null && l2 === null ) return null;
    
    var head = new ListNode(0);
    var newList = head;
    var temp = null;
    
    while( l1 !== null && l2 !== null ){
        if( l1.val <= l2.val ){
            temp = l1;
            l1 = l1.next;
        }else{
            temp = l2;
            l2 = l2.next;
        }
        
        newList.next = temp;
        newList = newList.next;
    }
    
    newList.next = l1 === null ? l2 : l1;
    return head.next;
};

