function ajax() {
  let num = Math.random();
  if (num >= 0.5) {
    return Promise.resolve({
      data: [],
      message: "请求成功"
    });
  } else {
    return Promise.reject({
      data: null,
      message: "请求失败"
    });
  }
}
/* 
  count: 请求失败后再请求的次数
  interval: 请求失败后再次请求的时间间隔
*/
function requestRetry(count, interval) {
  let num = 0;
  return new Promise((resolve, reject) => {
    (function handleRequest(resolve, reject) {
      num++;
      console.log(num);
      ajax()
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          if (num > count) {
            reject(err);
          } else {
            setTimeout(() => {
              handleRequest(resolve, reject);
            }, interval);
          }
        });
    })(resolve, reject);
  });
}

requestRetry(5, 1000)
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });
