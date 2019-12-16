function isPrime(num) {
  if (typeof num !== "number") throw new Error(`${num} is not number`);
  // 如果这个数是 2 或 3，一定是素数
  if (num === 2 || num === 3) {
    return true;
  }

  // 如果是偶数，一定不是素数
  if (num % 2 === 0) {
    return false;
  }

  var divisor = 3,
    limit = Math.sqrt(num);
  // 如果这个数不能被 3 至它的平方根中的任一数整除，m 必定是素数
  while (limit >= divisor) {
    if (num % divisor === 0) {
      return false;
    }
    divisor += 2;
  }

  return true;
}

var s1 = isPrime(13);
var s2 = isPrime(12);
console.log(s1, s2);
