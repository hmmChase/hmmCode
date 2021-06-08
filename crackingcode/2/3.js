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

  delete(node) {
    let next = node.next;

    // set the nodes data to node.next.data
    node.data = next.data;

    // point node to next next node
    node.next = next.next;
  }

  getMiddle() {
    return this.head.next.next.next;
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

const middleNode = ll.getMiddle();
console.log('middleNode:', middleNode);

ll.delete(middleNode);

ll.print();
