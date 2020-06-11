// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  return s.split('').filter(ele => ele !== '!').join('')
}

removeExclamationMarks('Hello World!');
console.log(
  ' -------------------------------------------------------------------------------'
);
console.log(
  ' removeExclamationMarks(Hello World!)',
  removeExclamationMarks('Hello World!')
);
console.log(
  ' -------------------------------------------------------------------------------'
);
// Test.assertSimilar(removeExclamationMarks('Hello World!'), 'Hello World');
