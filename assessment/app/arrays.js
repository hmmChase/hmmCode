exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce((total, num) => {
      // return (total = total + num);
      return (total += num);
    }, 0);
  },

  remove: function(arr, item) {
    return arr.filter(ele => {
      return ele != item;
    });
  },

  removeWithoutCopy: function(arr, item) {
    // increment
    // for (let i = 0; i < arr.length; i++) {
    //   if (arr[i] === item) {
    //     arr.splice(i, 1);
    //     i--;
    //   }
    // }

    // decrement
    // for (let i = arr.length - 0; i >= 0; i--) {
    //   if (arr[i] === item) {
    //     arr.splice(i, 1);
    //   }
    // }

    // while
    let i = 0;
    while ((i = arr.indexOf(item, i)) > -1) {
      arr.splice(i, 1);
    }

    return arr;
  },

  append: function(arr, ele) {
    arr.push(ele);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    // return arr1.concat(arr2);
    return [...arr1, ...arr2];
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    return arr.reduce((accum, ele, ind) => {
      if (ele === item) {
        accum++;
      }
      return accum;
    }, 0);
  },

  duplicates: function(arr) {
    const duplicates = arr.reduce((accum, ele, i, arr) => {
      if (arr.indexOf(ele) !== i && accum.indexOf(ele) < 0) {
        accum.push(ele);
      }
      return accum;
    }, []);

    return duplicates;

    // const occurrances = {};
    // arr.forEach(element => {
    //   if (!occurrances[element]) {
    //     occurrances[element] = 1;
    //   } else {
    //     occurrances[element]++;
    //   }
    // });

    // const nonDups = [];
    // for (const prop in occurrances) {
    //   if (occurrances[prop] > 1) {
    //     nonDups.push(parseInt(prop));
    //   }
    // }

    // return nonDups;
  },

  square: function(arr) {
    return arr.map(ele => {
      return ele * ele;
    });
  },

  findAllOccurrences: function(arr, target) {
    return arr.reduce((accum, ele, i) => {
      if (target === ele) {
        accum.push(i);
      }
      return accum;
    }, []);
  }
};
