// https://leetcode.com/problems/delete-node-in-a-linked-list/

// definition for singly linked list
// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }

function deleteNode(node) {
    while (true) {
        if (node.next != null) node.val = node.next.val;
        if (node.next.next == null) {
            node.next = null;
            break;
        }
        node = node.next;
    }
}

// time complexity
// O(n)
// space complexity
// O(1)
