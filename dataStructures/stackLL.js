class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
  }

  push(data) {
    if (this.head === null) this.head = new Node(data);
    else {
      const newNode = new Node(data);

      newNode.next = this.head;

      this.head = newNode;
    }
  }

  pop() {
    if (this.isEmpty()) return null;
    else {
      const poppedNode = this.head;

      this.head = this.head.next;

      poppedNode.next = null;

      return poppedNode.data;
    }
  }

  peek() {
    if (this.isEmpty()) return None;
    else return this.head.data;
  }

  isEmpty() {
    return this.head === null;
  }

  print() {
    let node = this.head;

    while (node) {
      console.log(node.data);

      node = node.next;
    }
  }
}

MyStack = new Stack();

MyStack.push(11);
MyStack.push(22);
MyStack.push(33);
MyStack.push(44);

MyStack.print();

console.log('----------');

MyStack.pop();

MyStack.print();

console.log('----------');

console.log(MyStack.peek());

console.log('----------');

console.log(MyStack.isEmpty());
