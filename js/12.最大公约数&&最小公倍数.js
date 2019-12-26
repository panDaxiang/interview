function maxDivisor(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number")
    throw new Error(`${num1} && ${num2} are not Numbers`);
  let max = num1 > num2 ? num1 : num2;
  let min = num1 < num2 ? num1 : num2;
  for (let i = min; i >= 1; i--) {
    if (max % i === 0 && min % i === 0) {
      return i;
    }
  }
}

console.log(maxDivisor(2, 4));

function minDivisor(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number")
    throw new Error(`${num1} && ${num2} are not Numbers`);
  let max = num1 > num2 ? num1 : num2;
  let min = num1 < num2 ? num1 : num2;
  for (let i = 1; i <= min; i++) {
    let result = i * max
    if (result % min === 0) {
      return result;
    }
  }
}

console.log(minDivisor(2, 4));
