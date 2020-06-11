// All of the animals are having a feast! Each animal is bringing one dish.There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters.beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string.They will not contain numerals.

function feast(beast, dish) {
  const beastArr = beast.split('');
  const dishArr = dish.split('');

  return (
    beastArr.shift() === dishArr.shift() && beastArr.pop() === dishArr.pop()
  );
}

feast('brown bear', 'bear claw');
console.log(
  ' -------------------------------------------------------------------'
);
console.log(
  ' feast(brown bear, bear claw)',
  feast('chickadee', 'chocolate cake')
);
console.log(
  ' -------------------------------------------------------------------'
);

// Test.assertEquals(feast('great blue heron', 'garlic naan'), true);
// Test.assertEquals(feast('chickadee', 'chocolate cake'), true);
// Test.assertEquals(feast('brown bear', 'bear claw'), false);

// top;
// function feast(beast, dish) {
//   return (
//     beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
//   );
// }
