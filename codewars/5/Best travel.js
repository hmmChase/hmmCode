// John and Mary want to travel between a few towns A, B, C ... Mary has on a sheet of paper a list of distances between these towns. ls = [50, 55, 57, 58, 60]. John is tired of driving and he says to Mary that he doesn't want to drive more than t = 174 miles and he will visit only 3 towns.

// Which distances, hence which towns, they will choose so that the sum of the distances is the biggest possible

// to please Mary and John- ?
// Example:

// With list ls and 3 towns to visit they can make a choice between: [50,55,57],[50,55,58],[50,55,60],[50,57,58],[50,57,60],[50,58,60],[55,57,58],[55,57,60],[55,58,60],[57,58,60].

// The sums of distances are then: 162, 163, 165, 165, 167, 168, 170, 172, 173, 175.

// The biggest possible sum taking a limit of 174 into account is then 173 and the distances of the 3 corresponding towns is [55, 58, 60].

// The function chooseBestSum (or choose_best_sum or ... depending on the language) will take as parameters t (maximum sum of distances, integer >= 0), k (number of towns to visit, k >= 1) and ls (list of distances, all distances are positive or null integers and this list has at least one element). The function returns the "best" sum ie the biggest possible sum of k distances less than or equal to the given limit t, if that sum exists, or otherwise nil, null, None, Nothing, depending on the language. With C++, C, Rust, Swift, Go, Kotlin return -1.

// Examples:

// ts = [50, 55, 56, 57, 58] choose_best_sum(163, 3, ts) -> 163

// xs = [50] choose_best_sum(163, 3, xs) -> nil (or null or ... or -1 (C++, C, Rust, Swift, Go)

// ys = [91, 74, 73, 85, 73, 81, 87] choose_best_sum(230, 3, ys) -> 228

function chooseBestSum(maxDistSum, numTownsVisit, townDistArr) {
  if (townDistArr.length < 3) return null;

  let distSum = 0;

  const recursive = (maxDistSum, numTownsVisit, townDistArr, start, path) => {
    console.log('start: ', start);
    console.log('path: ', path);

    if (path.length === numTownsVisit) {
      console.log(path.length === numTownsVisit);

      let sum = path.reduce((accum, ele) => {
        return accum + ele;
      }, 0);
      console.log(': recursive -> sum', sum);

      if (sum <= maxDistSum && sum > distSum) {
        distSum = sum;
      }

      console.log('break1');

      return;
    }

    for (let i = start; i < townDistArr.length; i++) {
      console.log(
        ': recursive -> i < townDistArr.length',
        i < townDistArr.length
      );
      console.log('asdf');

      console.log(': recursive -> townDistArr[i]', townDistArr[i]);
      console.log(': recursive -> path1', path);

      path.push(townDistArr[i]);
      console.log(': recursive -> path2', path);

      recursive(maxDistSum, numTownsVisit, townDistArr, i + 1, path);

      console.log('break2');

      path.pop();
      console.log(': recursive -> path3', path);
    }

    console.log('out of forloop');
  };

  recursive(maxDistSum, numTownsVisit, townDistArr, 0, []);

  return distSum === 0 ? null : distSum;
}

console.log(chooseBestSum(174, 4, [50, 55, 57, 58, 60]));

// Test.describe("chooseBestSum",function() {
//   Test.it("Basic tests ",function() {
//     var ts = [50, 55, 56, 57, 58]
//     Test.assertEquals(chooseBestSum(163, 3, ts), 163)
//     ts = [50]
//     Test.assertEquals(chooseBestSum(163, 3, ts), null)
//     ts = [91, 74, 73, 85, 73, 81, 87]
//     Test.assertEquals(chooseBestSum(230, 3, ts), 228)
// })})

/*
loop over each element
add element to sum
check

keep track of sums
keep track of array
if sum === t, return array
if sum is greater than current sum, update sum and array
*/
