exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    // return fn.apply(null, arr);

    return fn(...arr);
  },

  speak: function(fn, obj) {
    console.log('TCL: obj', obj.greeting);

    console.log('TCL: fn', fn(obj.greeting, obj.name));

    return fn(obj.greeting, obj.name);
  },

  functionFunction: function(str) {},

  makeClosures: function(arr, fn) {},

  partial: function(fn, str1, str2) {},

  useArguments: function() {},

  callIt: function(fn) {},

  partialUsingArguments: function(fn) {},

  curryIt: function(fn) {}
};
