exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    // console.log('TCL: value', value);

    var dfd = $.Deferred();
    // console.log('TCL: dfd', dfd);

    setTimeout(function() {
      dfd.resolve(value);
    }, 10);

    // console.log('dfd.promise();', dfd.promise());

    return dfd.promise();
  },

  manipulateRemoteData: async function(url) {
    const response = await fetch(url);
    const data = await response.json();

    return data.people
      .map(ele => {
        return ele.name;
      })
      .sort();
  }
};
