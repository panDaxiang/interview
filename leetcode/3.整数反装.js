// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var max = Math.pow(2, 31) - 1;
  var min = -Math.pow(2, 31);
  let y = 0;
  while (x !== 0) {
    y = y * 10 + (x % 10);
    x = ~~(x / 10);
  }

  if (y > max || y < min) return 0;
  return y;
};
