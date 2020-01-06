Array.prototype.reduce2 = function(fn, initialValue) {
  const _this = this;
  let acc = initialValue || _this[0];
  const startIndex = initialValue ? 0 : 1;

  for (let i = startIndex; i < _this.length; i++) {
    const cur = _this[i];
    acc = fn(acc, cur, i, _this);
  }
  return acc;
};

const arr = [1, 2, 3];

console.log(arr.reduce2((a, b) => a + b, 0));
