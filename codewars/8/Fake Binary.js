// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'.Return the resulting string.

function fakeBin(x) {
  return x
    .split('')
    .map(ele => (ele >= 5 ? 1 : 0))
    .join('');
}

fakeBin('45385593107843568');
console.log(' -----------------------------------------------------------');
console.log(' fakeBin(45385593107843568)', fakeBin('45385593107843568'));
console.log(' -----------------------------------------------------------');

// Test.describe("Example tests", _ => {
//   Test.assertEquals(fakeBin('45385593107843568'), '01011110001100111');
//   Test.assertEquals(fakeBin('509321967506747'), '101000111101101');
//   Test.assertEquals(fakeBin('366058562030849490134388085'), '011011110000101010000011011');
// });
