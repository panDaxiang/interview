Function.prototype.bind2 = function(fn) {
  let context = this;
  let args = [].slice.call(arguments, 1);
  let fNOP = function() {};

  fNOP.prototype = this.prototype;
  let fBound = function() {
    return context.apply(
      this instanceof fNOP ? this : fn,
      args.concat([].slice.call(arguments))
    );
  };
  fBound.prototype = new fNOP();
  return fBound;
};
