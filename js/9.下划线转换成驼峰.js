function toCamelCaseVar(variable) {
  if (typeof variable !== "string")
    throw new Error(`${variable} is not string`);
  return variable.replace(/(\_|-)[a-zA-Z]{1}/g, all => {
    // all为正则匹配到的,对其处理,返回修改后的字符串
    return all.slice(1).toUpperCase();
  });
}

var s1 = toCamelCaseVar("ad-dsd_ddd");
var s2 = toCamelCaseVar("-123123123");
console.log(s1, s2);
