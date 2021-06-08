const givenArr = [-4, -3, -2, 0, 1, 3, 6, 9];

const magicIndex = arr => {
  let index = 0;

  const recurse = ele => {
    if (index === ele) return ele;

    index++;

    return recurse(arr[index]);
  };

  return recurse(arr[index]);
};

console.log(magicIndex(givenArr));
