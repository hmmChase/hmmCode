// Welcome. In this kata, you are asked to square every digit of a number.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num) {
  const numStr = num.toString();
  let newStr = '';

  for (digit of numStr) newStr += digit * digit;

  return parseInt(newStr);
}

console.log(squareDigits(9119));

// Test.assertEquals(squareDigits(9119), 811181);
