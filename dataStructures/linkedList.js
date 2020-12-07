class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
  }

  // Insert at beginning
  // 1. instantiate a new node
  //   - pass in the first node (head), so it can be set as the next pointer
  // 2. make the new node the head
  // 3. increase the size count

  unshift(data) {
    // 1, 2
    this.head = new Node(data, this.head);

    // 3
    this.size++;
  }

  // Insert at end
  // 1. instantiate a new node
  //   - doesn't have a next
  // 2. if list is empty, set new node as head
  // 3. get beginning of list by declaring current node and set as head
  //   - used to iterate through nodes
  // 4. loop through nodes, until you get to the one without a next
  // 5. set the next pointer to the new node
  // 6. increase the size count

  push(data) {
    // 1
    let node = new Node(data);

    // 2
    if (!this.head) this.head = node;
    else {
      // 3
      let currentNode = this.head;

      // 4
      while (currentNode.next) currentNode = currentNode.next;

      // 5
      currentNode.next = node;
    }

    // 6
    this.size++;
  }

  // Insert at index
  // 1. check if the index exists
  // 2. if index is 0, insert at beginning
  // 3. instantiate a new node
  // 4. declare previous node place holder
  // 5. declare index position tracker
  // 6. declare current node and set to head
  // 7. loop through nodes, while the current index < target index
  // 8. set the previous node to the current node
  //   -  so previous node becomes current index position node
  // 9. set the current node to the next index position node
  // 10. increment the index position
  // 11. once at target index, point previous node to new node
  // 12. point new node to the current node
  // 13. increase the size count

  insertAt(data, indexTarget) {
    // 1
    if (indexTarget > 0 && indexTarget > this.size - 1)
      return console.log('out of range');

    // 2
    if (indexTarget === 0) this.unshift(data, this.head);
    else {
      // 3
      const node = new Node(data);

      // 4
      let previousNode;

      // 5
      let indexPos = 0;

      // 6
      let currentNode = this.head;

      // 7
      while (indexPos < indexTarget) {
        // 8
        previousNode = currentNode;

        // 9
        currentNode = currentNode.next;

        // 10
        indexPos++;
      }

      // 11
      previousNode.next = node;

      // 12
      node.next = currentNode;

      // 13
      this.size++;
    }
  }

  // Read at specified index
  // 1. check if the index exists
  // 2. declare index position tracker
  // 3. declare current node and set to head
  // 4. loop through nodes, while the current index < target index
  // 5. set the current node to the next index position node
  // 6. increment the index position
  // 7. log the current nodes data

  readAtIndex(indexTarget) {
    // 1
    if (indexTarget > 0 && indexTarget > this.size - 1)
      return console.log('out of range');

    // 2
    let indexPos = 0;

    // 3
    let currentNode = this.head;

    // 4
    while (indexPos < indexTarget) {
      // 5
      currentNode = currentNode.next;

      // 6
      indexPos++;
    }

    // 7
    console.log(`index ${indexTarget}: `, currentNode.data);
  }

  removeAt(indexTarget) {
    let previousNode;
    let currentNode = this.head;
    let indexPos = 0;

    // If index is out of range
    if (indexTarget > 0 && indexTarget > this.size - 1)
      return console.log('out of range');

    // If target index is first
    // Remove first index
    if (indexTarget === 0) this.head = currentNode.next;
    else {
      while (indexPos < indexTarget) {
        previousNode = currentNode;

        currentNode = currentNode.next;

        indexPos++;
      }

      previousNode.next = currentNode.next;
    }

    this.size--;
  }

  clearList() {
    this.head = null;
    this.size = 0;
  }

  print() {
    let currentNode = this.head;
    let indexPos = 0;

    while (currentNode) {
      console.log('index:', indexPos, 'data:', currentNode.data);

      currentNode = currentNode.next;

      indexPos++;
    }

    return 'end of list';
  }
}

module.exports = LinkedList;

const ll = new LinkedList();

ll.unshift(100);
ll.push(500);
ll.unshift(200);
ll.unshift(400);
ll.insertAt(300, 3);

ll.readAtIndex(3);

// ll.removeAt(3);

// ll.clearList();

// console.log('ll:', ll);
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
