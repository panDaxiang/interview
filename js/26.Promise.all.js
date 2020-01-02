// 实现Promise.all
Promise.all2 = function(arr) {
  return new Promise((resolve, reject) => {
    let result = [];
    let index = 0;
    let len = arr.length;
    if (len === 0) {
      resolve(result);
    } else {
      for (let i = 0; i < len; i++) {
        arr[i]
          .then(res => {
            index++;
            result.push(res);
            if (index === len) {
              resolve(result);
            }
          })
          .catch(err => {
            reject(err);
          });
      }
    }
  });
};

let p1 = Promise.resolve(1);
let p2 = Promise.reject(2);
let p3 = Promise.resolve(3);
Promise.all2([p1, p2, p3])
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });
