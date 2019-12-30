function add() {
  let args = [].slice.call(arguments);
  let curring = function() {
    if (arguments.length === 0) {
      return args.reduce((a, b) => a + b);
    } else {
      args.push(...arguments);
      return curring;
    }
  };

  return curring;
}

let result = add(1, 2, 3)();
let result2 = add(1)(2)(3)();
console.log(result, result2);
