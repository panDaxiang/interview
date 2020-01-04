function chibingan(child, cookies) {
  if (child.length === 0 && cookies.length === 0) {
    return 0;
  }
  let result = 0;
  let i = 0;
  let j = 0;
  child.sort((a, b) => a - b);
  cookies.sort((a, b) => a - b);

  while (i < child.length && j < cookies.length) {
    if (child[i] <= cookies[j]) {
      i++;
      j++;
      result++;
    } else {
      j++;
    }
  }

  return result;
}

console.log(chibingan([1, 2, 4], [1, 2, 3]));
