function toCamelCaseVar(str){
  let reg = /[-|_][a-zA-Z]{1}/g
  return str.replace(reg, function(ele){
    return ele.slice(1).toUpperCase()
  })
}

let result = toCamelCaseVar('ad-dsd_ddd')
console.log(result);