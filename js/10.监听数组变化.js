function ObserverbleArray() {
  return new Proxy([], {
    get(target, props) {
      const matArr = [
        "push",
        "pop",
        "shift",
        "unshift",
        "splice",
        "sort",
        "reverse"
      ];
      matArr.includes(props) && console.log(props);

      return target[props];
    }
  });
}

let arr = new ObserverbleArray();
arr.push("1");
arr.push("2");
arr.pop("2");
console.log(arr);
