/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode reverseBetween(ListNode head, int m, int n) {
        ListNode dumy = new ListNode(0);
        dumy.next = head;
        head = dumy;
        for(int i = 1; i < m; i++) {
            head = head.next;
        }
        ListNode headOfSubList = head.next;
        ListNode nodeBeforeList = head;
        ListNode nextNode = head.next.next;
        ListNode currNode = head.next;
        for(int i = m; i < n; i++) {
            ListNode temp = nextNode.next;
            nextNode.next = currNode;
            currNode = nextNode;
            nextNode = temp;
        }
        nodeBeforeList.next = currNode;
        headOfSubList.next = nextNode;
        return dumy.next;
    }
}