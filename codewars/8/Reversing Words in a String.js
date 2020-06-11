// You need to write a function that reverses the words in a given string.A word can also fit an empty string.If this is not clear enough, here are some examples:

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

//   reverse('Hello World') === 'World Hello'
// reverse('Hi There.') === 'There. Hi'

function reverse(string) {
  return string
    .split(' ')
    .reverse()
    .join(' ');
}

reverse('no one cares');
console.log(' -------------------------------------------------');
console.log(' reverse(no one cares)', reverse('no one cares'));
console.log(' -------------------------------------------------');

// Test.describe('Basic Examples', _ => {
//   Test.assertEquals(reverse('I am an expert at this'), 'this at expert an am I');
//   Test.assertEquals(reverse('This is so easy'), 'easy so is This');
//   Test.assertEquals(reverse('no one cares'), 'cares one no');
//   Test.assertEquals(reverse(''), '');
//   Test.assertEquals(reverse('CodeWars'), 'CodeWars');
// })
