/* 
  JS编码实现一个render方法，使得可以这样调用：
  const year = ‘2017’;
  const month = ‘09’;
  const day = ‘21’;
  const str = render(‘year−{month}-${day}’)({year,month,day});
  console.log(str)//输出2017-09-21 
*/

function render(str) {
  let matchs = str.match(/[a-z]+/g);
  return function(params) {
    let result = [];
    matchs.forEach(element => {
      if (params.hasOwnProperty(element)) result.push(params[element]);
    });
    return result.join("-");
  };
}

const year = "2017";
const month = "09";
const day = "21";

let result = render("year−{month}-${day}")({ year, month, day });
console.log(result);
