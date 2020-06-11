// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x) {
  return x
    .split(' ')
    .filter(ele => {
      return ele !== ' ';
    })
    .join('');
}

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));

// Test.describe("Example tests", _ => {
//   Test.assertEquals(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'), '8j8mBliB8gimjB8B8jlB');
//   Test.assertEquals(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'), '88Bifk8hB8BB8BBBB888chl8BhBfd');
//   Test.assertEquals(noSpace('8aaaaa dddd r     '), '8aaaaaddddr');
// });

// top
// function noSpace(x) {
//   return x.replace(/\s/g, '');
// }
// function noSpace(x) {
//   return x.split(' ').join('');
// }
