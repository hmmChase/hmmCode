// Given a string, you have to return a string in which each character(case -sensitive) is repeated once.

//   doubleChar("String") ==> "SSttrriinngg"

// doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"

// doubleChar("1234!_ ") ==> "11223344!!__  "

// function doubleChar(str) {
//   const strArr = str.split('');
//   const newStrArr = [...strArr];
//   strArr.forEach((ele, index) => {
//     newStrArr.splice(index + index, 0, ele);
//   });
//   return newStrArr.join('');
// }

const doubleChar = str => {
  return str
    .split('')
    .map(ele => {
      return ele + ele;
    })
    .join('');
};

// Test.describe("doubleChar", function () {
//   Test.it("works for some examples", function () {
//     Test.assertEquals(doubleChar("abcd"), "aabbccdd");
console.log(' -------------------------------------');
console.log(' doubleChar("abcd")', doubleChar('abcd'));
console.log(' -------------------------------------');
//     Test.assertEquals(doubleChar("Adidas"), "AAddiiddaass");
//     Test.assertEquals(doubleChar("1337"), "11333377");
//     Test.assertEquals(doubleChar("illuminati"), "iilllluummiinnaattii");
//     Test.assertEquals(doubleChar("123456"), "112233445566");
//     Test.assertEquals(doubleChar("%^&*("), "%%^^&&**((");
//   });
// });

// top
// const doubleChar = str =>
//   str
//     .split('')
//     .map(c => c + c)
//     .join('');
