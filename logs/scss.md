命令行：
npm install --save-dev sass-loader

npm install --save-dev node-sass

npm install --save-dev sass

配置项：
vue.config.js
```js
export default defineConfig({
  css: {
    // css 预处理器
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/scss/base.scss";'
      }
    }
  }
})
```
