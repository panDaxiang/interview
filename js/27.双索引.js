// 题目要求我们把非零元素全部排列在前面，0全部放到最后
function moveZeros(arr) {
  let k = 0;
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i]) {
      if (i !== k) {
        [arr[k], arr[i]] = [arr[i], arr[k]];
      }

      k++;
    }
  }
  return arr;
}

console.log(moveZeros([0, 0, 0]));

// 题目要求我们找出一个数组中相加为target的两个数，并返回他们的次序,数组以从小到大排序
function twoSum(arr, target) {
  let i = 0,
    j = arr.length - 1;
  while (i < j) {
    let sum = arr[i] + arr[j];
    if (sum === target) return [i + 1, j + 1];
    if (sum > target) j--;
    else i++;
  }
  return [];
}

console.log(twoSum([1, 2, 3, 4], 8));
