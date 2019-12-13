function getType(data) {
  return Object.prototype.toString
    .call(data)
    .split(" ")[1]
    .split("]")[0]
    .toLowerCase();
}

function clone(target, map = new WeakMap()) {
  if (getType(target) === "object" || getType(target) === "array") {
    let cloneTarget = Array.isArray(target) ? [] : {};
    if (map.has(target)) {
      return map.get(target);
    }
    map.set(target, cloneTarget);
    for (let key in target) {
      if (target.hasOwnProperty(key))
        cloneTarget[key] = clone(target[key], map);
    }

    return cloneTarget;
  }

  return target;
}

const target = {
  field1: 1,
  field2: undefined,
  field3: {
    child: "child"
  },
  field4: [2, 4, 8]
};

target.target = target;

console.log(clone(target));

// JSON.parse(JSON.stringify(target));
