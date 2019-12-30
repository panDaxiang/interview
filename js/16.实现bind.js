/* bind特性一:函数柯里化 */
function add(a, b, c) {
  return a + b + c;
}

let func = add.bind(undefined, 1);
let result1 = func(2, 3);
// console.log(result1);
let func1 = func.bind(undefined, 2);
let result2 = func1(3);
// console.log(result2);

/* bind特性二: bind在new创建对象this绑定不管用,参数有用 */
function foo(c) {
  this.b = 100;
  console.log(this.a);
  console.log(c);
  return this.a;
}
let fn = foo.bind({ a: 1 }, 100);
fn(); // 1 100
let obj = new fn(); // undefined 100
console.log(obj); // foo { b: 100 }

/* bind实现 */
Function.prototype.bind2 = function(fn) {
  if (typeof this !== "function") {
    throw new Error("Function.prototype.bind绑定的方法不是函数");
  }
  let context = this;
  let args = Array.prototype.slice.call(arguments, 1),
    fNOP = function() {},
    fBound = function() {
      return context.apply(
        this instanceof fNOP ? this : fn,
        args.concat(Array.prototype.slice.call(arguments))
      );
    };
  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();
  return fBound;
};

let func2 = add.bind2(undefined, 1);
let result12 = func2(2, 3);
console.log(result12);
let func22 = func2.bind2(undefined, 2);
let result22 = func22(3);
console.log(result22);

let fn2 = foo.bind2({ a: 1 }, 100);
fn2(); // 1 100
let obj2 = new fn2(); // undefined 100
console.log(obj2); // foo { b: 100 }
