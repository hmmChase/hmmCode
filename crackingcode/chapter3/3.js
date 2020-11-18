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
}

class SetOfStacks {
  constructor(stackHeight) {
    this.stacks = [];
    this.stackHeight = stackHeight;
  }

  push(element) {
    if (this.stacks.length) {
      this.stacks.forEach(stack => {
        console.log('stack in loop:', stack.stack);
        console.log('stack.stack.length:', stack.stack.length);

        if (stack.stack.length < this.stackHeight) {
          console.log('22222222222');

          stack.stack.push(element);
        } else {
          console.log('create new stack');

          const newStack = new Stack();

          newStack.push(element);

          this.stacks.push(newStack);
        }
      });
    } else {
      console.log('no stacks, create new stack');

      const newStack = new Stack();

      newStack.push(element);

      this.stacks.push(newStack);
    }
  }

  print() {
    console.log(this.stacks);
  }
}

const MySetOfStacks = new SetOfStacks(3);

MySetOfStacks.push(10);
MySetOfStacks.push(11);
MySetOfStacks.push(12);
MySetOfStacks.push(13);
MySetOfStacks.push(14);
MySetOfStacks.push(15);

console.log(MySetOfStacks.print());

// // Stack of plates
// // [[capacity], [capacity]]

// class Stack{
//   constructor(){
//     this.data = [];
//     this.length = 0;
//   }

//   pop(){
//     if(this.data.length === 0){
//       return null;
//     }
//     return this.data.pop();
//   }

//   push(val){
//     this.data.push(val);
//   }

// }

// class SetOfStacks{
//   constructor(capacity){
//     this.container = [];
//     this.capacity = capacity;
//   }
//   //[[stack1], [stack2], [stack3]]

//   getLastStack(){
//     return this.container[this.container.length-1]
//   }

//   pop(){
//     //[[1,1,1],[]]
//     if(this.container.length === 0){
//       return null;
//     }

//     const lastStack = this.getLastStack()
//     const popped = lastStack.pop()
//     if(lastStack.data.length == 0){
//       this.container.pop()
//     }
//     return popped;
//   }

//   push(val){
//     const lastStack = this.getLastStack();

//     if(this.container.length === 0 || lastStack.data.length == this.capacity){
//       console.log('container stack len', this.container.length);

//      const newStack = new Stack()
//       newStack.push(val);
//       this.container.push(newStack);
//     } else{
//       lastStack.push(val);
//     }

//   }
// }
