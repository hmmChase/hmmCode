(function () {
  class TimeoutManager {
    constructor() {
      this.timers = [];
    }

    addTimer(timerId) {
      this.timers.push(timerId);
    }

    clearTimeouts() {
      this.timers.forEach(timerId => {
        window.clearTimeout(timerId);
      });
    }
  }

  const mgr = new TimeoutManager();

  const oldTimeout = window.setTimeout;

  window.setTimeout = function (cb, ms) {
    let timerId = oldTimeout(cb, ms);

    mgr.addTimer(timerId);
  };

  window.clearAllTimeouts = function () {
    mgr.clearTimeouts();
  };
})();
