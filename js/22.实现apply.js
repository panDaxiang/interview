Function.prototype.apply2 = function(obj) {
  let target = obj || window;
  let fn = Symbol("fn");
  target[fn] = this;
  let args = arguments[1] || [];
  const result = target[fn](...args);
  delete target[fn];
  return result;
};

let obj = {
  value: 123
};

function getValue() {
  console.log(this.value);
}

getValue.apply2(obj);
