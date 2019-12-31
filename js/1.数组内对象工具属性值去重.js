let arr = [
  { name: "小王", age: 16 },
  { name: "小王吧", age: 14 },
  { name: "小王", age: 19 },
  { name: 1, age: 10 },
  { name: "1", age: 100 }
];

function deleteRepaet(arr) {
  let obj = new Map();
  return arr.reduce((newArr, item) => {
    if (!obj.has(item.name)) {
      newArr.push(item);
      obj.set(item.name, true);
    }
    return newArr;
  }, []);
}

let result = deleteRepaet(arr);

console.log(result);
