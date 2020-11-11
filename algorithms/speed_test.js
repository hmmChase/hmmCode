function makeRandomArray(arrayLength) {
  let arr = [];

  for (let j = 0; j < arrayLength; j++) {
    let upperLimit = 100000;
    let randomNumber = parseInt(Math.random() * upperLimit);

    arr.push(randomNumber);
  }

  return arr;
}

function makeArrays(arrayLength, numberOfArrays) {
  let arrays = [];

  for (let i = 0; i < numberOfArrays; i++) {
    arrays.push(makeRandomArray(arrayLength));
  }

  return arrays;
}

function speedTestFunction(fn, array) {
  let t1 = performance.now();
  fn(array);
  let t2 = performance.now();

  return t2 - t1;
}

function speedTestMultipleArrays(fn, numberOfArrays, arrayLength) {
  let arrays = makeArrays(arrayLength, numberOfArrays);

  let totalTime = arrays.reduce((totalTime, array) => {
    let speed = speedTestFunction(fn, array);
    totalTime += speed;
    return totalTime;
  }, 0);

  const averageTime = totalTime / numberOfArrays;

  return (averageTime * 1000).toPrecision(5);
}

function speedTestFunctions(functionArray) {
  return functionArray.map(fn => {
    let numberOfArrays = 5000;
    let arrayLength = 10;
    let speed10 = speedTestMultipleArrays(fn, numberOfArrays, 10);
    let speed100 = speedTestMultipleArrays(fn, numberOfArrays, 100);
    let speed1000 = speedTestMultipleArrays(fn, numberOfArrays, 1000);

    return {
      fnName: fn.name,
      speed10InMS: speed10,
      speed100InMS: speed100,
      speed1000InMS: speed1000
    };
  });
}

const functionList = [
  // constant time
  function isFirstElementNumber(array) {
    return typeof array[0] === 'number';
  },

  // linear time
  function doesNumberExist(array, number = 31) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === number) {
        return true;
      }
    }
    return false;
  },

  // exponential time
  function containsDuplicates(array, number = 31) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (i !== j && array[i] === array[j]) {
          return true;
        }
      }
    }
    return false;
  }
];

speedTestFunctions(functionList);
