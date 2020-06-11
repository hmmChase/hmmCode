exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function(start, end) {
    // let timerId = setInterval(myCallback, 100);
    // console.log('TCL: timerId', timerId);

    // function myCallback() {
    //   console.error(start);
    //   start++;

    //   if (start === end) {
    //     clearInterval(timerId);
    //     console.error('cancel');
    //   }
    // }

    // return {
    //   cancel: function() {
    //     timerId && clearTimeout(timerId);
    //   }
    // };

    let timeout;
    function doIt() {
      console.log(start++); // eslint-disable-line no-console

      if (start <= end) {
        timeout = setTimeout(doIt, 100);
      }
    }

    doIt();

    return {
      cancel: function() {
        timeout && clearTimeout(timeout);
      }
    };
  }
};
