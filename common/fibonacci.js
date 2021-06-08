/*
compute the nth fibonacci number
add the previous 2 numbers to get the next number
a sequence of numbers in that each number is the sum of the 2 preceding numbers
starts at 0




pN(previous num) = 0
pS(previous sum) = 1
s(sum)
nth(nth digit) = n


while nth<=n

0pN + 1pS = 1s
pN = pS
pS = s
n++

1pN + 1pS = 2s

1pN + 2pS = 3s

2pN + 3pS = 5s

return s


O(2^n)

f(5)

0
i + (i+1) => i-- => i + (i+1) => i--


sequence of numbers where the next number is the sum of the 2 previous numbers
0,1,1,2,3,5


- subproblems
previous number = i-1
second to last number = i-2
add them to get answer
if index is 0 or 1, just return 0 or 1, because not enough numbers


ex: f(5)

- iteratively
base 0
base 0,1
f(0) 0
f(1) 0, 1
f(2) 0, 1, 1
f(3) 0, 1, 1, 2
f(4) 0, 1, 1, 2, 3
f(5) 0, 1, 1, 2, 3, 5

- recursively
                          f(5) 5
                     i-1 /  \ i-2
                  f(4) 3  +  2 f(3)
                 i-1 /  \ i-2
              f(3) 2  +  1 f(2)
             i-1 /  \ i-2
          f(2) 1  +  1 f(1)
         i-1 /  \ i-2
      f(1) 1  +  0 base
     i-1 /  \ i-2
  base 0  +  1 base



                 5  fib(5)
               / \
             3   2
           / \
         2   1
       / \
     1   1
   / \
  0   1

*/

// const fibonacci = i => {
//   if (i === 0) return 0;
//   if (i === 1) return 1;

//   return fibonacci(i - 1) + fibonacci(i - 2);
// };

// console.log('fibonacci: ', fibonacci(10));

// // dynamic (memoization)
// const fibDynamic = (i, cache) => {
//   let cached = cache || {};

//   if (i === 0) {
//     return 0;
//   }
//   if (i === 1) {
//     return 1;
//   }

//   if (cached[i] === undefined) {
//     cached[i] = fibDynamic(i - 1, cached) + fibDynamic(i - 2, cached);
//   }

//   return cached[i];
// };

// console.log('fibDynamic: ', fibDynamic(5)); // O(n)

// const fibonacci2 = nth => {
//   if (nth <= 1) {
//     return nth;
//   }

//   const preceding1 = fibonacci2(nth - 1);

//   const preceding2 = fibonacci2(nth - 2);

//   return preceding1 + preceding2;
// };

// console.log('fibonacci2: ', fibonacci2(10));

// // O(n)
// const fibonacci3 = nth => {
//   // previous sum
//   let pS = 0;

//   // previous num
//   let pN = 1;

//   // nth digit
//   let n = 1;

//   // sum
//   let s = 0;

//   while (n <= nth) {
//     s = pN + pS;

//     pN = pS;

//     pS = s;

//     n++;
//   }

//   return s;
// };

// console.log('fibonacci3: ', fibonacci3(10));

// function fibonacci4(num) {
//   let a = 1;
//   let b = 0;
//   let temp;

//   while (num >= 1) {
//     a = a + b;

//     temp = a;

//     b = temp;

//     num--;
//   }

//   return b;
// }

// console.log('fibonacci4: ', fibonacci4(10));

const fibDynamic = (n, cache) => {
  let cached = cache || {};

  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  if (cached[n] === undefined) {
    const fib1 = fibDynamic(n - 1, cached);

    const fib2 = fibDynamic(n - 2, cached);

    cached[n] = fib1 + fib2;
  }

  return cached[n];
};

console.log('fibDynamic: ', fibDynamic(10));
