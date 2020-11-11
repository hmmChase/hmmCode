class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
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

console.log(MyStack.pop());

MyStack.push(10);
MyStack.push(20);
MyStack.push(30);

console.log(MyStack.print());
