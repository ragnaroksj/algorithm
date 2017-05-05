/*
* Add Two Numbers
* https://leetcode.com/problems/add-two-numbers/#/description
* 
* Description:
* You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add * * the two numbers and return it as a linked list.
* You may assume the two numbers do not contain any leading zero, except the number 0 itself.
* Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
* Output: 7 -> 0 -> 8
* 
*/

/**
 * 思路：
 * 取余值创建新节点，向下取整创建进位，操作完后所有节点往后移，注意判断两个输入的next是否有值，最后判断carry，并且最后节点next赋值null
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
var addTwoNumbers = function(l1, l2) {
    if (l1.val === 0 && l1.next === null) return l2;
    if (l2.val === 0 && l2.next === null) return l1;
    
    var result = new ListNode(0);
    var head = result
    var carry = 0;
    
    while(l1 || l2) {
        var num1 = l1 === null ? 0 : l1.val;
        var num2 = l2 === null ? 0 : l2.val;
        var newNode = new ListNode( (num1 + num2 + carry)%10 );
        carry = Math.floor((num1 + num2 + carry)/10);
        result.next = newNode;
        result = result.next;
        l1 = l1 === null ? null : l1.next;
        l2 = l2 === null ? null : l2.next;
    }
    
    if (carry) {
        result.next = new ListNode(carry);
        result = result.next;
    }
    
    result.next = null;
    
    return head.next;
};