// const whileloop = n => {
//   while (n <= 3) {
//     n++;
//   }

//   return 'end';
// };

// console.log(whileloop(1));

// const forloop = () => {
//   for (let n = 1; n <= 3; n++) {
//     console.log('foorloop:', n);
//   }

//   return 'end';
// };

// console.log(forloop());

// const recursive1 = n => {
//   console.log('recursive1:', n);

//   if (n < 3) {
//     return recursive1(++n);
//   }

//   return 'end';
// };

// console.log(recursive1(1));

const recursive2 = n => {
  console.log('recursive2:', n);

  if (n >= 3) {
    return 'end';
  }

  return recursive2(++n);
};

console.log(recursive2(1));

// // objects

// // arrays
