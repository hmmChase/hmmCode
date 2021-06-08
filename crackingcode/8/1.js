/*
steps = 10;

   step 10
       /|\
     9+8+7
   /|\
 8+7+6

base case:
if (n === 0) return ways++
if (n < 0) return

return step(n-1) + step(n-2) + step(n-3)
 */

// const countWays = n => {
//   if (n < 0) return 0;
//   else if (n === 0) return 1;
//   else return countWays(n - 1) + countWays(n - 2) + countWays(n - 3);
// };

const countWays = (n, cache = {}) => {
  if (n < 0) return 0;
  else if (n === 0) return 1;
  else if (cache[n] > -1) return cache[n];
  else {
    cache[n] =
      countWays(n - 1, cache) +
      countWays(n - 2, cache) +
      countWays(n - 3, cache);

    return cache[n];
  }
};

console.log(countWays(10));
