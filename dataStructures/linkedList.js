class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head;
    this.size = 0;
  }

  // Insert at beginning
  unshift(data) {
    this.head = new Node(data, this.head);

    this.size++;
  }

  // Insert at end
  push(data) {
    let node = new Node(data);

    let current;

    // if empty, make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      // loop through list
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }

  // Insert at index
  insertAt(data, index) {
    // If index is out of range
    if (index > 0 && index > this.size) return;

    // If first index
    if (index === 0) {
      this.unshift(data, this.head);

      return;
    }

    // create node
    const node = new Node(data);

    let current, previous;

    // set current to first
    current = this.head;
    let indexPos = 0;

    while (indexPos < index) {
      previous = current; // node before index

      indexPos++;

      current = current.next; // node after index
    }

    // Point previous node to new node
    previous.next = node;

    // Point new node to current node
    node.next = current;
  }

  // Get at index
  getAt(index) {
    let current = this.head;
    let indexPos = 0;

    while (current) {
      if (indexPos === index) console.log(`index ${index}: `, current.data);

      indexPos++;

      current = current.next;
    }

    return null;
  }

  removeAt(index) {
    let current = this.head;
    let previous;
    let indexPos = 0;

    // If index is out of range
    if (index > 0 && index > this.size) return;

    // If index is first
    if (index === 0) {
      // Remove first index
      this.head = current.next;
    } else {
      while (indexPos < index) {
        indexPos++;

        previous = current;

        current = current.next;
      }

      previous.next = current.next;
    }

    this.size--;
  }

  clearList() {
    this.head = null;
    this.size = 0;
  }

  print() {
    let current = this.head;

    while (current) {
      console.log(current.data);

      current = current.next;
    }

    return;
  }
}

const ll = new LinkedList();

ll.unshift(100);
ll.push(500);
ll.unshift(200);
ll.unshift(400);
ll.insertAt(300, 2);

ll.getAt(3);

// ll.removeAt(3);

// ll.clearList();

// console.log('ll:', ll);
// console.log('head:', ll.head);
console.log('print:', ll.print());

//-----------------------------

// // runner technique

// const a2 = new Node(1);

// const b2 = new Node(2);

// const c2 = new Node(3);

// const d2 = new Node(1);

// const e2 = new Node(2);

// a2.setNext = b2;

// b2.setNext = c2;

// c2.setNext = d2;

// d2.setNext = e2;

// const rl = new LinkedList(a2);

// // 2nd to last; k=2

// function kthToLast(k, linkedList) {
//   // we need 2 pointers

//   let a = linkedList.head; // main pointer

//   let b = linkedList.head; // runner

//   while (a.next) {
//     // k=2
//     // if we should advance b

//     k--; // k=1, k=0

//     if (k <= 0) {
//       // k=1 no, k=0 yes
//       b = b.next;
//     }

//     a = a.next;
//   }

//   // output runner.data
//   console.log(b.data);
// }

// kthToLast(2, rl);
