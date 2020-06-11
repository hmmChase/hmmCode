// Sheldon, Leonard, Penny, Rajesh and Howard are in the queue for a "Double Cola" drink vending machine; there are no other people in the queue. The first one in the queue (Sheldon) buys a can, drinks it and doubles! The resulting two Sheldons go to the end of the queue. Then the next in the queue (Leonard) buys a can, drinks it and gets to the end of the queue as two Leonards, and so on.

// For example, Penny drinks the third can of cola and the queue will look like this:

// Rajesh, Howard, Sheldon, Sheldon, Leonard, Leonard, Penny, Penny
// Write a program that will return the name of the person who will drink the n-th cola.

// Input
// The input data consist of an array which contains at least 1 name, and single integer n which may go as high as the biggest number your language of choice supports (if there's such limit, of course).

// Output / Examples
// Return the single line — the name of the person who drinks the n-th can of cola. The cans are numbered starting from 1.

// whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 1) == "Sheldon"
// whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52) == "Penny"
// whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7230702951) == "Leonard"

// function whoIsNext(names, r) {
//   while (names.length + 1 <= r) {
//     console.log(': whoIsNext -> names.length + 1', names.length + 1);
//     console.log(': whoIsNext -> r', r);
//     const shifted = names.shift();
//     names.push(shifted);
//     names.push(shifted);

//     console.log(names);
//   }
//   return names[r - 1];
// }

function whoIsNext(names, r) {
  let namesLength = names.length;
  console.log(': whoIsNext -> namesLength', namesLength);

  // while r is greater than or equal length of array
  // reduce r by namesLength value and then double namesLength

  // you always append twice the amount of names each time you went through everyone
  // get the highest combination by a power of 2 lower than your checking number

  while (r >= namesLength) {
    console.log(': whoIsNext -> r1', r);
    console.log(': whoIsNext -> namesLength1', namesLength);

    // reduce the drink count of everyone each time
    // reduce r by namesLength
    r = r - namesLength;
    console.log(': whoIsNext -> r2', r);

    // double the size of the array each time
    // double namesLength
    namesLength = namesLength * 2;
    console.log(': whoIsNext -> namesLength2', namesLength);

    // stop when number of remaining drinks is less than the amount of people needing to drink another round
    console.log(r >= namesLength);
  }
  console.log('while end');

  console.log(': whoIsNext -> r3', r);
  console.log(': whoIsNext -> namesLength3', namesLength);

  // calculate back until you get a number between 0 and 4 to get the index

  const numPplXr = names.length * r;
  console.log(': whoIsNext -> numPplXr //5*17', numPplXr);

  const idx = numPplXr / namesLength;
  console.log(': whoIsNext -> idx //85/40', idx);

  // round up and subtract 1 for index
  const idxCeil = Math.ceil(idx) - 1;
  console.log(': whoIsNext -> idxCeil', idxCeil);

  return names[idxCeil];
}

let names = ['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard'];

console.log(whoIsNext(names, 52));

// Test.assertEquals(whoIsNext(names, 1), "Sheldon");

/*
  shift element
  push x 2
  while length <= r

  for iteration
*/
