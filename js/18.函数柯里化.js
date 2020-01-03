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

// 写一个加法函数(sum)，使他可以同时支持sum(x,y)和sum(x)(y)两种调用方式 
function sum(){
  let args = [...arguments]
  if(args.length == 2){
    return args.reduce((a, b) => a + b)
  }

  return function(){
    args = args.concat([...arguments])
    return sum(...args)
  }
}

console.log(sum(1)(2))
