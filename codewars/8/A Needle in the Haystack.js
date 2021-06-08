// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])

// should return

// "found the needle at position 5"

// for loop
const findNeedleFor = haystack => {
  const length = haystack.length;

  for (let index = 0; index < length; index++) {
    const element = haystack[index];

    if (element === 'needle') return 'found the needle at position ' + index;
  }
};

// while loop
const findNeedleWhile = haystack => {
  let index = 0;
  const length = haystack.length;

  while (index < length) {
    const element = haystack[index];

    if (element === 'needle') return 'found the needle at position ' + index;

    index++;
  }
};

// recursion
const findNeedleRecurse = (haystack, index = 0) => {
  const length = haystack.length;

  const element = haystack[index];

  if (element === 'needle') return 'found the needle at position ' + index;

  if (index === length - 1) return 'not found';

  return findNeedleRecurse(haystack, index + 1);
};

// indexOf
const findNeedleIndexOf = haystack => {
  const index = haystack.indexOf('needle');

  return 'found the needle at position ' + index;
};

var haystack_1 = [
  'gfcnfsg',
  '123124234',
  undefined,
  'needle',
  'world',
  'hay',
  2,
  'k.k.',
  true,
  false
];

var haystack_2 = [
  '283497238987234',
  'a dog',
  'a cat',
  'some random junk',
  'a piece of hay',
  'needle',
  'something somebody lost a while ago'
];

var haystack_3 = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  8,
  7,
  5,
  4,
  3,
  4,
  5,
  6,
  67,
  5,
  5,
  3,
  3,
  4,
  2,
  34,
  234,
  23,
  4,
  234,
  324,
  324,
  'needle',
  1,
  2,
  3,
  4,
  5,
  5,
  6,
  5,
  4,
  32,
  3,
  45,
  54
];

findNeedleIndexOf(haystack_3);
findNeedleFor(haystack_3);
findNeedleWhile(haystack_3);
findNeedleRecurse(haystack_3);
