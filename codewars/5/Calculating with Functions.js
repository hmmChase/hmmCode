// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// JavaScript:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Ruby:

// seven(times(five)) # must return 35
// four(plus(nine)) # must return 13
// eight(minus(three)) # must return 5
// six(divided_by(two)) # must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Divison should be integer division, e.g eight(dividedBy(three()))/eight(divided_by(three)) should return 2, not 2.666666...

const expr = (num, op) => {
  if (!op) return num;

  return op(num);
};

function zero(op) {
  return expr(0, op);
}
function one(op) {
  return expr(1, op);
}
function two(op) {
  return expr(2, op);
}
function three(op) {
  return expr(3, op);
}
function four(op) {
  return expr(4, op);
}
function five(op) {
  return expr(5, op);
}
function six(op) {
  return expr(6, op);
}
function seven(op) {
  return expr(7, op);
}
function eight(op) {
  return expr(8, op);
}
function nine(op) {
  return expr(9, op);
}

function plus(x) {
  return function(y) {
    return y + x;
  };
}
function minus(x) {
  return function(y) {
    return y - x;
  };
}
function times(x) {
  return function(y) {
    return y * x;
  };
}
function dividedBy(x) {
  return function(y) {
    return Math.floor(y / x);
  };
}

// console.log(seven(times(five())));

// Test.assertEquals(seven(times(five())), 35);
// Test.assertEquals(four(plus(nine())), 13);
// Test.assertEquals(eight(minus(three())), 5);
// Test.assertEquals(six(dividedBy(two())), 3);

// const n = digit => {
//   return function(op) {
//     return op ? op(digit) : digit;
//   };
// };
// var zero = n(0);
// var one = n(1);
// var two = n(2);
// var three = n(3);
// var four = n(4);
// var five = n(5);
// var six = n(6);
// var seven = n(7);
// var eight = n(8);
// var nine = n(9);

// function plus(r) {
//   return function(l) {
//     return l + r;
//   };
// }
// function minus(r) {
//   return function(l) {
//     return l - r;
//   };
// }
// function times(r) {
//   return function(l) {
//     return l * r;
//   };
// }
// function dividedBy(r) {
//   return function(l) {
//     return l / r;
//   };
// }
