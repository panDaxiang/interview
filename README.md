# 面试题合集

## 1.数据类型

### 基本数据类型

- number
- string
- null
- undefined
- boolean
- symbol
- bigint

### 引用类型

- Object(普通 Object, 数组 Array, 函数 Function, 日期 Date, 正则 RegExp)

## 2.null 是对象?

不是,虽然 typeof null === 'object', 可是 null 不是对象,是空指针

## 3.浏览器缓存

### 强缓存

浏览器通过 Cache-Control 的 max-age 检查检查是否过期,如果没有,则不需要请求 http,继续使用浏览器缓存.
Cache-Control 几个属性:

- max-age 过期时长
- public 浏览器和代理服务器都可以缓存
- private 只有浏览器可以缓存
- no-cache 进入协商缓存
- no-store 不缓存
- s-maxage 代理服务器的缓存时间

### 协商缓存

强缓存失效之后,会进入协商缓存.请求的时候浏览器头部会携带 tag 来向服务器请求,服务器根据 tag 判断缓存是否失效.
有两种方式:

- ETag
- Last-Modified

ETag 会根据文件内容是否改变修改标识,而 Last-Modified 记录的是时间,一方面精度不够,二是编辑文件不修改内容也会造成缓存失效.要是两者都支持,服务器优先使用 ETag

### 缓存位置

- Memory Cache
- Disk Cache

## 4.输入 URL 到页面呈现

- 输入地址
  检查是否有强缓存,有的话,使用缓存.否则,需要解析域名

- DNS 解析
  将域名解析成 IP 地址, 这个解析也会缓存,有的话直接使用域名缓存

- 建立 TCP 连接
  三次握手,确认连接,保证数据准确的到达接收方

- 发送 HTTP 请求
  包含请求行,请求头和请求体

- 请求成功
  请求成功,TCP 四次挥手,结束请求

## 5.new 操作符执行过程

- 新建一个空对象

  ```
  let obj = new Fn()
  ```

- 将新对象的内部原型指向构造函数的原型

  ```
  obj.__ptoto__ = Fn.prototype
  ```

- 将 this 指向新对象

  ```
  Fn.call(obj)
  ```

- 返回对象
  ```
  let result = Fn()
  if(result instanceof Object){
   fn = result
  }else{
   fn = obj
  }
  ```
