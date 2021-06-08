// Notes:
// hold the smallest item as a variable, put the rest into the other stack.
// pop back the stack, place the smallest item into the bottom, and repeat.
// when completed, pop back into original stack.

/*
Interface:
- push(value)
- pop()
- peek()
- isEmpty()
- size()
*/

class Stack {
  constructor() {
    this._data = [];
  }

  size() {
    return this._data.length;
  }

  isEmpty() {
    return this.size() == 0;
  }

  push(value) {
    this._data.push(value);
  }

  pop() {
    return this._data.pop();
  }

  peek() {
    if (this.isEmpty()) return null;
    return this._data[this.size() - 1];
  }

  _toArray() {
    return this._data;
  }
}

var sortStack = function (stack) {
  var tempStack = new Stack();
  var currMin = Infinity;
  var stackDepth = 0;

  while (!stack.isEmpty()) {
    if (stack.peek() <= currMin) {
      if (currMin !== Infinity) {
        tempStack.push(currMin);
      }
      currMin = stack.pop();
    } else {
      tempStack.push(stack.pop());
    }
    stackDepth++;
  }

  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop());
  }

  tempStack.push(currMin);
  currMin = Infinity;
  stackDepth--;

  while (stackDepth > 0) {
    while (!stack.isEmpty()) {
      if (stack.peek() <= currMin) {
        if (currMin !== Infinity) {
          tempStack.push(currMin);
        }
        currMin = stack.pop();
      } else {
        tempStack.push(stack.pop());
      }
    }

    for (var i = 0; i < stackDepth - 1; i++) {
      stack.push(tempStack.pop());
    }

    tempStack.push(currMin);
    currMin = Infinity;
    stackDepth--;
  }

  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop());
  }

  return stack;
};

/* TEST */
var s = new Stack();
s.push(99);
s.push(4);
s.push(1);
s.push(6);
s.push(8);
s.push(10);
s.push(22);
s.push(3);
s.push(72);

var sortS = sortStack(s);

while (!sortS.isEmpty()) {
  console.log(sortS.pop());
}

// --------------------------------------------------------

const isEmpty = stack => !stack.length;
const peek = stack => stack[stack.length - 1];

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// MY SOLUTION

const sort = (stack, value) => {
  let index = 0;
  while (value < stack[index]) index++;
  stack.splice(index, 0, value);
};

export const sortStack1 = stack => {
  if (!Array.isArray(stack)) throw Error('Invalid input');

  const newStack = [stack.pop()];
  while (!isEmpty(stack)) sort(newStack, stack.pop());
  return newStack;
};

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// BOOK SOLUTION
// MOVES NUMBERS BACK AND FORTH BETWEEN STACK AND TEMP TO SORT

export const sortStack2 = stack => {
  if (!Array.isArray(stack)) throw Error('Invalid input');

  const temp = [];
  while (!isEmpty(stack)) {
    const popped = stack.pop();
    while (!isEmpty(temp) && peek(temp) > popped) {
      stack.push(temp.pop());
    }
    temp.push(popped);
  }

  while (!isEmpty(temp)) stack.push(temp.pop());

  return stack;
};
