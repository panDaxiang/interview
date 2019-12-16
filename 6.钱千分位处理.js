function price(num) {
  if (typeof num === "number") {
    num = num.toFixed(2)
    var reg = /\d{1,3}(?=(\d{3})+\.)/g;
    return num.toString().replace(reg, "$&,");
  } else {
    throw new Error("请输入数字");
  }
}

var num = 1231231231231.111;
var p1 = price(num);
console.log(p1);
console.log(num.toLocaleString());

// price('2342423')
