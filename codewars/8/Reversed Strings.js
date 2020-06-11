// Complete the solution so that it reverses the string value passed into it.

//   solution('world'); // returns 'dlrow'

function solution(str) {
  return str
    .split('')
    .reverse()
    .join('');
}

// Test.expect(solution('world') == 'dlrow');
console.log(' -------------------------------------');
console.log(' solution(world)', solution('world'));
console.log(' -------------------------------------');
