class Node {
  constructor(data) {
    this.data = data;
  }

  setNext(node) {
    this.next = next;

    node.parent = this;
  }
}

const a1 = new Node(1);

const b1 = new Node(2);

const c1 = new Node(3);

a1.setNext = b1;

b1.setNext = c1;

class LinkedList {
  constructor(head) {
    this.head = head;
  }
}

const ll = new LinkedList(a1);

// console.log('ll:', ll);

// console.log('ll:', ll.head);

// deleting a node

// b.next.parent = b.parent

//-----------------------------

// runner technique

const a2 = new Node(1);

const b2 = new Node(2);

const c2 = new Node(3);

const d2 = new Node(1);

const e2 = new Node(2);

a2.setNext = b2;

b2.setNext = c2;

c2.setNext = d2;

d2.setNext = e2;

const rl = new LinkedList(a2);

// 2nd to last; k=2

function kthToLast(k, linkedList) {
  // we need 2 pointers

  let a = linkedList.head; // main pointer

  let b = linkedList.head; // runner

  while (a.next) {
    // k=2
    // if we should advance b

    k--; // k=1, k=0

    if (k <= 0) {
      // k=1 no, k=0 yes
      b = b.next;
    }

    a = a.next;
  }

  // output runner.data
  console.log(b.data);
}

kthToLast(2, rl);
