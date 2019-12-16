function rgbaToHex(color) {
  if (!color) throw new Error("缺少参数");
  var reg = /(?<=rgba?\()[\d\s,\.]+(?=\))/g;
  var match = color.match(reg);
  if (match) {
    var values = match[0].split(",");
    var a = parseFloat(values[3] || 1),
      r = Math.floor(a * parseInt(values[0]) + (1 - a) * 255) || 0,
      g = Math.floor(a * parseInt(values[1]) + (1 - a) * 255) || 0,
      b = Math.floor(a * parseInt(values[2]) + (1 - a) * 255) || 0;
    return `#${`0${r.toString(16)}`.slice(-2)}${`0${g.toString(16)}`.slice(
      -2
    )}${`0${b.toString(16)}`.slice(-2)}`;
  }

  return "";
}

var hex = rgbaToHex("rgba(255,232,186,0.4)");
var hex2 = rgbaToHex("rgba(255,232,186)");
console.log(hex);
console.log(hex2);

function hexToRgba(hex, opacity = 1) {
  if (!hex) throw new Error("缺少参数");

  var reg = /^#[0-9a-z]{6}$/;
  if (reg.test(hex)) {
    return `rgba(${parseInt(`0x${hex.slice(1, 3)}`)}, ${parseInt(
      `0x${hex.slice(3, 5)}`
    )}, ${parseInt(`0x${hex.slice(5, 7)}`)}, ${opacity})`;
  }
  throw new Error("输入参数格式错误");
}

var rgb = hexToRgba("#ffe8ba");
console.log(rgb);
