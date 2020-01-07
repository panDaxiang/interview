/* 
给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 
逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
您可以假设除了数字 0 之外，这两个数都不会以 0 开头。 */

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

function addTwoNumbers(l1, l2) {
  if (l1 === null) return l2;
  if (l2 === null) return l1;
  let head = new ListNode(null);
  let carry = 0,
    curNode = head;
  while (l1 !== null || l2 !== null || carry !== 0) {
    let l1Val = l1 === null ? 0 : l1.val;
    let l2Val = l2 === null ? 0 : l2.val;

    let sumVal = l1Val + l2Val + carry;
    carry = sumVal > 9 ? 1 : 0;

    if (curNode.val === null) {
      curNode.val = sumVal % 10;
    } else {
      curNode.next = new ListNode(sumVal % 10);
      curNode = curNode.next;
    }

    l1 = l1 === null ? null : l1.next;
    l2 = l2 === null ? null : l2.next;
  }

  return head;
}
