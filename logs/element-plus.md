首先你需要安装unplugin-vue-components 和 unplugin-auto-import这两款插件

npm install element-plus --save

npm install -D unplugin-vue-components unplugin-auto-import


```js
// main.ts
import 'element-plus/dist/index.css'
```

```js
// vite.config.ts
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  // ...
  plugins: [
    // ...
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
})
```