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

ETag 会根据文件内容是否改变修改标识,而 Last-Modified 记录的是时间,一方面精度不够,而是编辑文件不修改内容也会造成缓存失效.两者都支持,服务器优先使用 ETag

### 缓存位置
- Memory Cache
- Disk Cache
