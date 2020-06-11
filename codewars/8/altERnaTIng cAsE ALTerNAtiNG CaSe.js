// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// Define String.prototype.toAlternatingCase(or a similar function/ method such as to_alternating_case / toAlternatingCase / ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase.For example:

// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase() === "12345" // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
// As usual, your function/method should be pure, i.e. it should not mutate the original string.

String.prototype.toAlternatingCase = function() {
  let copyString = [...this];

  const capitals = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];
  const lowers = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];

  return copyString
    .map(char => {
      if (capitals.includes(char)) {
        return char.toLowerCase();
      } else if (lowers.includes(char)) {
        return char.toUpperCase();
      } else {
        return char;
      }
    })
    .join('');
};

console.log(
  ' ---------------------------------------------------------------------'
);
console.log(
  ' HeLLo WoRLD.toAlternatingCase()',
  'HeLLo WoRLD'.toAlternatingCase()
);
console.log(
  ' ---------------------------------------------------------------------'
);

// describe('String.prototype.toAlternatingCase', _ => {
//   it('should work for fixed tests (provided in the description)', _ => {
//     Test.assertEquals('hello world'.toAlternatingCase(), 'HELLO WORLD');
//     Test.assertEquals('HELLO WORLD'.toAlternatingCase(), 'hello world');
//     Test.assertEquals('hello WORLD'.toAlternatingCase(), 'HELLO world');
//     Test.assertEquals('HeLLo WoRLD'.toAlternatingCase(), 'hEllO wOrld');
//     Test.assertEquals('12345'.toAlternatingCase(), '12345');
//     Test.assertEquals('1a2b3c4d5e'.toAlternatingCase(), '1A2B3C4D5E');
//     Test.assertEquals(
//       'String.prototype.toAlternatingCase'.toAlternatingCase(),
//       'sTRING.PROTOTYPE.TOaLTERNATINGcASE'
//     );
//     Test.assertEquals(
//       'Hello World'.toAlternatingCase().toAlternatingCase(),
//       'Hello World'
//     );
//   });
// });

// top;
// String.prototype.toAlternatingCase = function() {
//   return this.split('')
//     .map(a => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
//     .join('');
// };
