function isType(data, type){
  return Object.prototype.toString.call(data) === `[object ${type}]`
}

console.log(isType([], 'Array'));