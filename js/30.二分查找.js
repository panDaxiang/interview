function binarySearch(arr, target) {
  if (!arr.includes(target)) {
    throw new Error(`${target} is not in this array`);
  }

  arr.sort((a, b) => a - b);
  let l = 0,
    r = arr.length,
    m = parseInt((l + r) / 2);
  while (arr[m] !== target) {
    if (arr[m] > target) {
      r = m;
    }
    if (arr[m] < target) {
      l = m;
    }
    m = parseInt((l + r) / 2);
  }

  return m;
}

let result = binarySearch([1, 2, 3, 4, 5, 6], 4);
console.log(result);
