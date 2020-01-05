/* 
  给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
  你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。 
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  nums.sort((a, b) => a - b);
  let i = 0,
    j = nums.length - 1,
    result = [];
  while (nums[i] + nums[j] !== target) {
    if (nums[i] + nums[j] > target) {
      j--;
    }
    if (nums[i] + nums[j] < target) {
      i++;
    }
  }
  return result.concat(i, j);
};

let result = twoSum([2, 7, 11, 15], 9);
console.log(result);
