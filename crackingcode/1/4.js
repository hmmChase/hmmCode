// examples: batab , qwertrewq, ada

// rtweqrewq

// split string into array

// loop over array

// check if first element === last element

const permutation = 'bataber';

const paladromePermutation = permutation => {
  const splitPerm = permutation.split('');

  const letterCount = {};

  for (let i = 0; i < splitPerm.length; i++) {
    const letter = splitPerm[i];

    if (!letterCount[letter]) {
      letterCount[letter] = 1;
    } else {
      letterCount[letter]++;
    }
  }

  const letterCountKeys = Object.keys(letterCount);

  // loop over keys, checking the value is value % 2
  // 0 = even
  // set var odd count > 1 === false

  let letterCountOdd = 0;

  letterCountKeys.forEach(letter => {
    // check if all letters are even except for one

    if (letterCount[letter] % 2 === 1) {
      letterCountOdd++;
    }
  });

  if (letterCountOdd > 1) {
    return false;
  } else {
    return true;
  }
};

console.log(paladromePermutation(permutation));
