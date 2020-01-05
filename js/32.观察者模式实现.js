class Emit {
  constructor() {
    this.handles = {};
  }

  on(eventType, handle) {
    if (!this.handles.hasOwnProperty(eventType)) {
      this.handles[eventType] = [];
    }
    if (typeof handle === "function") {
      this.handles[eventType].push(handle);
    } else {
      throw new Error("缺少回调函数");
    }

    return this;
  }

  emit(eventType) {
    if (this.handles.hasOwnProperty(eventType)) {
      this.handles[eventType].forEach(ele => {
        ele();
      });
    } else {
      throw new Error("事件未注册");
    }

    return this;
  }

  remove(eventType, handle) {
    if (!this.handles.hasOwnProperty(eventType)) {
      throw new Error("事件未注册");
    }
    if (typeof handle === "function") {
      this.handles[eventType].forEach((ele, index, arr) => {
        if (ele === handle) arr.splice(index, 1);
      });
    } else {
      throw new Error("缺少回调函数");
    }
    return this;
  }
}

let e = new Emit();
let fn = function() {
  console.log("eat");
};
e.on("eat", fn);

e.remove("eat", fn);

e.emit("eat");
