/*
Given a sorted linked list, delete all duplicates such that each element appear only once.

For example,
Given 1->1->2, return 1->2.
Given 1->1->2->3->3, return 1->2->3.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (!head) return null
    
    var p = head;
    var c = head.next;
    while (c) {
        if (c.val !==  p.val) {
            p = c;
            c = c.next;
        } else {
            p.next = c.next;
            c = c.next;
        }
    }
    
    return head;    
};