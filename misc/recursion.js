// create a function which takes a number and
// recursively calls itself to log each number down to zero

// let array = []
// function countdown(number) {
//   // check our base case, if statement
//   if (number < 0) {
//     return;
//   }

//   console.log(number);

//   // get closer to base case
//   number--;

//   // execute function again
//   countdown(number)
// }
// countdown(5);
// -----

// create a function which takes an array of numbers and
// recursively calls itself to sum an array of numbers

// let numbers = [5,10,20]

// function sum(array) {
//   if (!array.length) {
//     return 0;
//   }
//   let num = array.pop()
//   return num + sum(array)
// }
// sum(numbers);
// -----

// create a function which takes a string of characters and
// recursively calls itself to reverse the string

// function reverseString(string) {
//   let stringArray = [...string];
//   if (!stringArray.length) {
//     return '';
//   }
//   let reversedString = stringArray.pop();
//   return reversedString + reverseString(stringArray);
// }
// reverseString('Hello');
// -----

// create a function which takes a number and an exponent and
// recursively calls itself to calculate the product

// function power(base, exponent) {
//   if(exponent === 0) {
//     return 1;
//   }
//   return base * power(base, exponent-1)
// }
// power(2, 7);
// -----

// flatten a nested object so that all the values stored in any array or object is returned in one array

const groceryList = {
  produce: {
    fruit: ['apples', 'bananas', 'avocados'],
    vegetables: ['bell peppers', 'carrots'],
    herbs: ['basil', 'cilantro', 'parsley']
  },
  dairy: {
    milk: ['2 percent milk', 'soy milk'],
    cheese: ['cheddar', 'brie']
  },
  dryGoods: {
    canned: ['vegetable broth', 'diced tomatoes'],
    boxedOrBagged: ['angel hair pasta']
  },
  frozen: {
    vegetables: ['corn', 'peas', 'edamame'],
    desserts: ['ice cream sandwiches']
  }
};
// subproblem
// loop through obj values, push elements into container array

/*


subproblem
- loop through obj, loop through obj, concat arrays into main array



*/

// base case
// loop
//  -subproblem
//  -return result

// const flatten = object => {
//   // get obj keys
//   let objectKeys = Object.keys(object);
//   console.log('objectKeys:', objectKeys)

//   // create flat obj

//   let flat = objectKeys.reduce((acc, item) => {
//     console.log('item:', item)
//     let itemKeys = Object.keys(object[item]);

//     itemKeys.forEach(type => {
//       object[item][type].forEach(listItem => {
//         acc.push(listItem);
//       });
//     });

//     return acc;
//   }, []);

//   return flat;
// };

// const flatArr = [];

const flatten = object => {
  // console.log('object:', object);
  // console.log('typeof: ', typeof object === 'object');

  if (typeof object === 'object')
    for (const key in object) flatten(object[key]);
  else flatArr.push(object);
};

flatten(groceryList);
console.log('flatArr:', flatArr);

// const ex = [1, 2, [4, [3, 11, [22, 34, 56]]], [33, [9, 23, [11, 23]]]];

// const flatArr = [];

// const flatten = object => {
//   if (typeof object === 'object') {
//     for (const key in object) flatten(object[key]);
//   } else flatArr.push(object);
// };

// flatten(ex);
// console.log('flatArr:', flatArr);
