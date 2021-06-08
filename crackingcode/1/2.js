var checkPermute = function (stringOne, stringTwo) {
  // if different lengths, return false
  if (stringOne.length !== stringTwo.length) {
    return false;

    // else sort and compare
    // (doesnt matter how it's sorted, as long as it's sorted the same way)
  } else {
    const sortedStringOne = stringOne.split('').sort().join('');
    const sortedStringTwo = stringTwo.split('').sort().join('');

    return sortedStringOne === sortedStringTwo;
  }
};

console.log(checkPermute('aba', 'aab'));
console.log(checkPermute('aba', 'aaba'));
console.log(checkPermute('aba', 'aa'));
