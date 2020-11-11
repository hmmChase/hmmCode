class Stack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val) {
    this.stack.push(val);

    if (this.minStack.length === 0) return this.minStack.push(val);

    if (this.min() >= val) this.minStack.push(val);
  }

  pop() {
    const val = this.stack.pop();

    if (this.min() === val) this.minStack.pop();

    return val;
  }

  min() {
    return this.minStack[this.minStack.length - 1];
  }
}

// 3,2,2,3

const MyStack = new Stack();

console.log('MyStack:', MyStack);

MyStack.push(3);
MyStack.push(2);
MyStack.push(2);
MyStack.push(3);

console.log('MyStack:', MyStack);

console.log(MyStack.min());
