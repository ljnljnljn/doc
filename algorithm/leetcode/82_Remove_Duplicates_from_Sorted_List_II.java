/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode deleteDuplicates(ListNode head) {
        ListNode prev = new ListNode(0);
        prev.next = head;
        ListNode start = prev;
        ListNode curr = head;
        while(curr != null) {
            while(curr.next != null && curr.val == curr.next.val) {
                curr = curr.next;
            }
            if(start.next == curr) {
                start = start.next;
            }else {
                start.next = curr.next;
            }
            curr = curr.next;
        }
        return prev.next;
    }
}