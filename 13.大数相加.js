function bigNumberAdd(str1, str2) {
  if (typeof str1 !== "string" || typeof str2 !== "string")
    throw new Error(`${str1} or ${str2} are not Strings`);

  const len1 = str1.length;
  const len2 = str2.length;
  const lengthDiff = Math.abs(len1 - len2);
  const diff = Array(lengthDiff)
    .fill(0)
    .join("");

  if (len1 > len2) {
    str2 = diff + str2;
  } else if (len1 < len2) {
    str1 = diff + str1;
  }

  const arr1 = str1.split("").reverse();
  const arr2 = str2.split("").reverse();
  const resultArr = [];

  for (let i = 0; i < arr1.length; i++) {
    const result = parseInt(arr1[i]) + parseInt(arr2[i]);
    if (result >= 10) {
      arr2[i + 1] = parseInt(arr2[i + 1]) + 1;
      resultArr.push(result % 10);
    } else {
      resultArr.push(result);
    }
  }

  return resultArr.reverse().join("");
}

let res1 = bigNumberAdd("11112222333344445555", "222200001111111111115555");
console.log(res1);
