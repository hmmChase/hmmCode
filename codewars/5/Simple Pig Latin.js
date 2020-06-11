// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
  const punctuation = ['.', '!', '?'];
  const strNew = str.split(' ');
  return strNew
    .map(ele => {
      const eleSplit = ele.split('');

      for (letter of eleSplit) {
        if (punctuation.includes(letter)) {
          return ele;
        }
      }

      eleSplit.push(eleSplit.shift() + 'ay');

      return eleSplit.join('');
    })
    .join(' ');
}

console.log(pigIt('Pig latin is cool !'));

// Test.assertEquals(pigIt('Pig latin is cool'), 'igPay atinlay siay oolcay');
// Test.assertEquals(pigIt('This is my string'), 'hisTay siay ymay tringsay');
