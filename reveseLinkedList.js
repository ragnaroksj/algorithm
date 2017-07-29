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
var reverseList = function(head) {
    if (!head) return head;

    var node = head;
    var previous = null

    while (node) {
        var tmp = node.next;
        node.next = previous;
        previous = node;
        node = tmp;
    }

    return previous; 
};