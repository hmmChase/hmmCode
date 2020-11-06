class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  prepend(data) {
    this.head = new Node(data, this.head);
  }

  print() {
    let node = this.head;

    while (node) {
      console.log(node.data);

      node = node.next;
    }
  }
}

const ll = new LinkedList();

ll.prepend(6);
ll.prepend(5);
ll.prepend(4);
ll.prepend(3);
ll.prepend(2);
ll.prepend(1);

ll.print();

function kthToLast(linkedList, k) {
  // we need 2 pointers

  // declare one var that will move ahead k spaces, declare another var that will lag behind

  let slow = linkedList.head; // main pointer

  let fast = linkedList.head; // runner

  // loop while k is greater than zero, move faster var one node, decrement kthFromLast
  while (k > 1) {
    fast = fast.next;

    k--; // k=1, k=0
  }

  // move vars same pace
  while (fast.next) {
    slow = slow.next;

    fast = fast.next;
  }

  return slow;
}

console.log(kthToLast(ll, 2));
