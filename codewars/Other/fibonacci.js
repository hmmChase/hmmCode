const fibonacci = i => {
  if (i === 0) return 0;
  if (i === 1) return 1;

  return fibonacci(i - 1) + fibonacci(i - 2);
};

console.log('fibonacci: ', fibonacci(10)); // O(2^n)

// dynamic (memoization)
const fibDynamic = (i, cache = {}) => {
  if (i === 0) return 0;
  if (i === 1) return 1;

  if (cache[i] === undefined)
    cache[i] = fibDynamic(i - 1, cache) + fibDynamic(i - 2, cache);

  return cache[i];
};

console.log('fibDynamic: ', fibDynamic(10)); // O(n)
