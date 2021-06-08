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

//-------------------------------------------------------

// last in, first out

// Inputs:
// item
// number of times to put in
// number of times to take out

const stackWhile = (item, inputAmt, outputAmt) => {
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

const stackFor = (item, inputAmt, outputAmt) => {
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

console.log(stackFor('item', 5, 3));

const stackRecurse = (item, inputAmt, outputAmt) => {
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

console.log(stackRecurse('item', 5, 3));
