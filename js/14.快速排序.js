function quickSort(arr) {
  if (arr.length < 2) return arr;
  let left = [];
  let right = [];
  let base = arr[0];
  let len = 0;
  arr.forEach(element => {
    if (element < base) {
      left.push(element);
    } else if (element > base) {
      right.push(element);
    } else if (element === base) {
      len++;
    }
  });
  return quickSort(left).concat(Array(len).fill(base), quickSort(right));
}

let arr = [1, 2, 3, -5, 33, 19, 2, 4, 3, 1];
console.log(quickSort(arr));
