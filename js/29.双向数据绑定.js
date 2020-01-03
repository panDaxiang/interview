let obj = {}
let p1 = new Proxy(obj, {
  set(target, key, value){
    target[key] = value
    return target
  },
  get(target, key){
    return target[key]
  }
})

p1.a = 1
console.log(p1.a);