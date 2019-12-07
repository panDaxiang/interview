let arr = [
  { name: "小王", age: 16 },
  { name: "小王吧", age: 14 },
  { name: "小王", age: 19 }
];

let obj = {};
const newArr = arr.reduce((newArr, item) => {
  if (!obj[item.name]) {
    newArr.push(item);
    obj[item.name] = true;
  }
  return newArr;
}, []);

console.log(newArr);
