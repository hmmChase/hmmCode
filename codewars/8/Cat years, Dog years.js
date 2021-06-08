// I have a cat and a dog.

// I got them at the same time as kitten / puppy.That was humanYears years ago.

// Return their respective ages now as [humanYears, catYears, dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
//   + 9 cat years for second year
//     + 4 cat years for each year after that
// Dog Years
// 15 dog years for first year
//   + 9 dog years for second year
//     + 5 dog years for each year after that

const humanYearsCatYearsDogYears = function (humanYears) {
  let catYears = 0;

  for (let index = 0; index < humanYears; index++) {
    if (index === 0) catYears = 15;
    if (index === 1) catYears += 9;
    if (index >= 2) catYears += 4;
  }

  let dogYears = 0;

  for (let index = 0; index < humanYears; index++) {
    if (index === 0) dogYears = 15;
    if (index === 1) dogYears += 9;
    if (index >= 2) dogYears += 5;
  }

  return [humanYears, catYears, dogYears];
};

console.log(humanYearsCatYearsDogYears(10));

// describe('Example Tests', function() {
//   it('one', function() {
//     Test.assertSimilar(humanYearsCatYearsDogYears(1), [1, 15, 15]);
//   });

//   it('two', function() {
//     Test.assertSimilar(humanYearsCatYearsDogYears(2), [2, 24, 24]);
//   });

//   it('ten', function() {
//     Test.assertSimilar(humanYearsCatYearsDogYears(10), [10, 56, 64]);
//   });
// });

// top;
// const humanYearsCatYearsDogYears = humanYears => [
//   humanYears,
//   (humanYears - 1 ? 16 : 11) + 4 * humanYears,
//   (humanYears - 1 ? 14 : 10) + 5 * humanYears
// ];
