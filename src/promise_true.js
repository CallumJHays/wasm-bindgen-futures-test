function promise_true() {
  return new Promise(function(resolve) {
    resolve(true);
  });
}

module.exports = { promise_true };
