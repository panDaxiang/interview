/* 
  ajax.get(url,options).then(success, fail);
  ajax.post(url,data,options).then(success,fail); 
*/

var ajax = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open("get", url, true);
      xhr.send();
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject("请求失败");
          }
        }
      };
    });
  },
  post(url, data, params) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open("post", url, true);
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhr.send("");
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject("请求失败");
          }
        }
      };
    });
  }
};
