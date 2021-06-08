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

// -------------------------------------------------

// first in, first out

// Inputs:
// item
// number of times to put in
// number of times to take out

const queueWhile = (item, inputAmt, outputAmt) => {
  const stack = [];

  let count = 0;

  while (count < inputAmt) {
    stack.push(item);

    console.log('stack:', stack);

    count++;
  }

  while (count >= outputAmt) {
    stack.pop();

    console.log('stack:', stack);

    count--;
  }
};

console.log(stackWhile('item', 5, 3));

const queueFor = (item, inputAmt, outputAmt) => {
  const stack = [];

  let count = 0;

  for (; count < inputAmt; count++) {
    stack.push(item);

    console.log('stack:', stack);
  }

  for (; count >= outputAmt; count--) {
    stack.pop();

    console.log('stack:', stack);
  }
};

console.log(queueFor('item', 5, 3));

const queueRecurse = (item, inputAmt, outputAmt) => {
  const stack = [];

  let count = 0;

  const lastIn = () => {
    if (count < inputAmt) {
      stack.push(item);

      console.log('stack:', stack);

      count++;

      lastIn(count);
    }
  };

  const firstOut = () => {
    if (count >= outputAmt) {
      stack.pop();

      console.log('stack:', stack);

      count--;

      firstOut(count);
    }
  };

  lastIn();

  firstOut();
};

console.log(queueRecurse('item', 5, 3));
