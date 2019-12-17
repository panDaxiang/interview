function isPlalindrome(str) {
  if (typeof str !== "string") throw new Error(`${str} is not a string`);
  const len = str.length;
  if (len < 2) return false;

  const loopLength = parseInt(len / 2);
  for (let i = 0; i <= loopLength; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }

  return true;
}

console.log(isPlalindrome("11"));
console.log(isPlalindrome("1"));
console.log(isPlalindrome("111"));
console.log(isPlalindrome("1111"));
console.log(isPlalindrome("abba"));
