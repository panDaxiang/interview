function toChineseNum(num) {
  if (typeof num !== "number") throw new Error(`${num} is not a number`);
  // 不处理小数
  num = parseInt(num);
  num += "";

  const numLength = num.length;

  if (numLength > 8) {
    return (
      getResult(num.slice(0, numLength - 8)) + "亿" + getResult(num.slice(-8))
    );
  }

  return getResult(num);
}

function getResult(str) {
  const numStr = "零一二三四五六七八九十";
  const unitArr = ["", "十", "百", "千", "万"];
  let res = "";
  let strLength = str.length;
  if (strLength < 5) {
    for (let i in str) {
      res += numStr[str[i]] + unitArr[strLength - i - 1];
    }
  }

  if (strLength > 5) {
    let first = str.slice(-5);
    let second = str.slice(0, strLength - 5);
    let secondLength = second.length;
    for (let i in second) {
      res += numStr[second[i]] + unitArr[secondLength - i];
    }

    for (let i in first) {
      res += numStr[first[i]] + unitArr[4 - i];
    }
  }
  return res
    .replace(/零[零十百千]/g, "")
    .replace(/零+$/, "")
    .replace(/零万/g, "万");
}

console.log(toChineseNum(11122223333));
