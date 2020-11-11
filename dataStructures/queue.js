class Stack {
  constructor() {
    this.stack = [];
  }

  insert(element) {
    this.stack.unshift(element);
  }

  remove() {
    if (this.stack.length == 0) return 'Underflow';

    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length == 0;
  }

  print() {
    let str = '';

    for (let i = 0; i < this.stack.length; i++) str += this.stack[i] + ' ';

    return str;
  }
}

const MyStack = new Stack();

console.log(MyStack.isEmpty());

console.log(MyStack.remove());

MyStack.insert(10);
MyStack.insert(20);
MyStack.insert(30);

console.log(MyStack.print());
