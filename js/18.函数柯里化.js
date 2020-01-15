let add = (...rest) => {
  let result = [];
  result.push(...rest);
  let curry = (...rest) => {
    if (rest.length === 0) {
      return result.reduce((a, b) => a + b);
    } else {
      result.push(...rest);
      return curry;
    }
  };
  return curry;
};

let res1 = add(1, 2)();
let res2 = add(1)(2)();

let curry = (fn, ...args) => {
  let result = [...args];
  let _fn = (...args) => {
    if (args.length === 0) {
      return fn.apply(this, result);
    } else {
      result.push(...args);
      return _fn;
    }
  };

  return _fn;
};

function plus() {
  return [...arguments].reduce((a, b) => a + b);
}

let res3 = curry(plus, 1)(2, 3)();
console.log(res3);
