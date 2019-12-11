// https://juejin.im/post/5decf09de51d45584d238319?utm_source=gold_browser_extension#heading-7

const todayILearn = {
  _id: 1,
  content: "今天学习 JSON.stringify()，我很开心！",
  created_at: "Mon Nov 25 2019 14:03:55 GMT+0800 (中国标准时间)",
  updated_at: "Mon Nov 25 2019 16:03:55 GMT+0800 (中国标准时间)"
};

const mapObj = {
  _id: "id",
  created_at: "createdAt",
  updated_at: "updatedAt"
};

const newTodayILearn = JSON.parse(
  JSON.stringify(todayILearn).replace(
    /(_id|created_at|updated_at)/g,
    matched => mapObj[matched]
  )
);

console.log(1, newTodayILearn);

const data = {
  a: "aaa",
  b: Symbol("aaa"),
  c: undefined,
  fn: function() {
    return true;
  },
  d: "ddd",
  e: null
};

console.log(2, JSON.stringify(data));

const data2 = [
  "aaa",
  Symbol("aaa"),
  undefined,
  function() {
    return true;
  },
  "ddd"
];

console.log(3, JSON.stringify(data2));

const data3 = JSON.stringify({
  toJSON: () => "today i learn"
});

console.log(4, data3);

const data4 = JSON.stringify({
  now: new Date()
});

console.log(5, data4);

console.log(
  6,
  JSON.stringify(null),
  JSON.stringify(Infinity),
  JSON.stringify(NaN)
);

const data5 = JSON.stringify(data, (key, value) => {
  switch (true) {
    case typeof value === "undefined":
      return "undefined";
    case typeof value === "symbol":
      return value.toString();
    case typeof value === "function":
      return value.toString();
    default:
      break;
  }
  return value
});

console.log(7, data5);

const data6 = JSON.stringify(data, ['a', 'd'])

console.log(8, data6);

const tiedan = {
  name: "弹铁蛋同学",
  describe: "今天在学 JSON.stringify()",
  emotion: "like shit"
};

console.log(9, JSON.stringify(tiedan, null, "🐷"));
