# 已启用


- react：最新的响应式 JS 开发框架
    - redux：react state 管理
        - redux-devtools：redux 配套的开发者工具
            - redux-devtools-log-monitor：开发者工具可选模块
    - **TODO** redux 页面缓存：在 url 存储页面 state，关闭浏览次在此打开可以再次显示页面。
    - **TODO** react-router,单页应用程序切换页面时更该 url 地址，重新输入此 url 可以记忆页面

- webpack：打包工具
    - babel 使用最新的 JS 语法
        - babel-react：react 的语法
        - stage-0：es2016的语法
        - es2015：es2015 的语法
   - extract-text-webpack-plugin：将 js import 的 css 文件导出为单独的文件
   - postcss：直接转换原生 css 的工具。
       - autofix：为css添加兼容性前缀

- webpack-dev-server：webpack 配套的开发服务器
    - **TODO** hot loader：热加载 react 组件，修改了组件无须刷新页面即可查看变换


# 使用和更新方式

基于这个模版的项目使用复制黏贴的方式创建新项目。

有新的功能从新项目写入模版时，在模版创建一个分支，根据需要决定是否合并到 Master。
