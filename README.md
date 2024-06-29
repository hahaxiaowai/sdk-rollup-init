## sdk-rollup-init

js库初始化框架，可用来快速搭建库包
## TODO
1. eslint配置 &#10004;
2. 完善目录结构 &#10004;
3. 更新依赖项 &#10004;
4. 测试

## 使用
1.
``` shell
git clone https://github.com/hahaxiaowai/sdk-rollup-init.git
```
2. 将文件夹名改成你的库名
``` shell
cd XXX
pnpm i
```
3. 在package.json中更改name
4. 在`src/index.js`中编写代码
```js
const a = 1;
export default a;
```
5. 打包配置
默认增加了很多配置，可以按需求注释不需要的插件

默认为`umd`打包，也可以按需求改成其他打包形式
6. 打包
``` shell
npm run build
```